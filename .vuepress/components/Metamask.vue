<template>
	<div>
  	<button @click="loginRequest" :disabled="this.isMetamask == 0">{{ haveMetamask }}</button>
		<div class="account" v-if="Object.keys(this.account).length !== 0">
			<span class="account-title">Account: &nbsp;</span>
			<span class="account-value">{{ this.account[0] }}</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			haveMetamask: 'Connect Metamask Wallet',
			isMetamask: 0,
			account: {},
		}
	},
	methods: {
		async loginRequest() {
			if (this.isMetamask) {
				this.account = await ethereum.request({
					method: 'eth_requestAccounts',
					params: [
						{
							eth_accounts: this.account
						}
					]
				})
			}
		},
	},
	mounted() {
		if (!window.ethereum) {
			this.haveMetamask = "You don't have Metamask Wallet"
			this.isMetamask = 0
		} else {
			this.isMetamask = 1
		}
	}
}
</script>

<style scoped>
.account {
	border-radius: 10px;
	background-color: #79B473;
	margin-top: 20px;
	padding: 20px 40px;
	color: white;
}
.account > .account-title {	font-weight: bold; }
.account > .account-value {	overflow-wrap: break-word; }
</style>