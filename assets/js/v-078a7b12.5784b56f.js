"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[28629],{245347:(e,t,r)=>{r.r(t),r.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-078a7b12","path":"/devices/TS0601_3_phase_clamp_meter.html","title":"TuYa TS0601_3_phase_clamp_meter control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0601_3_phase_clamp_meter control via MQTT","description":"Integrate your TuYa TS0601_3_phase_clamp_meter via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-12-01T15:07:19.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"AC frequency (numeric)","slug":"ac-frequency-numeric","link":"#ac-frequency-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Energy a (numeric)","slug":"energy-a-numeric","link":"#energy-a-numeric","children":[]},{"level":3,"title":"Energy b (numeric)","slug":"energy-b-numeric","link":"#energy-b-numeric","children":[]},{"level":3,"title":"Energy c (numeric)","slug":"energy-c-numeric","link":"#energy-c-numeric","children":[]},{"level":3,"title":"Voltage a (numeric)","slug":"voltage-a-numeric","link":"#voltage-a-numeric","children":[]},{"level":3,"title":"Voltage b (numeric)","slug":"voltage-b-numeric","link":"#voltage-b-numeric","children":[]},{"level":3,"title":"Voltage c (numeric)","slug":"voltage-c-numeric","link":"#voltage-c-numeric","children":[]},{"level":3,"title":"Power a (numeric)","slug":"power-a-numeric","link":"#power-a-numeric","children":[]},{"level":3,"title":"Power b (numeric)","slug":"power-b-numeric","link":"#power-b-numeric","children":[]},{"level":3,"title":"Power c (numeric)","slug":"power-c-numeric","link":"#power-c-numeric","children":[]},{"level":3,"title":"Current a (numeric)","slug":"current-a-numeric","link":"#current-a-numeric","children":[]},{"level":3,"title":"Current b (numeric)","slug":"current-b-numeric","link":"#current-b-numeric","children":[]},{"level":3,"title":"Current c (numeric)","slug":"current-c-numeric","link":"#current-c-numeric","children":[]},{"level":3,"title":"Power factor a (numeric)","slug":"power-factor-a-numeric","link":"#power-factor-a-numeric","children":[]},{"level":3,"title":"Power factor b (numeric)","slug":"power-factor-b-numeric","link":"#power-factor-b-numeric","children":[]},{"level":3,"title":"Power factor c (numeric)","slug":"power-factor-c-numeric","link":"#power-factor-c-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1705155897000},"filePathRelative":"devices/TS0601_3_phase_clamp_meter.md"}')},670293:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var o=r(166252);const a=(0,o._)("h1",{id:"tuya-ts0601-3-phase-clamp-meter",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#tuya-ts0601-3-phase-clamp-meter","aria-hidden":"true"},"#"),(0,o.Uk)(" TuYa TS0601_3_phase_clamp_meter")],-1),i=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"TS0601_3_phase_clamp_meter")],-1),c=(0,o._)("td",null,"Vendor",-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"3-phase clamp power meter")],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"ac_frequency, temperature, current, power, energy, energy_a, energy_b, energy_c, voltage_a, voltage_b, voltage_c, power_a, power_b, power_c, current_a, current_b, current_c, power_factor_a, power_factor_b, power_factor_c, linkquality")],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_3_phase_clamp_meter.jpg",alt:"TuYa TS0601_3_phase_clamp_meter"})])],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"White-label"),(0,o._)("td",null,"MatSee Plus PC321-Z-TY")],-1),h=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),p=(0,o.uE)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="ac-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#ac-frequency-numeric" aria-hidden="true">#</a> AC frequency (numeric)</h3><p>Measured electrical AC frequency. Value can be found in the published state on the <code>ac_frequency</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>Hz</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-a-numeric" tabindex="-1"><a class="header-anchor" href="#energy-a-numeric" aria-hidden="true">#</a> Energy a (numeric)</h3><p>Sum of consumed energy (phase A). Value can be found in the published state on the <code>energy_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-b-numeric" tabindex="-1"><a class="header-anchor" href="#energy-b-numeric" aria-hidden="true">#</a> Energy b (numeric)</h3><p>Sum of consumed energy (phase B). Value can be found in the published state on the <code>energy_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-c-numeric" tabindex="-1"><a class="header-anchor" href="#energy-c-numeric" aria-hidden="true">#</a> Energy c (numeric)</h3><p>Sum of consumed energy (phase C). Value can be found in the published state on the <code>energy_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="voltage-a-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-a-numeric" aria-hidden="true">#</a> Voltage a (numeric)</h3><p>Measured electrical potential value (phase A). Value can be found in the published state on the <code>voltage_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-b-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-b-numeric" aria-hidden="true">#</a> Voltage b (numeric)</h3><p>Measured electrical potential value (phase B). Value can be found in the published state on the <code>voltage_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-c-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-c-numeric" aria-hidden="true">#</a> Voltage c (numeric)</h3><p>Measured electrical potential value (phase C). Value can be found in the published state on the <code>voltage_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-a-numeric" tabindex="-1"><a class="header-anchor" href="#power-a-numeric" aria-hidden="true">#</a> Power a (numeric)</h3><p>Instantaneous measured power (phase A). Value can be found in the published state on the <code>power_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-b-numeric" tabindex="-1"><a class="header-anchor" href="#power-b-numeric" aria-hidden="true">#</a> Power b (numeric)</h3><p>Instantaneous measured power (phase B). Value can be found in the published state on the <code>power_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-c-numeric" tabindex="-1"><a class="header-anchor" href="#power-c-numeric" aria-hidden="true">#</a> Power c (numeric)</h3><p>Instantaneous measured power (phase C). Value can be found in the published state on the <code>power_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-a-numeric" tabindex="-1"><a class="header-anchor" href="#current-a-numeric" aria-hidden="true">#</a> Current a (numeric)</h3><p>Instantaneous measured electrical current (phase A). Value can be found in the published state on the <code>current_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-b-numeric" tabindex="-1"><a class="header-anchor" href="#current-b-numeric" aria-hidden="true">#</a> Current b (numeric)</h3><p>Instantaneous measured electrical current (phase B). Value can be found in the published state on the <code>current_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-c-numeric" tabindex="-1"><a class="header-anchor" href="#current-c-numeric" aria-hidden="true">#</a> Current c (numeric)</h3><p>Instantaneous measured electrical current (phase C). Value can be found in the published state on the <code>current_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="power-factor-a-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-a-numeric" aria-hidden="true">#</a> Power factor a (numeric)</h3><p>Instantaneous measured power factor (phase A). Value can be found in the published state on the <code>power_factor_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-factor-b-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-b-numeric" aria-hidden="true">#</a> Power factor b (numeric)</h3><p>Instantaneous measured power factor (phase B). Value can be found in the published state on the <code>power_factor_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-factor-c-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-c-numeric" aria-hidden="true">#</a> Power factor c (numeric)</h3><p>Instantaneous measured power factor (phase C). Value can be found in the published state on the <code>power_factor_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',44),m={},f=(0,r(983744).Z)(m,[["render",function(e,t){const r=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[i,(0,o._)("tbody",null,[n,(0,o._)("tr",null,[c,(0,o._)("td",null,[(0,o.Wm)(r,{to:"/supported-devices/#v=TuYa"},{default:(0,o.w5)((()=>[(0,o.Uk)("TuYa")])),_:1})])]),u,d,l,s])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),h,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(r,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);