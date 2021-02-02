<template>
  <div>Formular ausfüllen
  </div>
    <div class="control-section">
      <div class="col-lg-12 control-section">
        <div class="content-wrapper textbox-default">
          <div class="row material2">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>Outlined and Filled</b></div>
          </div>
          <div class="row material2">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <ejs-textbox floatLabelType="Auto" cssClass="e-outline" placeholder="Outlined"></ejs-textbox>
            </div>
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 filled">
              <ejs-textbox floatLabelType="Auto" cssClass="e-filled" placeholder="Filled"></ejs-textbox>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>Floating Label</b></div>
          </div>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <ejs-textbox floatLabelType="Auto" placeholder="First Name"></ejs-textbox>
            </div>
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <ejs-textbox floatLabelType="Auto" placeholder="Last Name" v-bind:enableRtl="true"></ejs-textbox>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
              <div class="e-float-input e-input-group">
                <input type="text" required="">
                <span class="e-float-line"></span>
                <label class="e-float-text">Country</label>
                <span class="e-input-group-icon e-spin-down"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>Inputs</b></div>
          </div>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <div class="e-input-group">
                <input class="e-input" type="text" placeholder="Enter Name">
              </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <div class="e-input-group e-rtl">
                <input class="e-input" type="text" placeholder="Last Name">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <div class="e-input-group">
                <input class="e-input" type="password" placeholder="Password" value="password">
              </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <div class="e-input-group">
                <input class="e-input" type="email" placeholder="Enter Email">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <div class="e-input-group e-disabled">
                <input class="e-input" type="text" placeholder="Disabled" disabled="">
              </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <div class="e-input-group">
                <input class="e-input" type="text" placeholder="Enter Name" value="Readonly" readonly="">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>Validation States</b></div>
          </div>
          <div class="row">
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="e-input-group e-success">
                <input class="e-input" type="text" placeholder="Success">
              </div>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="e-input-group e-warning">
                <input class="e-input" type="text" placeholder="Warning">
              </div>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="e-input-group e-error">
                <input class="e-input" type="text" placeholder="Error">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>Sizing</b></div>
          </div>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <div class="e-input-group e-small">
                <input class="e-input" type="text" placeholder="Small">
              </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <div class="e-input-group">
                <input class="e-input" type="text" placeholder="Normal">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>Input & Elements</b></div>
          </div>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <div class="e-input-group">
                <input class="e-input" type="text" placeholder="Date of Birth">
                <span class="e-input-group-icon e-input-calendar"></span>
              </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <div class="e-input-group e-float-icon-left">
                <span class="e-input-group-icon e-input-picture"></span>
                <div class="e-input-in-wrap">
                  <input class="e-input" type="text" placeholder="Upload Picture">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
export default {
name: "fill_in_formular"
}
<style scoped>
  .e-input-picture:before {
  content: '\e335';
  font-family: e-icons;
}

  .bootstrap4 .e-input-picture:before {
  content: '\e776';
}

  .e-input-calendar:before {
  content: '\e901';
  font-family: e-icons;
  font-size: 13px;
}

  .fabric .e-input-calendar:before {
  content:'\e93a';
}
  .bootstrap .e-input-calendar:before {
  content:'\e960';
}
  .bootstrap4 .e-input-calendar:before {
  content:'\e7be';
}
  .highcontrast .e-input-calendar:before {
  content:'\e93a';
}

  .content-wrapper.textbox-default {
  width: 90%;
  margin: 0 auto;
  min-width: 185px;
}

  .content-wrapper.textbox-default div.row {
  padding: 15px 0px;
}

  .control-label {
  padding: 24px 0px 0px 0px;
  font-size: 12px;
  opacity: 0.54;
}

  @media only screen and (max-width: 480px) {
  .content-wrapper.textbox-default,
{
  width: 92%;
}
  .col-xs-6,
  .col-xs-4,
  .col-xs-12 {
  padding: 10px 5px;
  width: 100%;
}
  .content-wrapper.textbox-default div.row {
  padding: 0px;
}
}
  .e-outline.e-float-input,
  .e-outline.e-float-input.e-control-wrapper {
  margin-top: 0;
}
  .fabric .row.material2,
  .bootstrap .row.material2,
  .bootstrap4 .row.material2,
  .highcontrast .row.material2 {
  display: none;
}
  #description td {
  vertical-align: top;
}
</style>


<script>
  import Vue from "vue";
  import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
  Vue.use(TextBoxPlugin);

  export default Vue.extend({
  data: function() {
  return { }
},
  mounted: function() {
  let input = document.querySelectorAll('.e-input-group .e-input,.e-float-input.e-input-group input');
  let inputIcon = document.querySelectorAll('.e-input-group-icon');
  let localObj = this;
  for (let i = 0; i < input.length; i++) {
  //Focus Event binding for input component
  input[i].addEventListener('focus', function() {
  localObj.getParentNode(input[i]).classList.add('e-input-focus');
});
  //Blur Event binding for input component
  input[i].addEventListener('blur', function() {
  localObj.getParentNode(input[i]).classList.remove('e-input-focus');
});
}
  for (let i = 0; i < inputIcon.length; i++) {
  inputIcon[i].addEventListener('mousedown',  function() {
  this.classList.add('e-input-btn-ripple');
});
  inputIcon[i].addEventListener('mouseup',  function() {
  let ele = this;
  setTimeout( function() {
  ele.classList.remove('e-input-btn-ripple');
},
  500);
});
}

},
  methods: {
  getParentNode: function(element) {
  let parentNode = element.parentNode;
  if (parentNode.classList.contains('e-input-in-wrap')) {
  return parentNode.parentNode;
}
  return parentNode;
}
}
});

</script>