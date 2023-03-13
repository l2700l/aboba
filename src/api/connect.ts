import { BigNumber, ethers } from 'ethers';
import LocToken from './LocToken.json';
import { usersType } from '../types/user';
import { whitelistRequests } from '../types/whitelistRequests';

export class ETH {
  static provider: ethers.providers.Web3Provider;
  static accounts: any;
  static contract: ethers.Contract;
  static signer: ethers.providers.JsonRpcSigner
  static connect = async () => {
    // @ts-ignore
    this.provider = new ethers.providers.Web3Provider(window.ethereum)
    this.signer = this.provider.getSigner();
  
    this.accounts = await this.provider.send("eth_requestAccounts", []);
    // @ts-ignore
    this.contract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, LocToken.abi, this.signer);
    return this.accounts[0];
  }
  static wait = (msec: number) => {
    return new Promise((resolve, _) => {
      setTimeout(resolve, msec)
    })
  }
  static getRole = async () => {
    const roleNum = await this.contract.userRoles(this.accounts[0])
    switch (roleNum) {
      case 0:
        return 'owner'
      case 1:
        return 'private'
      case 2:
        return 'public'
      case 3:
        return 'user'
    }
    return 'user'
  }
  static getBalance = async () => {
    const eth = (await this.provider.getBalance(this.accounts[0])).toString()
    const cmon = (await this.contract.balanceOf(this.accounts[0])).toNumber()
    return {CMON: cmon, ETH: eth}
  }
  
  static getUsers = async (): Promise<usersType> => {
    const users: string[] = []
    let index = 0;
    while (true) {
      try {
        const user = await this.contract.users(index);
        users.push(user)
        index++;
        continue;
      } catch (e) {
        break;
      }
    }
    return await this.getBalances(users)
  }
  static getBalances = async (users: string[]): Promise<usersType> => {
    const data: any[] = []
    for (let i = 0; i<users.length; i++) {
      const address = users[i]
      const public_balance = await this.contract.publicTokens(address);
      const private_balance = await this.contract.privateTokens(address);
      data.push({
        address: address,
        privateBalance: +private_balance,
        publicBalance: +public_balance
      })
    }
    return {
      data
    } as usersType
  }
  
  static getRequests = async () => {
    const users: string[] = []
    let index = 0;
    while (true) {
      try {
        const user = await this.contract.requestAddresses(index);
        users.push(user)
        index++;
        continue;
      } catch (e) {
        break;
      }
    }
    const data: any[] = []
    for (let i = 0; i < users.length; i++) {
      const name = await this.contract.requests(users[i])
      data.push({
        name,
        address: users[i],
      })
    }
    return {data} as whitelistRequests
  }
  static handleRequest = async (sender: string, isAccept: boolean) => {
    const tx = await this.contract.handleRequest(sender, isAccept)
    await tx.wait()
  }
  static sendRequest = async (name: string) => {
    const tx = await this.contract.sendRequest(name)
    await tx.wait()
  }
  
  static getTime = async () => {
    const timeDiff = (await this.contract.timeDiff()).toNumber()
    const phase = timeDiff < 5 ? 'seed' : timeDiff < 10 ? 'private' : 'public'
    return {timeDiff, phase}
  }
  
  static timeTravel = async () => {
    const tx = await this.contract.timeTravel({gasPrice: '250000000000'});
    await tx.wait()
  }
  
  static getPhase = async () => {
    return await this.contract.currentPhase();
  }
  static approve = async (to: string, amount: number) => {
    const tx = await this.contract.approve(to, amount);
    await tx.wait()
  }
  static transferFrom= async (from: string, amount: number) => {
    const tx = await this.contract.transferFrom(from, this.accounts[0], amount);
    await tx.wait()
  }
  static transfer= async (to: string, amount: number) => {
    const tx = await this.contract.transfer(to, amount);
    await tx.wait()
  }
  static changeCost = async (amount: number) => {
    const tx = await this.contract.changeCost(ethers.utils.parseEther(amount.toString()));
    await tx.wait()
  }
  static buy = async (amount: number) => {
    const cost = await this.contract.cost();
    const sum = cost.toNumber() * amount
    const options = {value: BigNumber.from(sum.toString())};
    const tx = await this.contract.buy(amount, options)
    await tx.wait()
  }
  static setPrivatePhase = async () => {
    const tx = await this.contract.setPrivatePhase();
    await tx.wait()
  }
  static setPublicPhase = async () => {
    const tx = await this.contract.setPublicPhase();
    await tx.wait()
  }
}
