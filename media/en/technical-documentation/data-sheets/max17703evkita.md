<!-- lastmod 2022-08-03 -->
<!-- image -->

©

Click here to ask an associate for production status of specific part numbers.

## Evaluates: MAX17703 in 4.2V Li-Ion Battery Charger Application

## General Description

The  MAX17703EVKITA#  (EV  kit)  provides  a  proven design  to  evaluate  the  MAX17703  high-efficiency,  highvoltage, Himalaya synchronous step-down DC-DC Li-ion charger  controller.  The  EV  kit  charges  the  Li-ion  bat -tery in constant current (CC) and constant voltage (CV) states  and  terminates  in  a  topup-charge  state  after  the taper timer is elapsed. The EV kit is designed to charge the  Li-ion  battery  with  10A  CC  mode  charging  current (I CHGMAX) and 4.2V CV mode voltage (V OUT )  from  an 6.3V to  60V  input  supply. The  EV  kit  is  optimized  for  a 24V nominal  input  application.  The  switching  frequency of the EV kit is set at 350kHz (f SW ) for optimum efficiency and component size. The EV kit features a safety timer (TMR)  to  set  the  maximum  allowed  CC  mode  and  CV mode charging time. The EV kit also features battery tem -perature sensing and charges only when the temperature is in the allowable charging temperature range. For more details  about  the  IC  benefits  and  features,  refer  to  the MAX17703 IC data sheet.

Ordering Information appears at end of data sheet.

## MAX17703EVKITA# Evaluation Kit

## Features

- Operates from an 6.3V to 60V Input Supply
- 10A CC Mode Charging Current
- 4.2V CV Mode Charging Voltage
- 350kHz Switching Frequency
- Resistor-Programmable UVLO Threshold (EN/UVLO)
- Input-Short Protection
- 3V Programmed Deeply Discharged Battery Detection
- Capacitor Programmed 10.4 hours Safety Timer
- Charge Termination on Full Battery Detection with Taper Current Threshold and Taper-Timer
- Cycle-by-Cycle Overcurrent Limit
- External Clock Synchronization (RT/SYNC)
- Charger Status Flags (FLG1, FLG2)
- Charging Current Monitoring (ISMON)
- Battery Temperature Sensing and Charge when Within Operating Temperature Range +5°C to +45°C
- IC Overtemperature Protection
- Complies with CISPR 32 (EN55032) Class B Conducted and Radiated Emissions
- Proven PCB Layout
- Fully Assembled and Tested

owners.

## MAX17703EVKITA# Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX17703EVKITA#
- 60V, 10A DC input-power supply (PS1)
- 4.2V, 45Ahr Li-ion battery with 15mΩ battery charging resistance (or) 25A DC power supply (PS2) and 12A DC electronic load (LOAD)
- Four digital voltmeters (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed. Carefully make the connections  to  avoid  the  battery  short  circuit  at  the output. Do not operate the EV kit without battery or preloaded supply.

The battery charger can be tested in two different ways, either  with  a  battery  or  preloaded  supply  (power  supply with electronic load).

## Testing with Battery:

- 1) Set the power supply at a voltage between 6.3V and 60V. Disable the power supply (PS1).
- 2) Make sure that the battery has an open circuit volt -age of 3.5V.
- 3) Connect PS1 and Li-ion battery to the EV kit as shown in Figure 1.
- 4) Verify that the shunts are installed across pins 1-2 on all jumpers: charger enable/disable jumper (J1), CC mode charging current jumper (J2), TEMP fea -ture jumper (J3), and safety timer jumper (J4). See Table 1, Table 2, Table 3, and Table 4 for details.
- 5) Connect the digital voltage meter (DVM1) between the ISMON PCB pad and the nearest SGND PCB pad for monitoring the charging current. Connect DVM2 between the VOUT PCB pad and the nearest PGND PCB pad for measuring the charging voltage.
- 6) Connect the DVM3 between the FLG1 PCB pad and the nearest SGND PCB pad for monitoring the charger status.

## Evaluates: MAX17703 in 4.2V Li-Ion Battery Charger Application

