<template>
<div>
<div class="bananer">
		<i class="iconfont icon-cuo"></i>
	</div>
	<div class="title-1">
		<span>简书</span>
	</div>
	<div class="denglufangshi">上次登录方式:<span></span>
	</div>
	<div class="yonghu">
		
			<form action="">
			<div class="border">
				<div class="item-1">
					<div class="touxiang">
						<i class="iconfont icon-renxiang"></i>
					</div>
					<input id="username" type="text" placeholder="手机或邮箱" name="username">
					<div class="tubiao">
						<i class="iconfont icon-false-circle"></i>
					</div>
				</div>
				<div class="xian">
				</div>
				<div class="item-1">
						<div class="touxiang">
							<i class="iconfont icon-mm"></i>
						</div>
						<input type="password" id="password" placeholder="密码" name="password">
						<div class="tubiao">
							<i class="iconfont icon-xianshimima1 " id="font-50"></i>
						</div>
				</div>
			</div>
				<div class="tijiao">
					<input type="submit" value="登录">
				</div>	
			</form>
			<div class="wangji">
				<span>忘记密码?</span>
			</div>
	</div>
	<div class="shequ">
		<div class="fl"></div><span>社交账号直接登录</span><div class="fr"></div>
	
	</div>
	<div class="shequtu">
		<div><img src="static/images/t-1.jpg" alt=""></div>
		<div><img src="static/images/t-2.jpg" alt=""></div>
		<div><img src="static/images/t-3.jpg" alt=""></div>
		<div><img src="static/images/t-4.jpg" alt=""></div>
	</div>
	<div class="footer-2">
		<span class="red">新用户注册</span>
		<span class="mlr">|</span>
		<span>随便看看</span>
		<span class="mlr">|</span>
		<span>登录遇到问题?</span>
	</div>
</div>
</template>
<style>

.fl{float: left;}
.fr{float: right;}
#font-50{font-size: 0.550459rem;}
.ml60{margin-left: 0.550459rem;}
.bananer{padding:0.53211rem 0.385321rem;height: 1.87156rem;}
.bananer i{font-size: 0.33945rem;float: right;}
.title-1{width: 100%;padding-bottom: 1.211009rem;}
.title-1 span{font-size: 1.247706rem;width: 100%;display: inline-block;text-align: center;color:#e78170;}
.denglufangshi{opacity: 0;height: 0.348624rem;padding-bottom: 0.348624rem;}
.yonghu{padding:0 0.550459rem;height: 6.880734rem;width: 8.899083rem;}
.yonghu .border{height:2.669725rem;border: 0.009174rem solid #cfcfcf;width: 8.880734rem; }
.yonghu form .xian{width: 100%;height: 0.009174rem;background: #cfcfcf}
.yonghu form .item-1 {width: 8.880734rem;height:1.330275rem; }

.yonghu form .item-1 .touxiang{width: 1.651376rem;height: 1.330275rem; float: left; text-align: center;line-height: 1.330275rem; color: #969696}
.yonghu form .item-1 .touxiang i{font-size: 0.422018rem;}
.yonghu form .item-1 input{width: 5.908257rem;height: 1.311927rem;outline: none;border: none;font-size: 0.458716rem;}
.yonghu form .item-1 .tubiao{width: 1.321101rem;float: right;height: 1.330275rem;text-align: center;line-height: 1.330275rem;color: #c8c8c8}
.yonghu form .item-1 .tubiao i{font-size: 0.422018rem; display: none;}
.yonghu .tijiao{margin-top: 0.550459rem;height: 1.321101rem;width: 100%;}
.yonghu .tijiao input{width: 100%;height: 1.321101rem;background: #97c8e3;border: none;outline: none;font-size: 0.477064rem;color: #fff;border-radius: 0.045872rem;}
.wangji{padding-top: 0.697248rem;padding-bottom: 0.917431rem;}
.wangji span{font-size: 0.422018rem;color: #919191;text-align: center;width: 100%;display: inline-block;}

.shequ{padding:0 1.834862rem;}
.shequ span{width: 4.12844rem;display: inline-block;text-align: center;color: #919191}
.shequ div{width: 1.100917rem;height: 0.018349rem;background: #cfcfcf;margin-top: 0.275229rem;}
.shequtu{margin-top: 0.623853rem;height: 1.100917rem;padding:0 1.926606rem;display:flex;}
.shequtu div{float: left;flex:25%;}

.footer-2{margin-top: 0.642202rem;padding-bottom:1.834862rem;padding-left: 1.009174rem;padding-right: 1.009174rem;letter-spacing: 0.018349rem;}
.footer-2 span{font-size: 0.40367rem;color: #919191}
.footer-2 .mlr{padding:0 0.146789rem; font-size: 0.550459rem;color: #cfcfcf}
.footer-2 .red{color: #e58c7c;}

</style>
<script></script>