<template>
<div>
<div class="bananer-1">
		<i class="iconfont icon-cuo"></i>
	</div>
	<div class="title-1">
		<span>简书</span>
	</div>
	<div class="denglufangshi">上次登录方式:<span></span>
	</div>
	<div class="yonghu-1">
			<form action="">
			<div class="border">
				<div class="item2">
					<div class="touxiang">
						<i class="iconfont icon-renxiang"></i>
					</div>
					<input id="username" type="text" placeholder="你的昵称" name="username">
					<div class="tubiao">
						<i class="iconfont icon-false-circle"></i>
					</div>
				</div>
				<div class="xian">
				</div>
				<div class="item2">
						<div class="touxiang">
							<i class="iconfont icon-mm"></i>
						</div>
						<input type="text"maxlength="11" id="password" placeholder="手机号" name="password">
						<div class="tubiao">
							<i class="iconfont icon-false-circle"></i>
						</div>
				</div>
				<div class="xian">
				</div>
				<div class="item2">
						<div class="touxiang">
							<i class="iconfont icon-mm"></i>
						</div>
						<input type="password" id="password" placeholder="设置密码" name="password">
						<div class="tubiao">
							<i class="iconfont icon-xianshimima1 " id="font-50"></i>
						</div>
				</div>
			</div>
				<div class="tijiao">
					<input type="submit" value="注册">
				</div>	
			</form>
			
	</div>
	<div class="shequ-1">
		<div class="fl"></div><span>社交账号直接登录</span><div class="fr"></div>
	
	</div>
	<div class="shequ-1tu">
		<div><img src="static/images/t-1.jpg" alt=""></div>
		<div><img src="static/images/t-2.jpg" alt=""></div>
		<div><img src="static/images/t-3.jpg" alt=""></div>
	</div>
	<div class="footers">
		<span class="red">已有账号登录</span>
		<span class="mlr">|</span>
		<span>随便看看</span>
	</div>
</div>
</template>
<style>
	.fl{float: left;}
.fr{float: right;}
#font-50{font-size: 0.550459rem;}
.ml60{margin-left: 1.376147rem;}
.bananer-1{padding:0.53211rem 0.385321rem;height: 1.87156rem;}
.bananer-1 i{font-size: 0.33945rem;float: right;}
.title-1{width: 100%;padding-bottom: 1.211009rem; }
.title-1 span{font-size: 1.247706rem;width: 100%;display: inline-block;text-align: center;color:#e78170;}
.denglufangshi{opacity: 0;height: 0.348624rem;padding-bottom: 0.348624rem;}
.yonghu-1{padding:0 0.550459rem;height: 6.880734rem;width: 8.899083rem;}
.yonghu-1 .border{height:4.0rem;border: 0.009174rem solid #cfcfcf;width: 8.880734rem; }
.yonghu-1 form .xian{width: 100%;height: 0.009174rem;background: #cfcfcf}
.yonghu-1 form .item2 {width: 8.880734rem;height:1.330275rem; }

.yonghu-1 form .item2 .touxiang{width: 1.651376rem;height: 1.330275rem; float: left; text-align: center;line-height: 1.330275rem; color: #969696}
.yonghu-1 form .item2 .touxiang i{font-size: 0.422018rem;}
.yonghu-1 form .item2 input{width: 5.908257rem;height: 1.311927rem;outline: none;border: none;font-size: 0.458716rem;}
.yonghu-1 form .item2 .tubiao{width: 1.321101rem;float: right;height: 1.330275rem;text-align: center;line-height: 1.330275rem;color: #c8c8c8}
.yonghu-1 form .item2 .tubiao i{font-size: 0.422018rem; display: none;}
.yonghu-1 .tijiao{margin-top: 0.550459rem;height: 1.321101rem;width: 100%;}
.yonghu-1 .tijiao input{width: 100%;height: 1.321101rem;background: #a4df9c;border: none;outline: none;font-size: 0.477064rem;color: #fff;border-radius: 0.045872rem;}
.wangji{padding-top: 0.697248rem;padding-bottom: 0.917431rem;}
.wangji span{font-size: 0.422018rem;color: #919191;text-align: center;width: 100%;display: inline-block;}

.shequ-1{padding:0 1.834862rem;}
.shequ-1 span{width: 4.12844rem;display: inline-block;text-align: center;color: #919191}
.shequ-1 div{width: 1.100917rem;height: 0.018349rem;background: #cfcfcf;margin-top: 0.275229rem;}
.shequ-1tu{margin-top: 0.623853rem;height: 1.100917rem;padding:0 1.926606rem;display: flex;}
.shequ-1tu div{float: left;flex:33%;}
.shequ-1tu div img{text-align: center;}
.footers{margin-top: 0.642202rem;padding-bottom:1.834862rem;padding-left: 1.009174rem;padding-right: 1.009174rem;letter-spacing: 0.018349rem;}
.footers span{font-size: 0.40367rem;color: #919191;}
.footers .mlr{padding:0 0.146789rem; font-size: 0.550459rem;color: #cfcfcf}
.footers .red{color: #e58c7c;margin-left: 1.284404rem;}

</style>
<script></script>