- 7) Connect the DVM4 between the FLG2 PCB pad and the nearest SGND PCB pad for monitoring the charger status. See Table 5 for details.
- 8) Turn on the DC power supply.
- 9) The charger starts in CC state and the safety timer starts counting. Verify that the DVM1 displays 1.5V, proportional to a 10A charging current (I CHGMAX ).
- 10) In CC state, observe that DVM3 and DVM4 displays 0V and 5.1V, respectively.
- 11) When the charging voltage reaches above 4.1V, the charger enters CV state, and the charging current starts to fall from 10A. Verify that when DVM2 dis -plays above 4.1V, the voltage reading on DVM1 falls from 1.5V, proportional to the charging current.
- 12)  When the charging current falls below 1A within the default safety timer timeout of 10.4 hours, the char -ger enters the topup-charge state from the CV state. Verify that DVM1 shows less than 0.15V, proportion -al to the charging current of less than 1A.
- 13) When the charger enters the topup-charge state, the safety timer counter is reset, and the taper timer counter starts.
- 14) If the charging current does not fall below 1A within the safety timer timeout of 10.4 hours, the charger enters a latched-fault state. In latched-fault state, DVM3 and DVM4 displays 5.1V and 0V, respectively.
- 15)  In the topup-charge state, the charger continues to regulate the charging voltage. After 63 minutes, the taper timer counter elapses, charging is terminated, and the charger enters full-battery state. Verify that both DVM3 and DVM4 displays 0V.
- 16) After testing is completed, switch off the power sup -ply and remove the connections from the EV kit.
- 17) Carefully remove the battery connection from the EV kit.

Figure 1. Battery Connection with EV Kit

<!-- image -->

## MAX17703EVKITA# Evaluation Kit

## Testing with Preloaded Supply:

- 1) Set the first power supply (PS1) at a voltage be -tween 6.3V and 60V. Disable the power supply (PS1).
- 2) Set the second power supply (PS2) at a voltage of 3.5V and current limit of 13A. Disable the power sup -ply (PS2).
- 3) Set the electronic load (LOAD) at 12A in Constant Current (CC) mode and disable the load.
- 4) Connect PS1, PS2, and LOAD to the EV kit as shown in Figure 2.
- 5) Make sure that LOAD is connected across the PS2 terminals and the connection resistance from the EV kit to the preloaded supply is not greater than 50mΩ.
- 6) Verify that the shunts are installed across pins 1-2 on all jumpers: charger enable/disable jumper (J1), CC mode charging current jumper (J2), TEMP fea -ture jumper (J3), and safety timer jumper (J4). See Table 1, Table 2, Table 3, and Table 4 for details.
- 7) Connect the digital voltage meter (DVM1) between the ISMON PCB pad and the nearest SGND PCB pad for monitoring the charging current.
- 8) Connect DVM2 between the VOUT PCB pad and the nearest PGND PCB pad for measuring the charging voltage.
- 9) Connect DVM3 between FLG1 PCB pad and the nearest SGND PCB pad for monitoring the charger status.
- 10) Connect DVM4 between FLG2 PCB pad and the nearest SGND PCB pad for monitoring the charger status. See Table 5 for details.
- 11) Turn on LOAD and PS2. Verify that 12A load current is supplied by PS2 and adjust the PS2 voltage to maintain the EV kit terminal voltage at 3.5V.
- 12)  Turn on the DC power supply (PS1).
- 13) The charger starts in CC state and the safety timer starts counting. Verify that the DVM1 displays 1.5V, proportional to the 10A charging current (ICHGMAX).
- 14) In CC state, observe that DVM3 and DVM4 displays 0V and 5.1V, respectively.

## Evaluates: MAX17703 in 4.2V Li-Ion Battery Charger Application

- 15)  Increase the voltage on PS2 in steps of 10mV to maintain the DVM2 reading at 4.1V when the char -ger enters CV state, and the charging current starts to fall from 10A. Verify that when DVM2 displays above 4.1V, the voltage reading on DVM1 falls from 1.5V, proportional to charging current.
- 16) Increase the voltage on PS2 such that the charg -ing current falls below the taper current threshold, i.e.,1A. Verify that the DVM1 shows less than 0.15V, proportional to the charging current. The charger enters topup-charge state upon detecting the taper current threshold.
- 17) In topup-charge state, the charger resets the safety timer counter and starts the taper timer counter.
- 18) In the topup-charge state, the charger continues to regulate the charging voltage. After 63 minutes, the taper timer elapses, charging is terminated, and the charger enters the full-battery state. Observe that both DVM3 and DVM4 display 0V.
- 19) Reduce the PS2 voltage to less than the charger re -charge threshold of 4V and observe that the charger resumes charging automatically. Verify that DVM3 and DVM4 displays 0V and 5.1V, respectively.
- 20)  After testing is completed, switch off PS1 and re -move the connection.
- 21)  Switch off PS2 and LOAD. Carefully remove the preloaded supply connections from EV kit.

Figure 2. Preloaded Supply Connection with EV Kit

<!-- image -->

## MAX17703EVKITA# Evaluation Kit

## Detailed Description

