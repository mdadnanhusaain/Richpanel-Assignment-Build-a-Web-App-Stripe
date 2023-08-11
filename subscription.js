var mobile = document.getElementsByClassName("mobile");
var basic = document.getElementsByClassName("basic");
var standard = document.getElementsByClassName("standard");
var premium = document.getElementsByClassName("premium");
var a_mobile = 0;
var a_basic = 0;
var a_standard = 0;
var a_premium = 0;

// Mobile functions
function mob_on() {
  for (let mob of mobile) {
    mob.style.opacity = 1;
  }
  a_mobile = 1;
  a_basic = 0;
  a_standard = 0;
  a_premium = 0;
}
function mob_hover() {
  for (let mob of mobile) {
    mob.style.opacity = 0.8;
  }
}
function mob_off() {
  for (let mob of mobile) {
    mob.style.opacity = 0.6;
  }
}

// Basic functions
function bas_on() {
  for (let bas of basic) {
    bas.style.opacity = 1;
  }
  a_mobile = 0;
  a_basic = 1;
  a_standard = 0;
  a_premium = 0;
}
function bas_hover() {
  for (let bas of basic) {
    bas.style.opacity = 0.8;
  }
}
function bas_off() {
  for (let bas of basic) {
    bas.style.opacity = 0.6;
  }
}

// Standard functions
function stan_on() {
  for (let stan of standard) {
    stan.style.opacity = 1;
  }
  a_mobile = 0;
  a_basic = 0;
  a_standard = 1;
  a_premium = 0;
}
function stan_hover() {
  for (let stan of standard) {
    stan.style.opacity = 0.8;
  }
}
function stan_off() {
  for (let stan of standard) {
    stan.style.opacity = 0.6;
  }
}

// Premium functions
function pre_on() {
  for (let pre of premium) {
    pre.style.opacity = 1;
  }
  a_mobile = 0;
  a_basic = 0;
  a_standard = 0;
  a_premium = 1;
}
function pre_hover() {
  for (let pre of premium) {
    pre.style.opacity = 0.8;
  }
}
function pre_off() {
  for (let pre of premium) {
    pre.style.opacity = 0.6;
  }
}

// Mobile Event Listeners
for (let mob = 0; mob < mobile.length; mob++) {
  mobile[mob].addEventListener(
    "click",
    function click_mobile() {
      mob_on();
      bas_off();
      stan_off();
      pre_off();
    },
    false
  );
}
for (let mob = 0; mob < mobile.length; mob++) {
  mobile[mob].addEventListener("mouseover", mob_hover(), false);
}
for (let mob = 0; mob < mobile.length; mob++) {
  mobile[mob].addEventListener(
    "mouseout",
    function mouseout_mobile() {
      if (a_mobile != 1) mob_off;
    },
    false
  );
}

// Basic Event Listeners
for (let bas = 0; bas < basic.length; bas++) {
  basic[bas].addEventListener(
    "click",
    function click_basic() {
      mob_off();
      bas_on();
      stan_off();
      pre_off();
    },
    false
  );
}
for (let bas = 0; bas < basic.length; bas++) {
  basic[bas].addEventListener("mouseover", bas_hover(), false);
}
for (let bas = 0; bas < basic.length; bas++) {
  basic[bas].addEventListener(
    "mouseout",
    function mouseout_basic() {
      if (a_basic != 1) bas_off;
    },
    false
  );
}

// Standard Event Listeners
for (let stan = 0; stan < standard.length; stan++) {
  standard[stan].addEventListener(
    "click",
    function click_standard() {
      mob_off();
      bas_off();
      stan_on();
      pre_off();
    },
    false
  );
}
for (let stan = 0; stan < standard.length; stan++) {
  standard[stan].addEventListener("mouseover", stan_hover(), false);
}
for (let stan = 0; stan < standard.length; stan++) {
  standard[stan].addEventListener(
    "mouseout",
    function mouseout_standard() {
      if (a_standard != 1) stan_off;
    },
    false
  );
}

// Premium Event Listeners
for (let pre = 0; pre < premium.length; pre++) {
  premium[pre].addEventListener(
    "click",
    function click_premium() {
      mob_off();
      bas_off();
      stan_off();
      pre_on();
    },
    false
  );
}
for (let pre = 0; pre < premium.length; pre++) {
  premium[pre].addEventListener("mouseover", pre_hover(), false);
}
for (let pre = 0; pre < premium.length; pre++) {
  premium[pre].addEventListener(
    "mouseout",
    function mouseout_premium() {
      if (a_premium != 1) pre_off;
    },
    false
  );
}

let checkbox = document.getElementById("switcher");
checkbox.addEventListener("change", function () {
  if (checkbox.checked == true) {
    document.getElementById("mobile").innerHTML = "₹100";
    document.getElementById("basic").innerHTML = "₹200";
    document.getElementById("standard").innerHTML = "₹500";
    document.getElementById("premium").innerHTML = "₹700";
  } else {
    document.getElementById("mobile").innerHTML = "₹1000";
    document.getElementById("basic").innerHTML = "₹2000";
    document.getElementById("standard").innerHTML = "₹5000";
    document.getElementById("premium").innerHTML = "₹7000";
  }
});
