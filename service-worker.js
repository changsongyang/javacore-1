/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d28656d2c9e9e78aa1a0014ac0540cc0"
  },
  {
    "url": "advanced/index.html",
    "revision": "19edcf4eb7d03639f58ebf0a723117fc"
  },
  {
    "url": "advanced/java-code-style.html",
    "revision": "9c6b7a0676e91bc887fd9e70cfdd7e7b"
  },
  {
    "url": "advanced/java-crypto.html",
    "revision": "3f3dbf666f047a1bc7df650dded87bc7"
  },
  {
    "url": "advanced/java-locale.html",
    "revision": "63351f47cc3ef86f388cc5e49389b3bf"
  },
  {
    "url": "advanced/java-regex.html",
    "revision": "81b956fe9d3956100c5c93a0abf532ca"
  },
  {
    "url": "advanced/jdk8.html",
    "revision": "0bf8a4a6d46efa59ca1fe71f48f00c3a"
  },
  {
    "url": "assets/css/0.styles.0d8d0e5e.css",
    "revision": "d8d2d2ff27d5de68ac950552f756fc9e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7c8236ba.js",
    "revision": "57ab0bfe49ce76a2ee472a5c34233477"
  },
  {
    "url": "assets/js/11.2a72f985.js",
    "revision": "32d8a678677840c6c61a53532813053a"
  },
  {
    "url": "assets/js/12.b95c774a.js",
    "revision": "bec8c1d65e815cb88f8adb15a801c70e"
  },
  {
    "url": "assets/js/13.cf84ccd2.js",
    "revision": "c8e55d274415b9d5eb46c5faf935c8a0"
  },
  {
    "url": "assets/js/14.40b2a3d8.js",
    "revision": "efb65a42a0890b1e3759323dbe956fcb"
  },
  {
    "url": "assets/js/15.531535d9.js",
    "revision": "42d099da9ae084889d3b19790c98f4f3"
  },
  {
    "url": "assets/js/16.aae180ed.js",
    "revision": "8da5f1744fc84297cde544b385a47e79"
  },
  {
    "url": "assets/js/17.97241acb.js",
    "revision": "9360c57f754c608df2472031ed77bba2"
  },
  {
    "url": "assets/js/18.718393e5.js",
    "revision": "f0939bf9ca0f6b3f75827922b164d99e"
  },
  {
    "url": "assets/js/19.cdfcd8da.js",
    "revision": "35c7d82cf7f722183003ea1f70e63c12"
  },
  {
    "url": "assets/js/20.cda946e4.js",
    "revision": "a4d7d3a7b65de187ea027d8d425f1639"
  },
  {
    "url": "assets/js/21.a034e65f.js",
    "revision": "ae9e0473342444858e9c0393e8487e84"
  },
  {
    "url": "assets/js/22.900e3b22.js",
    "revision": "2ffe10e20991f9a4b8fa6f90c6558e38"
  },
  {
    "url": "assets/js/23.c4b0ed6f.js",
    "revision": "880be3af9c1cce72e996369b9d02c16a"
  },
  {
    "url": "assets/js/24.5c2644c5.js",
    "revision": "070ff19f25269f8a3ee7a6aee6e4d8f0"
  },
  {
    "url": "assets/js/25.590d7934.js",
    "revision": "082ec0bd2dd3236c9a40a7853249854d"
  },
  {
    "url": "assets/js/26.8267af8d.js",
    "revision": "7ba7c1b044c8f56d7c1f03753ca07503"
  },
  {
    "url": "assets/js/27.fb90134e.js",
    "revision": "ed64d7c469798576f76529e4c06e293f"
  },
  {
    "url": "assets/js/28.e2685323.js",
    "revision": "cbdd290be28847c86d79f01fe74f175b"
  },
  {
    "url": "assets/js/29.eb3a852c.js",
    "revision": "e87ab0012325a1f157e5c80bcd4d0b52"
  },
  {
    "url": "assets/js/30.b7bf8986.js",
    "revision": "544c7a84f924ec755d6ca10eba02029c"
  },
  {
    "url": "assets/js/31.43366024.js",
    "revision": "2255d3ead0cc1bf647d833b112c9416d"
  },
  {
    "url": "assets/js/32.006504cd.js",
    "revision": "d0ce8b2016c0b7842bb903ac62bac483"
  },
  {
    "url": "assets/js/33.dcef2a82.js",
    "revision": "09ddecec73e6545dcc740f9769e62f77"
  },
  {
    "url": "assets/js/34.ca29a239.js",
    "revision": "6f344780360dbb02b756aeee450e0043"
  },
  {
    "url": "assets/js/35.9a73e478.js",
    "revision": "cbc4cd466b8f7db55e0e5fe32b28863c"
  },
  {
    "url": "assets/js/36.c5bb9a0c.js",
    "revision": "43c2869b9a71be2e0109e179697f8f2e"
  },
  {
    "url": "assets/js/37.0c517ddd.js",
    "revision": "7977facd5759fa1ccbb9743a52ad7c76"
  },
  {
    "url": "assets/js/38.e3b0dd99.js",
    "revision": "6b79fa6c612f467c3e0ec7a1ee20499b"
  },
  {
    "url": "assets/js/39.5147fcd5.js",
    "revision": "d4a78433fb3e437615a414973b8fa641"
  },
  {
    "url": "assets/js/4.5b70554b.js",
    "revision": "08613a548c66ed1199b0466608447ab9"
  },
  {
    "url": "assets/js/40.235de4ac.js",
    "revision": "e42562777ae2c1c6f2d990c7533cd2d8"
  },
  {
    "url": "assets/js/41.7f45a053.js",
    "revision": "7c0d1fc9421e60106b0e222f7067261c"
  },
  {
    "url": "assets/js/42.7bba55df.js",
    "revision": "5d193e034ff3db2ed3f3946cdda44647"
  },
  {
    "url": "assets/js/43.6928c4c5.js",
    "revision": "b7c9393841f469f003d0f2ef05677279"
  },
  {
    "url": "assets/js/44.96d611e1.js",
    "revision": "b6e5330c334c8886d86f2efd6da1ad48"
  },
  {
    "url": "assets/js/45.f5049149.js",
    "revision": "82507debd8c7bf270e328ea9cd5f6022"
  },
  {
    "url": "assets/js/46.a063dd63.js",
    "revision": "6673766f1d74e8ec5f18b077ae0f0263"
  },
  {
    "url": "assets/js/47.eb7ca584.js",
    "revision": "de79ac9d49a55dcfb1ae6e9331726036"
  },
  {
    "url": "assets/js/48.74f5beb2.js",
    "revision": "173c8b48a81e9a45f7cd76580c01ff9b"
  },
  {
    "url": "assets/js/49.bf732bec.js",
    "revision": "f6ee4478a778c421820cadb62bf0a180"
  },
  {
    "url": "assets/js/5.97e60065.js",
    "revision": "977df4254a571ea54595bc5067f5ad49"
  },
  {
    "url": "assets/js/50.1e10239f.js",
    "revision": "fbf98543d7d18839515f2d5eecdec670"
  },
  {
    "url": "assets/js/51.006eddb3.js",
    "revision": "f0a5c86d60cfb99a94babc37b7d18a20"
  },
  {
    "url": "assets/js/52.9372534d.js",
    "revision": "f39c56bc639836cf7913b6a40d89ead7"
  },
  {
    "url": "assets/js/53.fb758aef.js",
    "revision": "3074fd61103b62e4c0fc46ab5358d12f"
  },
  {
    "url": "assets/js/54.c2ff0fb2.js",
    "revision": "f11123a051195e4f463094588795b868"
  },
  {
    "url": "assets/js/55.4b33dbfb.js",
    "revision": "dec36959fefdb666cf970c9ba9de47a3"
  },
  {
    "url": "assets/js/56.98555fae.js",
    "revision": "0e0b24ab60ced4330fc868a554c34193"
  },
  {
    "url": "assets/js/57.a63dcd0b.js",
    "revision": "3587fb33e4147ef1e6d3c860303d345d"
  },
  {
    "url": "assets/js/58.9d2b326d.js",
    "revision": "61c762c00ef15e4118a45c39018c40ff"
  },
  {
    "url": "assets/js/59.6fc72b95.js",
    "revision": "f260691cea5288459f4329bf305dea1b"
  },
  {
    "url": "assets/js/6.42d6b1b0.js",
    "revision": "77d1419c27a06675700e40404af21754"
  },
  {
    "url": "assets/js/60.01f6dec6.js",
    "revision": "699311e47ba373c49bfc5ac3dece3e9c"
  },
  {
    "url": "assets/js/61.441d44e6.js",
    "revision": "68d7c52484d0aaba46591d3c034c0d67"
  },
  {
    "url": "assets/js/62.0be8a58d.js",
    "revision": "50c95ce6e1e1ce9f46f5e026cda55600"
  },
  {
    "url": "assets/js/63.516a1b55.js",
    "revision": "f061531a429caf46b4f0c9affe8967e8"
  },
  {
    "url": "assets/js/7.ac8df731.js",
    "revision": "6eaf4ff355d9d47917138cff30c028f7"
  },
  {
    "url": "assets/js/8.a0f8e5c1.js",
    "revision": "bba8734f2480560b08821ebeeb00f76e"
  },
  {
    "url": "assets/js/9.0dd858f2.js",
    "revision": "55964b58e5709fcd5bfb452c582eaaa1"
  },
  {
    "url": "assets/js/app.f6137fda.js",
    "revision": "90324385f5c294c919c51480227f9314"
  },
  {
    "url": "assets/js/vendors~flowchart.8982e116.js",
    "revision": "bc7fea975a76ce449937af951712aec5"
  },
  {
    "url": "assets/js/vendors~notification.f509967c.js",
    "revision": "d6ac604e967948462bdb489a24fe79b5"
  },
  {
    "url": "basics/index.html",
    "revision": "9ed5a68da65969a60ce9b4b40a4a3ddd"
  },
  {
    "url": "basics/java-annotation.html",
    "revision": "9d8d9b39ae809150ddd9d59ee16c1fd6"
  },
  {
    "url": "basics/java-array.html",
    "revision": "251a6343f220fce0c88a3417547aa191"
  },
  {
    "url": "basics/java-basic-grammar.html",
    "revision": "aa914fa26749b1884f9fab308b74f4f2"
  },
  {
    "url": "basics/java-class.html",
    "revision": "d89e045d2d4fa9684720c221b3fdc26c"
  },
  {
    "url": "basics/java-common-tool-class.html",
    "revision": "571f24af60ada049f896bc1886281e63"
  },
  {
    "url": "basics/java-control-statement.html",
    "revision": "e05a7f8c38b3c8dd80aa149e199ae5b2"
  },
  {
    "url": "basics/java-data-type.html",
    "revision": "510e1b10caffa96436b3f2b7fcdb37f4"
  },
  {
    "url": "basics/java-develop-env.html",
    "revision": "a0fd4044a81fd8e95fbd3eea22c33785"
  },
  {
    "url": "basics/java-enum.html",
    "revision": "76b2c413eafacaa83058d395a65221a9"
  },
  {
    "url": "basics/java-exception.html",
    "revision": "8d6bc57d59bcb037b9691fd5a1418b2e"
  },
  {
    "url": "basics/java-generic.html",
    "revision": "2dff7e925f7f8ef6d201e0a943ab5c4c"
  },
  {
    "url": "basics/java-method.html",
    "revision": "f24d7927df50533993a41ef021e8bf69"
  },
  {
    "url": "basics/java-oop.html",
    "revision": "c6ccf6bd945268cbeb46fca15ecde58f"
  },
  {
    "url": "basics/java-reflection.html",
    "revision": "7122852e231e5ebfb83538e303145d10"
  },
  {
    "url": "basics/java-string.html",
    "revision": "4204aa5965505a7c2481d4947b8f60ff"
  },
  {
    "url": "concurrent/index.html",
    "revision": "a28d30a7604c2b3e11844e6936482bec"
  },
  {
    "url": "concurrent/java-atomic-class.html",
    "revision": "099db30f2bbc220a97e15c6fc071c3c9"
  },
  {
    "url": "concurrent/java-concurrent-basic-mechanism.html",
    "revision": "c94d0b0b315933fa69fc38d486dcce4a"
  },
  {
    "url": "concurrent/java-concurrent-container.html",
    "revision": "b749fe73ef696542229404c5a0795d94"
  },
  {
    "url": "concurrent/java-concurrent-introduction.html",
    "revision": "4e7f0dca7e83276fab1a7fcf212d2223"
  },
  {
    "url": "concurrent/java-concurrent-tools.html",
    "revision": "b1cf4f89fa2293dd8cb6c1f2fe2ac28c"
  },
  {
    "url": "concurrent/java-lock.html",
    "revision": "d813f0eda8f2b99e6a0f81b1f4ad1bee"
  },
  {
    "url": "concurrent/java-memory-model.html",
    "revision": "3bbe537f8c8f1b849e32d85c78a53585"
  },
  {
    "url": "concurrent/java-thread-pool.html",
    "revision": "8e09b2418981fdc1883740d452ed6a38"
  },
  {
    "url": "concurrent/java-thread.html",
    "revision": "ea7a89939bf4930522690381f1d120aa"
  },
  {
    "url": "container/index.html",
    "revision": "0fe73daf24be0b1c8db91cfa0d9d5cf4"
  },
  {
    "url": "container/java-container-list.html",
    "revision": "edb42f3efc3d63093f43b38939242da2"
  },
  {
    "url": "container/java-container-map.html",
    "revision": "ffa77f13c4b80452c77ad6521a4dce54"
  },
  {
    "url": "container/java-container-queue.html",
    "revision": "cc00491d1530f7108080ea0746a82a0d"
  },
  {
    "url": "container/java-container-set.html",
    "revision": "df21b169ea408bda280f9417ea33b4ef"
  },
  {
    "url": "container/java-container.html",
    "revision": "ae95e3548f34a2a83e5a9a4f205f006b"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "b6a844780c98edd04a14bcf717cc9ce6"
  },
  {
    "url": "io/index.html",
    "revision": "5d95cfac2e46887aadbbc2e4977bb7ec"
  },
  {
    "url": "io/java-bio.html",
    "revision": "9b8fee507f5169e1b91bb54c5c856abe"
  },
  {
    "url": "io/java-io-tool.html",
    "revision": "1d2ef2ac59d11ccaf9065e702d9bfef2"
  },
  {
    "url": "io/java-net.html",
    "revision": "bbd0fe078dbfe9af6e840af2b8b988ab"
  },
  {
    "url": "io/java-nio.html",
    "revision": "539b77af72a66e4677f367357b611c51"
  },
  {
    "url": "io/java-serialization.html",
    "revision": "5acbf4db826eaff8af531c4bcd01ea68"
  },
  {
    "url": "java-interview.html",
    "revision": "d3023c661a973fce5cfd975b5eb4c512"
  },
  {
    "url": "jvm/index.html",
    "revision": "d15990dfd8e9cdc34da7738a251c8072"
  },
  {
    "url": "jvm/jvm-action.html",
    "revision": "a701bf045e98bf69817cb8d7d1f55d22"
  },
  {
    "url": "jvm/jvm-architecture.html",
    "revision": "cd034ef9e937ff383597e786fdb44ec4"
  },
  {
    "url": "jvm/jvm-bytecode.html",
    "revision": "18e8dc5552a5b383220e8439ff560046"
  },
  {
    "url": "jvm/jvm-class-loader.html",
    "revision": "e18dc6e0313ec124483a6626f753a710"
  },
  {
    "url": "jvm/jvm-gc.html",
    "revision": "5fd5e7854edc9cf1ce10aab3c954e818"
  },
  {
    "url": "jvm/jvm-memory.html",
    "revision": "5bbed46b161606a64882d6c22071fbfc"
  },
  {
    "url": "jvm/jvm-tools.html",
    "revision": "5d5f92eab5fa6e2c6536ad882993c637"
  },
  {
    "url": "jvm/troubleshooting.html",
    "revision": "7313ceb02950b6756ff01c54cb868233"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