The MAX17703EVKITA# (EV kit) provides a charging solu -tion for a 45Ahr Li-ion battery with a CC mode charging cur -rent of 10A (I CHGMAX ) and a CV mode voltage of 4.2V from an 6.3V to 60V input supply. The EV kit features a 350kHz switching frequency for optimum efficiency and component size. The RT/SYNC PCB pad allows an external clock to synchronize the device. The EV kit includes jumper J1 to enable/disable  the  controller.  The  FLG1  and  FLG2  PCB pads  allow  monitoring  of  the  charger  status.  The  ISMON PCB pad allows monitoring of the charging current.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The EV kit offers an adjustable input undervoltage lockout (UVLO)  feature.  Figure  3  shows  the  input  undervoltage lockout setting on the EV kit. The input voltage above which the  charger  is  enabled,  can  be  set  with  a  resistor-divider connected to EN/UVLO from DCIN to PGND. See Table 1 for  jumper J1 settings. To enable the charger and set the UVLO, install the shunt across pins 1-2 on jumper J1. To disable the charger, install a shunt across pins 2-3 on jump -er J1. The V DCIN(MIN)  is selected as 6.1V for this EV kit.

<!-- image -->

## Evaluates: MAX17703 in 4.2V Li-Ion Battery Charger Application

Choose R1 as follows:

<!-- formula-not-decoded -->

where V DCIN(MIN)   is  the  voltage  at  which  the  device  is required to turn on.

Calculate the value of R2 using the following equation:

<!-- formula-not-decoded -->

where:

I EN-BIAS  = Internal bias pullup current on the EN/ULVO pin (3µA)

V EN\_TH\_R  =  EN/UVLO  pin  rising  threshold  voltage (1.25V)

For more details about setting the undervoltage lockout level, refer to the MAX17703 datasheet.

## CC Mode Charging Current Setting (ILIM)

The  EV  kit  provides  the  CC  mode  charge  current  pro -gramming feature. The ILIM PCB pad on the EV kit sup -ports  external  control  of  the  CC  mode  charging  current (I CHGMAX).  See  Table  2  for  jumper  J2  settings.  To  fix the I CHGMAX at 10A, install a shunt across pins 1-2 on jumper J2. To control I CHGMAX , install a shunt across pins 2-3 on jumper J2 and apply a voltage (V ILIM ) between the ILIM\_EXT test  point  and  nearest  SGND  PCB  pad.  The allowable voltage range on ILIM\_EXT is 0.9V to 1.5V. To fix the I CHGMAX  at 6A, remove the shunt on jumper J2. For more details about the CC mode charging current set -ting, refer to the MAX17703 IC data sheet.

Figure 3. Setting the Input Undervoltage Lockout

## Table 1. Charger Enable/Disable Jumper (J1) Settings

| JUMPER   | SHUNT POSITION   | EN/UVLO PIN                                  | CHARGER OPERATION                                                       |
|----------|------------------|----------------------------------------------|-------------------------------------------------------------------------|
| J1       | 1-2*             | Connected to the input UVLO divider midpoint | Enabled. UVLO level is set by the resistor divider from DCIN to SGND/EP |
| J1       | 2-3              | Connected to SGND/EP                         | Disabled                                                                |

* Default position.

## Table 2. CC Mode Charging Current Jumper (J2) Settings

| JUMPER   | SHUNT POSITION   | ILIM PIN                                                | I CHGMAX SETTING   |
|----------|------------------|---------------------------------------------------------|--------------------|
| J2       | 1-2*             | Connected to V REF                                      | 10A                |
| J2       | 2-3              | Connected to ILIM_EXT test point                        | 6.67 x V ILIM      |
| J2       | Not installed    | Connected to ILIM resistor divider (R8 and R9) midpoint | 6A                 |

## MAX17703EVKITA# Evaluation Kit

## Deeply Discharged Battery Detection and Preconditioning

The EV kit features deeply-discharged battery detection and preconditioning of the Li-ion battery. The deeply dis -charged battery voltage level is set at 3V on the EV kit as  per  a  typical  4.2V/45Ahr  Li-ion  battery  specification. If the battery voltage detected is less than 3V across the EV kit output, then the charger enters a precharge state. In precharge state, the charging current is set at 1/10th of  I CHGMAX   (1A)  and  the  safety  timer  counter  starts. If  the  EV  kit  output  is  not  reached  above  3V  within  the precharge-timer  timeout  (1.3  hours),  the  charger  enters a  latched-fault  state.  Otherwise,  the  charger  enters CC state.

For  the  deeply  discharged  battery  voltage-level  setting other  than  3V,  R3  and  R4  components  needs  to  be changed  on  the  EV  kit.  Use  the  following  equations  to calculate  the  required  R3  and  R4  values  for  the  deeply discharged battery voltage-level setting (V OUTDD ).

Select R3 in the range of 50kΩ to 100kΩ.

<!-- formula-not-decoded -->

For more details about the battery precharge-state detec -tion mechanism, refer to the MAX17703 IC data sheet.

## Battery Operating Temperature Range Setting (TEMP)

The EV kit features battery operating temperature range setting (TEMP) and charges only when the battery tem -perature is within the programmed operating temperature range  using  a  negative  temperature  coefficient  (NTC) thermistor. Figure 4 shows the TEMP setting on the EV kit.  The  battery  operating  temperature  range  setting  on

## Table 3. TEMP Feature Jumper (J3) Settings

| JUMPER   | SHUNT POSITION   | TEMP CONNECTION SETTING                                                  | TEMP FEATURE                        |
|----------|------------------|--------------------------------------------------------------------------|-------------------------------------|
| J3       | 1-2* 2-3         | Connected to the 47kΩ resistor (R5) Connected to the 47kΩ NTC thermistor | Disabled Enabled, set the operating |

* Default position.

## Evaluates: MAX17703 in 4.2V Li-Ion Battery Charger Application

the EV kit is +5°C to +45°C. See Table 3 for jumper J3 settings.  To  disable  the  TEMP  feature,  install  a  shunt across pins 1-2 on jumper J3. To enable the TEMP fea -ture, install a shunt across 2-3 on jumper J3, and connect a 47kΩ NTC thermistor (with B-constant (25°C - 85°C) = 4108, packed out with EV kit) at the RT1 PCB footprint on the EV kit. The NTC thermistor head should be attached on the battery to sense the battery temperature.

For  changing  the  battery  operating  temperature  range, use the following equations to calculate the required R6 and R7 values for the desired battery operating tempera -ture range.

<!-- formula-not-decoded -->

where:

R NTCCOLD = Resistance value of the 47kΩ NTC thermis -tor at minimum battery-operating temperature limit

R NTCHOT = Resistance value of the 47kΩ NTC thermistor at maximum battery-operating temperature limit

Figure 4. Setting the Battery Operating Temperature Range

<!-- image -->

## MAX17703EVKITA# Evaluation Kit

## Charger Timers (TMR)

The EV kit features a charger timer to set the timeout in precharge, CC, CV, and topup-charge states. The char -ger timer setting is adjusted by the value of the capacitor between TMR and  SGND/EP. The  default  programmed safety timer timeout in CC and CV states on the EV kit is 10.4 hours. The programmed precharge timer timeout and taper timer timeout on the EV kit are 1.3 hours (1/8 th of the safety timer timeout) and 63 minutes (1/8 th of the safety  timer  timeout),  respectively.  For  more  details  on the charger state machine and charger timers, refer to the MAX17703 IC data sheet.

To enable the timer feature, install a shunt across 1-2 on jumper J4 to connect the TMR capacitor to the TMR pin. To  disable  the  timer  feature,  install  a  shunt  across  pins 2-3 on jumper J4 to connect the V REF  to the TMR pin. See Table 4 for jumper J4 settings.

To change the safety timer setting on the EV kit, the TMR capacitor need to be calculated as per the required charg -ing time in CC and CV states from the battery charging characteristics  and  replace  C16  with  the  desired  TMR capacitor.  Use  the  following  equation  to  calculate  the C TMR for the required safety timer period in CC and CV states (T FCHG):

<!-- formula-not-decoded -->

## Table 4. Safety Timer Jumper (J4) Settings

| JUMPER   | SHUNT POSITION   | TMR CONNECTION SETTING                | SAFETY TIMER FEATURE       |
|----------|------------------|---------------------------------------|----------------------------|
| J4       | 1-2*             | Connected to a TMR capacitor (0.33μF) | Enabled, set at 10.4 hours |
| J4       | 2-3              | Connected to VREF                     | Disabled                   |

* Default position.

## Table 5. Charger Status Output Indications

|   CHARGER STATUS FLAGS (FLG2 AND FLG1) |   FLG2 VOLTAGE (V) |   FLG1 VOLTAGE (V) | CHARGER STATUS                                                                                      |
|----------------------------------------|--------------------|--------------------|-----------------------------------------------------------------------------------------------------|
|                                     11 |                5.1 |                5.1 | Charger off                                                                                         |
|                                     10 |                5.1 |                  0 | Charging in progress                                                                                |
|                                     00 |                  0 |                  0 | Charging complete                                                                                   |
|                                     01 |                  0 |                5.1 | Latched-fault or charge suspend due to high- (>45°C) or low- (<5°C) battery- temperature detection* |

* A Latched-Fault state includes latched hardware faults and faulty battery states. Charge suspended due to high or low battery temperature is not a latched fault.

## Evaluates: MAX17703 in 4.2V Li-Ion Battery Charger Application

where,

C TMR = TMR capacitor in Farad

t FCHG  =  Number  of  TMR  cycles  in  CC  and  CV  states (1048575)

T FCHG = Desired safety timer setting in CC and CV states in seconds

V TMR\_H = TMR oscillator upper threshold (1.5V)

V TMR\_L = TMR oscillator lower threshold (0.96V)

ITMR = TMR pin source/sink current (10μA).

For more details about charger timers and charger opera -tion, refer to the MAX17703 IC data sheet.

## External Clock Synchronization (RT/SYNC)

The EV kit provides an RT/SYNC PCB pad to synchronize the MAX17703 to an optional external clock. The external synchronization clock frequency must be between 0.9 x f SW and 1.1 x f SW , where f SW is the nominal frequency of  operation set by R10. The switching frequency (f SW) programmed on the EV kit is 350kHz. In the presence of a valid external clock for synchronization for 112 cycles of internal switching clock, the MAX17703 starts to sync in with external clock. For more details about external clock synchronization, refer to the MAX17703 IC data sheet.

## Charger Status Output (FLG2, FLG1)

The EV kit provides FLG1 and FLG2 PCB pads to indicate the charger status. Table 5 shows the charger status flag summary. For more details about hardware faults, refer to the MAX17703 IC data sheet.

## MAX17703EVKITA# Evaluation Kit

## System Considerations

The MAX17703 EV kit is designed to charge Li-ion bat -teries. When the load current is drawn during the battery charging process, the charging current available for bat -tery charging reduces. This influences the overall charg -ing  time  (in  CC,  CV  states).  The  safety  timer  timeout (T FCHG) must be adjusted accordingly. Disable the timer function to charge the Li-ion batteries with a parallel sys -tem load current equal to or greater than the taper current threshold (I TCHG), to avoid undesired latched-fault in CC or CV states

For safe operation, follow the procedure below while mak -ing connections:

- 1) Connect the battery terminals to the output of the charger circuit. Note that the output capacitors of the charger can draw current from the battery during a hot plug-in/connection process.
- 2) Connect the input power source to the battery char -ger circuit only after securely connecting the battery at the output.
- 3) Do not operate the charger without battery or pre -loaded supply.

For  more  details  about  charger  operation,  refer  to  the MAX17703 IC data sheet.

## EV Kit Redesign Recommendation as per Custom Battery Charging Parameters

The  MAX17703EVKITA#  is  designed  for  45Ahr,  4.2V Li-ion  battery  with  a  charging  resistance  of  15mΩ.  For other battery specifications, the following battery charging parameters need to be considered to redesign the EV kit application circuit.

## Battery Charging Resistance

The charger  controller  needs  to  be  designed  according to  the  worst-case  maximum battery charging resistance (R BAT ). If R BAT  is greater than 50mΩ, the compensation capacitor  (C17)  on  the  EV  kit  needs  to  be  redesigned using the following equation:

<!-- formula-not-decoded -->

where:

RE = R DCR + R S + R DS\_ON(HS)  x D MIN  + R DS\_ON(LS) x (1- D MIN  ) + R BAT

R DCR = DC resistance of inductor (L1)

RS = Current-sense resistor value (R22)

## Evaluates: MAX17703 in 4.2V Li-Ion Battery Charger Application

R DS\_ON(HS) ,  R DS\_ON(LS)   =  Maximum  on-state  resis -tances of high-side MOSFET (Q4) and low-side MOSFET (Q3), respectively

VOUT = Desired regulation voltage across the battery V DCIN\_MAX = Maximum operating input voltage

<!-- formula-not-decoded -->

## Battery Charging Current (I CHGMAX)

If  the  battery  charging  current  in  CC  state  needs  to be  increased  greater  than  10A  and  less  than  6A,  the following  components  on  the  EV  kit  might  need  to  be redesigned:

- 1) Buck converter inductor (L1)
- 2) Current-sense resistor (R22)
- 3) ILIM resistor divider circuit (R8 and R9)
- 4) Input capacitance on VIN (refer to the S chematic )
- 5) Output capacitance on VOUT (refer to the S chematic )
- 6) Current regulation loop compensation (R12, C17, and C18)
- 7) Step-down converter nMOSFET selection (Q2, Q3, Q4, and Q5)
- 8) Input short-circuit protection external nMOSFET Selection (Q1)

For the detailed design guidelines, refer to the MAX17703 IC data sheet.

## Battery Charging Voltage (VOUT)

If  the  battery  charging  voltage  in  CV  state  needs  to  be changed, the following components on the EV kit might need to be redesigned:

- 1) Battery feedback resistor divider circuit (R25 and R26)
- 2) External power-supply input for EXT-LDO (EXTVCC) connection circuit (R15 and C23)
- 3) Buck converter inductor (L1)
- 4) Input capacitance on VIN (refer to the schematic )
- 5) Output capacitance on VOUT (refer to the schematic )
- 6) Step-down converter nMOSFET selection (Q2, Q3, Q4, and Q5)
- 7) Input short-circuit protection external nMOSFET selection (Q1)

For detailed design guidelines, refer to the MAX17703 IC data sheet.

## MAX17703EVKITA# Evaluation Kit

## Hot Plug-In and Long Input Cables

The MAX17703EVKITA# PCB layout provides an electro -lytic  capacitor  (C15  =  68μF/100V).  This  capacitor  limits the  peak  voltage  at  the  input  of  the  MAX17703  when the DC input source is 'hot-plugged' to the EV kit input terminal  (DCIN)  with  long  cables. The  equivalent  series resistance  (ESR)  of  the  electrolytic  capacitor  dampens the oscillations caused by interaction of the inductance of the long input cables, and the ceramic capacitors at the charger input (VIN). An electrolytic capacitor at DCIN pre -vents the DCIN voltage from being less than -0.3V during input short events by providing damping with ESR.

## Long Output Cables

The  MAX17703EVKITA#  PCB  layout  provides  an  elec -trolytic  capacitor  foot  print  (C10)  to  place  an  electrolytic capacitor,  if  required.  In  applications  with  a  long  cable between the MAX17703EVKITA# output and the battery, to  dampen  the  oscillations  caused  by  the  interaction  of the cable inductance with the low ESR output capacitors of the MAX17703EVKITA#, an electrolytic capacitor with appropriate  ESR  (equivalent  series  resistance)  may  be used.

## Evaluates: MAX17703 in 4.2V Li-Ion Battery Charger Application

Choose an electrolytic  capacitor  equal  to  1.5  times  the value  of  selected  low  ESR  output  capacitance  (C OUT\_ SEL ). Select an electrolytic capacitor with the an equiva -lent series resistance (ESR ELCO ) as calculated below:

<!-- formula-not-decoded -->

where L CABLE  is the output cable inductance.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter-based charger. The EMI filter attenuates highfrequency currents drawn by the charger, and limits the noise injected back into the input power source.

The  MAX17703EVKITA#  PCB  has  designated  footprints for the placement of conducted EMI filter components as per the optional Bill of Material (BoM). Use of these filter components results in lower conducted EMI, below CISPR 32 Class B limits. Cut open the trace at L2 before installing conducted EMI filter components. The MAX17703EVKITA# PCB  layout  is  also  designed  to  limit  radiated  emissions from switching nodes of the charger, resulting in radiated emissions below CISPR 32 Class B limits.

## MAX17703EVKITA# Performance Report

(V DCIN  = 24V, V OUT = 4.2V, I CHGMAX  = 10A, f SW = 350kHz, T A = +25ºC, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17703EVKITA# Evaluation Kit

## MAX17703EVKITA# Performance Report (continued)

(V DCIN  = 24V, V OUT = 4.2V, I CHGMAX  = 10A, f SW = 350kHz, T A = +25ºC, unless otherwise noted.)

<!-- image -->

CHARGING DISABLE AND ENABLE WITH BATTERY TEMPERATURE

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE                |
|-----------------|------------------------|
| Coilcraft, Inc. | www.coilcraft.com      |
| Murata Americas | www.murataamericas.com |
| Panasonic Corp. | www.panasonic.com      |
| TDK             | www.tdk.com            |
| Vishay          | www.vishay.com         |
| Taiyo Yuden     | www.yuden.co.jp        |
| Diodes Inc.     | www.diodes.com         |
| Yageo Corp.     | www.yageo.com          |

Note: Indicate that you are using the MAX17703 when contacting these component suppliers.

<!-- image -->

<!-- image -->

70

<!-- image -->

<!-- image -->

60

30M

50

60

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17703EVKITA# | EV Kit |

80

100M

200

300

Frequency in Hz

400

500

800

1G

MAGNITUDE (dBµV/m)

## MAX17703EVKITA# Evaluation Kit

## MAX17703EVKITA# Bill of Materials

## Evaluates: MAX17703 in 4.2V Li-Ion Battery Charger Application

| S. No   | DESIGNATOR              | DESCRIPTION                                                                   | QUANTITY                         | MANUFACTURER PART NUMBER       |
|---------|-------------------------|-------------------------------------------------------------------------------|----------------------------------|--------------------------------|
| 1       | C2, C11, C27, C42, C43  | 0.1µF, 10%, 100V, X7R, Ceramic capacitor (0603)                               | 5                                | TAIYO YUDEN HMK107B7104KA      |
| 2       | C3, C4, C13, C28, C40   | 150pF, 5%, 100V, COG, Ceramic capacitor (0402)                                | 5                                | TDK C1005C0G2A151J050BA        |
| 3       | C12, C31, C39           | 0.1µF, 10%, 16V, X7R, Ceramic capacitor (0402)                                | 3                                | TAIYO YUDEN EMK105B7104KV      |
| 4       | C14                     | 10pF, 5%, 50V, COG, Ceramic capacitor (0402)                                  | 1                                | KEMET C0402C100J5GAC           |
| 5       | C15                     | ALUMINUM-ELECTROLYTIC; 68UF; 100V; TOL=20%; MODEL=EEV SERIES                  | 1                                | PANASONIC EEV-FK2A680Q         |
| 6       | C16                     | 0.33µF, 10%, 50V, X7R, Ceramic capacitor (0603)                               | 1                                | TDK CGA3E3X7R1H334K080AB       |
| 7       | C17                     | 6800pF, 10%, 25V, X7R, Ceramic capacitor (0402)                               | 1                                | YAGEO CC0402KRX7R8BB682        |
| 8       | C18                     | 82pF, 5%, 50V, COG, Ceramic capacitor (0402)                                  | 1                                | YAGEO CC0402JRNPO9BN820        |
| 9       | C19, C20, C22, C25      | 4.7µF, 10%, 100V, X7R, Ceramic capacitor (1206)                               | 4                                | MURATA GRM31CZ72A475KE11       |
| 10      | C21                     | 4.7µF, 10%, 16V, X7R, Ceramic capacitor (0805)                                | 1                                | MURATA GRM21BR71C475KA73       |
| 11      | C24                     | 1000pF, 10%, 16V, X7R, Ceramic Capacitor (0402)                               | 1                                | KEMET C0402C102K4RAC           |
| 12      | C26                     | 0.47µF, 10%, 16V, X7R, Ceramic capacitor (0603)                               | 1                                | MURATA GRM188R71C474K          |
| 13      | C29, C48                | 2200pF, 10%, 50V, X7R, Ceramic capacitor (0402)                               | 2                                | MURATA GRM155R71H222KA01       |
| 14      | C34                     | 150µF, TOL=20%, 6.3V, TANTALUM CHIP                                           | 1                                | PANASONIC 6TPE150MI            |
| 15      | C36, C37                | 22µF, 10%, 25V, X7R, Ceramic capacitor (1210)                                 | 2                                | MURATA GRM32ER71E226KE15       |
| 16      | C41                     | 47nF, 10%, 16V, X7R, Ceramic capacitor (0402)                                 | 1                                | MURATA GRM155R71C473KA01       |
| 17      | D1                      | ZENER DIODE VZ=4.7V; IZ=0.005A                                                | 1                                | COMCHIP CZRU52C4V7             |
| 18      | D2                      | SCHOTTKY DIODE PIV=100V; IF=1A                                                | 1                                | DIODES INCORPORATED DFLS1100-7 |
| 19      | L1                      | INDUCTOR, 3.3µH, 19.4A (7mm x 7mm), 9.4mΩ                                     | 1                                | COILCRAFT XAL7070-332ME        |
| 20      | Q1                      | N-CHANNEL POWER MOSFET(PowerPAK® SO-8) PD-(6.25W); I-(95A); V-(100V)          | 1                                | VISHAY SIR170DP-T1-RE3         |
| 22      | R1                      | RESISTOR, 56.2KΩ, 1% (0603), 0.1W                                             | 1                                | VISHAY DALE CRCW060356K2FK     |
| 23      | R2                      | RESISTOR, 14KΩ, 1% (0603), 0.1W                                               | 1                                | VISHAY DALE CRCW060314K0FK     |
| 24      | R3                      | RESISTOR, 84.5KΩ, 1% (0402), 0.0625W                                          | 1                                | VISHAY DALE CRCW040284K5FK     |
| 25      | R4                      | RESISTOR, 60.4KΩ, 1% (0402), 0.0625W                                          | 1                                | VISHAY DALE CRCW040260K4FK     |
| 26      | R5                      | RESISTOR, 47KΩ, 1% (0402), 0.0625W                                            | 1                                | VISHAY DALE CRCW040247K0FK     |
| 27      | R6                      | RESISTOR, 19.6KΩ, 1% (0402), 0.0625W                                          | 1                                | VISHAY DALE CRCW040219K6FK     |
| 28      | R7                      | RESISTOR, 39.2KΩ, 1% (0402), 0.0625W                                          | 1                                | VISHAY DALE CRCW040239K2FK     |
| 29      | R8                      | RESISTOR, 80.6KΩ, 1% (0402), 0.1W                                             | 1                                | PANASONIC ERJ-2RKF8062         |
| 30      | R9                      | RESISTOR, 45.3KΩ, 1% (0402), 0.0625W                                          | 1                                | PANASONIC ERJ-2RKF4532         |
| 31      | R11, R23                | RESISTOR, 0Ω, 5% (0402), 0.0625W                                              | 2                                | YAGEO PHYCOMP RC0402JR-070RL   |
| 32      | R12                     | RESISTOR, 11.5KΩ, 1% (0402), 0.0625W                                          | 1                                | VISHAY DALE CRCW040211K5FK     |
| 33      | R13, R14                | RESISTOR, 10KΩ, 1% (0402), 0.0625W                                            | 2                                | YAGEO PHICOMP RC0402FR-0710KL  |
| 34      | R16, R18                | RESISTOR, 1Ω, 1% (0402), 0.0625W                                              | 2                                | VISHAY DALE CRCW04021R00FK     |
| 36      | R21                     | RESISTOR, 40.2Ω, 1% (0402), 0.0625W                                           | 1                                | VISHAY DALE CRCW040240R2FK     |
| 35      | R22                     | RESISTOR, 0.005Ω, 1% (2512), 1W                                               | 1                                | VISHAY DALE WSL25125L000F      |
| 37      | R25                     | RESISTOR, 42.2KΩ, 1% (0402), 0.0625W                                          | 1                                | YAGEO RC0402FR-0742K2L         |
| 38      | R26                     | RESISTOR, 17.8KΩ, 1% (0402), 0.0625W                                          | 1                                | VISHAY DALE CRCW040217K8FK     |
| 39      | U1                      | SYNCHRONOUS STEP-DOWN LI-ION BATTERY CHARGER CONTROLLER (TQFN24-EP 4mm x 4mm) | 1                                | MAX17703ATG+                   |
| 40      | DCIN, PGND, PGND2, VOUT | BANANA JACK (5.2mm DIA X 5.5mm LENGTH)                                        | 4                                | KEY STONE 575-4                |
| 41      | ILIM_EXT                | TEST POINT, PIN DIA=0.1IN; TOTAL LENGTH=0.3IN;                                | 1                                | KEY STONE 5000                 |
| 42      | J1-J4                   | 3-pin header (0.1' centers)                                                   | 4                                | SULLINS PEC03SAAN              |
| 43      | -                       | SHUNTS                                                                        | 4                                | SULLINS STC02SYAN              |
| 44      | RT1                     | THERMISTOR, NTC, 47KOHM, 1%, 4108K (B25°C-85°C) THROUGH HOLE-RADIAL LEAD      | 1 (Separate Packout with EV kit) | MURATA NXFT15WB473FA2B150      |
| 45      | C1, C5, C6, C9          | OPTIONAL: 4.7μF, 10%, 100V, X7R, Ceramic capacitor (1206)                     | 4                                | MURATA GRM31CZ72A475KE11       |
| 46      | L2                      | OPTIONAL: INDUCTOR, 15μH, 3.9A (5mm x 5mm), 9.4mΩ                             | 1                                | COILCRAFT XAL5050-153ME        |
| 47      | Q2, Q5                  | OPEN: PowerPAK®SO-8                                                           | 0                                |                                |
| 48      | C7, C8                  | OPEN: CAPACITOR (1206)                                                        | 0                                |                                |
| 49      | C23                     | OPEN: CAPACITOR (0603)                                                        | 0                                |                                |
| 50      | C30, C46, C47           | OPEN: CAPACITOR (0402)                                                        | 0                                |                                |
| 51      | C35                     | OPEN: TANTALUM CAPACITOR (2917)                                               | 0                                |                                |
| 52      | C38, C44                | OPEN: CAPACITOR (1210)                                                        | 0                                |                                |
| 53      | C10                     | OPEN: ALUMINUM-ELECTROLYTIC CAPACITOR (7mmx8.5mm) OPEN: SCHOTTKY DIODE (SMB)  | 0 0                              |                                |
| 54 55   | D3 R10, R15, R17, R19   | OPEN: RESISTOR (0402)                                                         | 0                                |                                |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| J1, J2, J3, J4         | 1-2                    |

## MAX17703EVKITA# Evaluation Kit

## MAX17703EVKITA# Schematic

<!-- image -->

## MAX17703EVKITA# Evaluation Kit

## MAX17703EVKITA# PCB Layout

MAX17703EVKITA# PCB Layout-Top Silkscreen

<!-- image -->

MAX17703EVKITA PCB Layout-Top Layer

<!-- image -->

## Evaluates: MAX17703 in 4.2V Li-Ion Battery Charger Application

MAX17703EVKITA# PCB Layout-Layer 2

<!-- image -->

MAX17703EVKITA# PCB Layout-Layer 3

<!-- image -->

## MAX17703EVKITA# Evaluation Kit

## MAX17703EVKITA# PCB Layout (continued)

MAX17703EVKITA# PCB Layout-Bottom Layer

<!-- image -->

## Evaluates: MAX17703 in 4.2V Li-Ion Battery Charger Application

MAX17703EVKITA# PCB Layout-Bottom Silkscreen

<!-- image -->

## MAX17703EVKITA# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                          | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 4/21            | Initial release                                                                                                                                                                      | -               |
|                 1 | 1/22            | Updated General Description , Features , Equipment Setup and Test Procedure , Detailed Description , TOC 1 , TOC 2 , TOC 4 , TOC 12 , Bill of Materials , Schematic, and PCB Layouts | 1-5, 7-14       |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

## Evaluates: MAX17703 in 4.2V Li-Ion

Battery Charger Application