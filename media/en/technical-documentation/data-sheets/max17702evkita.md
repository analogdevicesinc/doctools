<!-- lastmod 2022-08-03 -->
<!-- image -->

Click here to ask an associate for production status of specific part numbers.

## Evaluates: MAX17702 in 13.8V Lead-Acid Battery Charger Application

## General Description

The  MAX17702EVKITA#  (EV  kit)  provides  a  proven design  to  evaluate  the  MAX17702  high-efficiency,  highvoltage, Himalaya synchronous step-down DC-DC leadacid (Pb-acid) charger controller. The EV kit charges the Pb-acid battery in constant current (CC), absorption con -stant-voltage (CV) states, and enters an floating CV state after  detecting  the  taper  current  threshold  or  absorption CV timer timeout in the absorption CV state. The EV kit is designed to charge the Pb-acid battery with 10A CC mode charging  current  (I CHGMAX )  and  13.8V  absorption  CV voltage (V OUT ) from a 16.8V to 60V input supply. The EV kit is optimized for 24V nominal input-voltage application. The switching  frequency  of  the  EV  kit  is  set  at  350kHz (f SW )  for  optimum  efficiency  and  component  size.  The EV kit features an absorption CV timer (TMR) to set the maximum charging time in the absorption CV state. The EV kit features battery temperature sensing and charges only  when  the  temperature  is  in  the  allowable  charging temperature range. The EV kit also features the charging voltage temperature compensation based on battery tem -perature. The EV kit also provides a good layout example, which is optimized for conducted, radiated EMI and ther -mal performance. For more details about the IC benefits and features, refer to the MAX17702 IC data sheet.

Ordering Information appears at end of data sheet.

## MAX17702EVKITA# Evaluation Kit

## Features

- Operates from a 16.8V to 60V Input Supply
- 10A CC Mode Charging Current
- 13.8V Absorption CV Voltage and 13.5V Floating CV Voltage
- 350kHz Switching Frequency
- Resistor-Programmable UVLO Threshold (EN/UVLO)
- Input Short Protection
- 11V Programmed Deeply Discharged Battery Detection
- Capacitor Programmed 17 hours Absorption CV Timer
- Full-Battery Detection with Taper Current Threshold or Absorption CV Timer
- Cycle-by-Cycle Overcurrent Limit
- External Clock Synchronization (RT/SYNC)
- Charger Status Flags (FLG1 and FLG2)
- Charging Current Monitoring (ISMON)
- Battery Temperature Sensing and Charge when Within Operating Temperature Range of -20°C to +60°C
- Charging Voltage Temperature Compensation (-18mV/°C)
- IC Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR 32 (EN55032) Class B Conducted and Radiated Emissions

## MAX17702EVKITA# Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX17702EVKITA#
- 60V, 10A DC input power supply (PS1)
- -
- 12V, 84Ah Pb-acid battery with 22mΩ battery charg ing resistance (or) 24V, 25A DC power supply (PS2) and 12A DC elec -tronic load (LOAD)
- Four digital voltmeters (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed. Carefully make the connections  to  avoid  the  battery  short  circuit  at  the output. Do not operate the EV kit without battery or preloaded supply.

The battery charger can be tested in two different ways, either  with  a  battery  or  preloaded  supply  (power  supply with electronic load).

## Testing with Battery:

- 1) Set the power supply at a voltage between 16.8V and 60V. Disable the power supply (PS1).
- 2) Make sure that the battery has an open-circuit volt -age of 12V.
- 3) Connect PS1 and Pb-acid battery to the EV kit as shown in Figure 1.
- 4) Verify that the shunts are installed across pins 1-2 on all jumpers: charger enable/disable jumper (J1), CC mode charging current jumper (J2), TEMP fea -ture jumper (J3) and charger timer jumper (J4). See Table 1, Table 2, Table 3, and Table 4 for details.
- 5) Connect the digital voltage meter (DVM1) between the ISMON PCB pad and the nearest SGND PCB pad for monitoring the charging current. Connect DVM2 between the VOUT PCB pad and the nearest PGND PCB pad for measuring the charging voltage.

## Evaluates: MAX17702 in 13.8V Lead-Acid Battery Charger Application

- 6) Connect the DVM3 between the FLG1 PCB pad and the nearest SGND PCB pad for monitoring the charger status.
- 7) Connect the DVM4 between the FLG2 PCB pad and the nearest SGND PCB pad for monitoring the charger status. See Table 5 for details.
- 8) Turn on the DC power supply (PS1).
- 9) The charger starts in CC state. Verify that the DVM1 displays 1.5V, proportional to the 10A charging cur -rent (I CHGMAX).
- 10) In the CC state, verify that DVM3 and DVM4 display 0V and 5.1V, respectively.
- 11) When the charging voltage reaches above 13.4V, the charger enters the absorption CV state, and the charging current starts to fall from 10A. Verify that when DVM2 displays above 13.4V, the voltage reading on DVM1 falls from 1.5V, proportional to the charging current. In the absorption CV state, the charger timer counter starts.
- 12) When the charging current falls below 1A or the default 17-hour absorption CV timer timeout has elapsed, the charger enters the floating state. Verify that DVM1 shows less than 0.15V, proportional to the charging current of less than 1A. Verify that both DVM3 and DVM4 display 0V.
- 13) In floating CV state, the charging voltage is regu -lated at 13.5V to maintain the Pb-acid battery at full charge.
- 14)  After testing is completed, switch off the power sup -ply and remove the connections from the EV kit.
- 15)  Carefully remove the battery connection from the EV kit.

Figure 1. Battery Connection with the EV kit

<!-- image -->

## MAX17702EVKITA# Evaluation Kit

## Testing with Preloaded Supply:

- 1) Set the first power supply (PS1) at a voltage between 16.8V and 60V. Disable the power supply (PS1).
- 2) Set the second power supply (PS2) at a voltage of 12V and with current limit of 13A. Disable the power supply (PS2).
- 3) Set the electronic load (LOAD) at 12A in constant current (CC) mode and disable the load.
- 4) Connect PS1, PS2, and LOAD to the EV kit as shown in Figure 2.
- 5) Make sure that the LOAD is connected across the PS2 terminals and the connection resistance from the EV kit to the preloaded supply is not greater than 100mΩ.
- 6) Verify that the shunts are installed across pins 1-2 on all jumpers: charger enable/disable jumper (J1), CC mode charging current jumper (J2), TEMP fea -ture jumper (J3), and charger timer jumper (J4). See Table 1, Table 2, Table 3, and Table 4 for details.
- 7) Connect a digital voltage meter (DVM1) between the ISMON PCB pad and the nearest SGND PCB pad for monitoring the charging current.
- 8) Connect the DVM2 between the VOUT PCB pad and the nearest PGND PCB pad for measuring the charging voltage.
- 9) Connect the DVM3 between the FLG1 PCB pad and the nearest SGND PCB pad for monitoring the charger status.
- 10) Connect the DVM4 between the FLG2 PCB pad and the nearest SGND PCB pad for monitoring the charger status. See Table 5 for details.
- 11) Turn on LOAD and PS2. Verify that 12A load current is supplied by PS2 and adjust the PS2 voltage to maintain the EV kit terminal voltage at 12V.
- 12) Turn on the DC power supply (PS1).
- 13) The charger starts in CC state. Verify that DVM1 displays 1.5V, proportional to 10A charging current (I CHGMAX).

## Evaluates: MAX17702 in 13.8V Lead-Acid Battery Charger Application

- 14)  In CC state, verify that DVM3 and DVM4 display 0V and 5.1V, respectively.
- 15)  Increase the voltage on PS2 in steps of 0.1V to maintain the DVM2 reading at 13.4V where the char -ger enters the absorption CV state, and the charg -ing current starts to fall from 10A. Verify that when DVM2 displays above 13.4V, the voltage reading in DVM1 falls from 1.5V, proportional to the charging current.
- 16)  Increase the voltage on PS2 such that the charg -ing current falls below the taper current threshold, i.e.,1A. Verify that DVM1 shows less than 0.15V, proportional to the charging current. The charger enters the floating state upon detecting the taper current threshold. Verify that both DVM3 and DVM4 display 0V.
- 17) In the floating CV state, charging voltage is regulated at 13.5V.
- 18)  Reduce the voltage on PS2 in steps of 0.1V to main -tain the DVM2 reading at 13.5V where the charging voltage is regulated in floating CV state.
- 19) After testing is completed, switch off PS1 and re -move the connection.
- 20) Switch off PS2 and LOAD. Carefully remove the preloaded supply connections from the EV kit.

Figure 2. Preloaded Supply Connection with the EV kit

<!-- image -->

## MAX17702EVKITA# Evaluation Kit

## Detailed Description

The MAX17702EVKITA# (EV kit) provides a charging solu -tion for an 84Ah Pb-acid battery with a CC mode charging current of 10A (I CHGMAX ), absorption CV voltage of 13.8V, and floating CV voltage of 13.5V from a 16.8V to 60V input supply. The EV kit features a 350kHz switching frequency for optimum efficiency and component size. The RT/SYNC PCB  pad  allows  an  external  clock  to  synchronize  the device. The EV kit includes jumper J1 to enable/disable the controller. The FLG1 and FLG2 PCB pads allow monitoring of  the  charger  status. The  ISMON PCB pad enables the charging current monitor.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The EV kit offers an adjustable input undervoltage lock -out  (UVLO)  feature.  Figure  3  shows  the  input  under -voltage  lockout  setting  on  the  EV  kit.  The  input  volt -age  above  which  the  charger  is  enabled,  can  be  set with  a  resistor-divider  connected  to  EN/UVLO  from DCIN to PGND. See Table 1 for charger enable/disable jumper (J1) settings. To enable the charger and set the UVLO,  install  a  shunt  across  pins  1-2  on  jumper  J1.

Figure 3. Setting the Input Undervoltage Lockout

<!-- image -->

## Evaluates: MAX17702 in 13.8V Lead-Acid Battery Charger Application

To  disable  the  charger,  install  a  shunt  across  pins  2-3 on jumper J1. The V DCIN(MIN)  is selected as 16V for this EV kit.

Choose R1 as follows:

<!-- formula-not-decoded -->

where V DCIN(MIN)   is  the  voltage  at  which  the  device  is required to turn on.

Calculate the value of R2 using the following equation:

<!-- formula-not-decoded -->

where:

I EN-BIAS  = Internal bias pullup current on the EN/ULVO pin (3µA)

V EN\_TH\_R  =  EN/UVLO  pin  rising  threshold  voltage (1.25V)

For more details about setting the undervoltage lockout level, refer to the MAX17702 data sheet.

## CC Mode Charging Current Setting (ILIM)

The  EV  kit  provides  the  CC  mode  charging  current  pro -gramming feature. The  ILIM  PCB  pad  on  the  EV  kit  sup -ports  external  control  of  the  CC  mode  charging  current (I CHGMAX). See Table 2 for the CC mode charging current jumper J2 settings. To fix the I CHGMAX  at 10A, install a shunt across pins 1-2 on jumper J2. To control I CHGMAX , install a shunt across pins 2-3 on jumper J2 and apply a voltage (V ILIM )  between  the  ILIM\_EXT  test  point  and  the  nearest SGND PCB pad. The allowable voltage range on ILIM\_EXT is 0.9V-1.5V. To fix the I CHGMAX  at 6A, remove the shunt on jumper J2. For more details about the CC mode charging current setting, refer to the MAX17702 IC data sheet.

## Table 1. Charger Enable/Disable Jumper (J1) Settings

| JUMPER   | SHUNT POSITION   | EN/UVLO PIN                                  | CHARGER OPERATION                                                       |
|----------|------------------|----------------------------------------------|-------------------------------------------------------------------------|
| J1       | 1-2*             | Connected to the input UVLO divider midpoint | Enabled, UVLO level is set by the resistor devider from DCIN to SGND/EP |
| J1       | 2-3              | Connected to SGND/EP                         | Disabled                                                                |

* Default position.

## Table 2. CC Mode Charging Current Jumper (J2) Settings

| JUMPER   | SHUNT POSITION   | ILIM PIN                                                    | I CHGMAX SETTING   |
|----------|------------------|-------------------------------------------------------------|--------------------|
| J2       | 1-2*             | Connected to V REF                                          | 10A                |
| J2       | 2-3              | Connected to the ILIM_EXT PCB pad                           | 6.67 x V ILIM      |
| J2       | Not installed    | Connected to the ILIM resistor divider (R8 and R9) midpoint | 6A                 |

* Default position.

## MAX17702EVKITA# Evaluation Kit

## Deeply Discharged Battery Detection and Preconditioning

The  EV  kit  features  deeply  discharged  battery  detection and  preconditioning  of  the  Pb-acid  battery.  The  deeply discharged battery voltage level is set at 11V on the EV kit as  per  a  typical  12V/84Ah  Pb-acid  battery  specification.  If the battery voltage detected is less than 11V across the EV kit  output,  then  the  charger  enters  the  precharge  state.  In the precharge state, the charging current is set to 1/10 th  of I CHGMAX (1A) and the charger timer counter starts. If the EV kit output is not reached above 11V within the prechargetimer  timeout  (2.1  hours),  the  charger  enters  the  latchedfault state. Otherwise, the charger enters the CC state.

For  the  deeply  discharged  battery  voltage  level  setting other than 11V, R3 and R4 resistors need to be changed on the EV kit. Use the following equations to calculate the required R3 and R4 values for the deeply discharged bat -tery voltage level setting (V OUTDD ).

Select R 3 in the range of 50kΩ to 100kΩ.

<!-- formula-not-decoded -->

For more details about the battery precharge state detec -tion mechanism, refer to the MAX17702 IC data sheet.

## Battery Operating Temperature Range Setting (TEMP)

The EV kit features a battery operating temperature range setting (TEMP) and charges only when the battery tem -perature is within the programmed operating temperature range  using  a  negative  temperature  coefficient  (NTC) thermistor. Figure 4 shows the TEMP setting on the EV kit.  The  battery  operating  temperature  range  setting  on the EV kit is -20°C to +60°C. See Table 3 for the TEMP feature jumper J3 settings. To disable the TEMP feature, install a shunt across pins 1-2 on jumper J3. To enable TEMP feature, install a shunt across 2-3 on jumper J3, 47kΩ  NTC  thermistor  (with  B-constant  (25°C-85°C)  = 4108, packed out with the EV kit) should be connected at the RT1 PCB footprint, on the EV kit. The NTC thermistor head should be attached on the battery to sense the bat -tery temperature.

## Table 3. TEMP Feature Jumper (J3) Settings

| JUMPER   | SHUNT POSITION   | TEMP CONNECTION SETTING                                                  | TEMP FEATURE                        |
|----------|------------------|--------------------------------------------------------------------------|-------------------------------------|
| J3       | 1-2* 2-3         | Connected to the 47kΩ resistor (R5) Connected to the 47kΩ NTC thermistor | Disabled Enabled, set the operating |

* Default position.

## Evaluates: MAX17702 in 13.8V Lead-Acid Battery Charger Application

For  changing  the  battery  operating  temperature  range, use the following equations to calculate the required R6, R16, and R7 values for the desired battery operating tem -perature range.

<!-- formula-not-decoded -->

where:

T HOT = Maximum battery charging temperature limit in °C T COLD = Minimum battery charging temperature limit in °C RNTCHOT = Resistance value of the 47kΩ NTC thermistor

(RT1) at T HOT

RNTCCOLD = Resistance value of the 47kΩ NTC thermis -tor (RT1) at T COLD

Figure 4. Setting the Battery Operating Temperature Range

<!-- image -->

## MAX17702EVKITA# Evaluation Kit

## Charger Timers (TMR)

The EV kit features a charger timer to set the timeout in pre -charge and absorption CV states. The charger timer setting is adjusted by the value of the capacitor between TMR and SGND/EP. The default programmed absorption CV timer timeout on the EV kit is 17 hours. The programmed pre -charge timer timeout on the EV kit is 2.1 hours (1/8 th  of the absorption CV timer timeout). For more details on charger timers, refer to the MAX17702 IC data sheet.

To enable the timer feature, install a shunt across 1-2 on the charger timer jumper (J4) to connect the TMR capaci -tor to TMR pin. To disable the timer feature, install a shunt across pins 2-3 on jumper J4 to connect the V REF pin to TMR pin. See Table 4 for jumper J4 settings.

To  change  the  charger  timer  setting  on  the  EV  kit,  the TMR capacitor needs to be calculated as per the required charging time in the absorption CV state from the battery charging characteristics and replace C16 with the desired TMR capacitor.  Use  the  following  equation  to  calculate the C TMR  for the required charger timer period in absorp -tion CV state (T FCHG ):

<!-- formula-not-decoded -->

## Table 4. Charger Timer Jumper (J4) Settings

| JUMPE R   | SHUNT POSITION   | TMR CONNECTION SETTING              | CHARGER TIMER FEATURE    |
|-----------|------------------|-------------------------------------|--------------------------|
| J4        | 1-2*             | Connected to TMR capacitor (0.27μF) | Enabled, set at 17 hours |
| J4        | 2-3              | Connected to V REF                  | Disabled                 |

* Default position.

## Table 5. Charger Status Output Indications

|   CHARGER STATUS FLAGS (FLG2 AND FLG1) |   FLG2 VOLTAGE (V) |   FLG1 VOLTAGE (V) | CHARGER STATUS                                                                                         |
|----------------------------------------|--------------------|--------------------|--------------------------------------------------------------------------------------------------------|
|                                     11 |                5.1 |                5.1 | Charger off                                                                                            |
|                                     10 |                5.1 |                  0 | Charging in progress                                                                                   |
|                                     00 |                  0 |                  0 | Floating charging                                                                                      |
|                                     01 |                  0 |                5.1 | Latched-fault or charge suspend due to high- (> +60°C) or low-(< -20°C) battery-temperature detection* |

*A latched-fault state includes latched hardware faults and faulty battery states. Charge suspended due to high or low battery temperature is not a latched fault.

For more details about hardware faults, refer to the MAX17702 IC data sheet.

## Evaluates: MAX17702 in 13.8V Lead-Acid Battery Charger Application

where,

T FCHG = Desired absorption CV timer setting in seconds

CTMR = TMR capacitor in Farad

t FCHG = Number of TMR cycles in absorption CV state (2097151)

V TMR\_H = TMR oscillator upper threshold (1.5V)

V TMR\_L = TMR oscillator lower threshold (0.96V)

I TMR = TMR pin source/sink current (10μA).

For more details about charger timers and charger opera -tion, refer to the MAX17702 IC datasheet.

## External Clock Synchronization (RT/SYNC)

The EV kit provides an RT/SYNC PCB pad to synchronize the MAX17702 to an optional external clock. The exter -nal  synchronization  clock  frequency  must  be  between 0.9  x  f SW and  1.1  x  f SW ,  where  f SW is  the  frequency of  operation set by R10. The switching frequency (f SW) programmed on the EV kit is 350kHz. In the presence of a valid external clock for synchronization for 112 cycles of internal switching clock, the MAX17702 starts to sync with an external clock. For more details about external clock synchronization, refer to the MAX17702 IC data sheet.

## Charger Status Output (FLG2, FLG1)

The EV kit provides FLG1 and FLG2 PCB pads to indicate the charger status. Table 5 shows the charger status flag summary.

## MAX17702EVKITA# Evaluation Kit

## Charging Voltage Temperature Compensation

The EV kit provides temperature compensation of battery charging voltage by including a linear positive tempera -ture coefficient (PTC) resistor in an output-voltage feed -back  circuit.  Temperature  compensation  is  disabled  on the default EV kit. A battery charging voltage temperature compensation  of  -18mV/°C  can  be  enabled  by  remov -ing  the  R21  resistor  and  connecting  the  PTC  resistor (packed  out  with  the  EV  kit)  across  the  RT2  terminals. The PTC thermistor head should be attached to the bat -tery. Operate the charger only when either the R21 or RT2 resistor is connected, but not when both are connected. For more details on temperature compensation, refer to the MAX17702 IC data sheet.

## System Considerations

The  MAX17702  EV  kit  is  designed  to  charge  Pb-acid batteries. When load current is drawn during the battery charging process, the charging current available for bat -tery charging reduces. This influences the charging time in precharge and absorption CV states. The timer setting must be adjusted accordingly  for  the  intended  charging process. If the load current drawn is more than the taper current threshold (1A), the charger continues to operate in the absorption CV state until the timer is elapsed. The charger enters an floating CV state, after the timer elaps -es in the absorption CV state. If the timer is disabled and the load current is more than 1A, the charger continues to operate in the absorption CV state.

For safe operation, follow the procedure below while mak -ing connections:

- 1) Connect the battery terminals to the output of the charger circuit. Note that the output capacitors of the charger can draw current from the battery during a hot plug-in/connection process.
- 2) Connect the input power source to the battery char -ger circuit only after securely connecting the battery at the output.
- 3) Do not operate the charger without a battery or a preloaded supply.

For  more  details  about  charger  operation,  refer  to  the MAX17702 IC data sheet.

## EV Kit Redesign Recommendation for Custom Battery Charging Parameters

The  MAX17702EVKITA#  is  designed  for  12V/84Ah Pb-acid battery with a charging resistance of 22mΩ. For other battery specification, the following battery charging parameters need to be considered to redesign the EV kit application circuit.

## Evaluates: MAX17702 in 13.8V Lead-Acid Battery Charger Application

## Battery Charging Resistance

The charger controller needs to be designed according to worst-case maximum battery charging resistance (R BAT ). If R BAT  is greater than 100mΩ, the compensation capaci -tor (C17) on the EV kit needs to be redesigned using the following equation:

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

RDCR = DC resistance of inductor (L1)

R S = Current sense resistor value (R27)

RDS\_ON(HS) ,  R DS\_ON(LS)   =  Maximum  on-state  resis -tances of high-side MOSFET (Q4) and low-side MOSFET (Q3), respectively

VOUT = Desired regulation voltage across the battery in absorption CV state

V DCIN\_MAX = Maximum operating input voltage

<!-- formula-not-decoded -->

## Battery Charging Current (I CHGMAX)

If  the battery charging current in CC state needs to be increased greater than 10A or less than 6A on the EV kit, the following components on the EV kit might need to be redesigned:

- 1) Buck converter inductor (L1)
- 2) Current sense resistor (R27)
- 3) ILIM resistor divider circuit (R8 and R9)
- 4) Input capacitance on VIN (refer to the schematic )
- 5) Output capacitance on VOUT (Refer to the schematic )
- 6) Current regulation loop compensation (R12, C17, and C18)
- 7) Step-down converter nMOSFET selection (Q2, Q3, Q4, and Q5)
- 8) Input short-circuit protection external nMOSFET selection (Q1)

For the detailed design guidelines, refer to the MAX17702 IC datasheet.

## MAX17702EVKITA# Evaluation Kit

## Battery Charging Voltage (VOUT)

If the battery charging voltage in the absorption CV state and floating CV state needs to be changed on the EV kit, the following components on the EV kit might need to be redesigned:

- 1) Battery feedback resistor divider circuit (R22, R30 and R31)
- 2) External power-supply input for EXT-LDO (EXTVCC) connection circuit (R15 and C23)
- 3) Buck converter inductor (L1)
- 4) Input capacitance on VIN (Refer to the schematic )
- 5) Output capacitance on VOUT (Refer to the schematic )
- 6) Step-down converter nMOSFET selection (Q2, Q3, Q4, and Q5)
- 7) Input short-circuit protection external nMOSFET selection (Q1)

For the detailed design guidelines, refer to the MAX17702 IC datasheet.

## Hot Plug-In and Long Input Cables

The MAX17702EVKITA# PCB layout provides an electro -lytic  capacitor  (C15  =  68μF/100V).  This  capacitor  limits the  peak  voltage  at  the  input  of  the  MAX17702  when the DC input source is 'hot-plugged' to the EV kit input terminals (DCIN) with long cables. The equivalent series resistance  (ESR)  of  the  electrolytic  capacitor  dampens

## Evaluates: MAX17702 in 13.8V Lead-Acid Battery Charger Application

the  oscillations  caused  by  interaction  of  the  inductance of  the  long  input  cables,  and  the  ceramic  capacitors  at the charger input (VIN). An electrolytic capacitor at DCIN prevents  the  DCIN  voltage  from  being  less  than  -0.3V during input short events by providing damping with ESR. Additionally, if required, add a Schottky diode (D3; refer to the MAX17702EVKITA# Schematic ) with an 80V rating at DCIN in parallel with the electrolytic capacitor (C15).

## Long Output Cables

The  MAX17702EVKITA#  PCB  layout  provides  an  elec -trolytic  capacitor  foot  print  (C56)  to  place  an  electrolytic capacitor,  if  required.  In  applications  with  a  long  cable between the MAX17702EVKITA# output and the battery, to  dampen  the  oscillations  caused  by  the  interaction  of the cable inductance with the low ESR output capacitors of the MAX17702EVKITA#, an electrolytic capacitor with appropriate  ESR  (equivalent  series  resistance)  may  be used.

Choose an electrolytic  capacitor  equal  to  1.5  times  the value  of  selected  low  ESR  output  capacitance  (C OUT\_ SEL ). Select an electrolytic capacitor with the an equiva -lent series resistance (ESR ELCO ) as calculated below:

<!-- formula-not-decoded -->

where L CABLE  is the output cable inductance.

## MAX17702EVKITA# Performance Report

(V DCIN  = 24V, V OUT = 13.8V, I CHGMAX  = 10A, f SW = 350kHz, T A = +25ºC, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: START WITH PRECHARGE STATE, LEAD-ACID BATTERY: 12V, 84Ah

<!-- image -->

<!-- image -->

## MAX17702EVKITA# Performance Report (continued)

(V DCIN  = 24V, V OUT = 4.2V, I CHGMAX  = 10A, f SW = 350kHz, T A = +25ºC, unless otherwise noted.)

<!-- image -->

<!-- image -->

## CHARGING DISABLE AND ENABLE WITH BATTERY TEMPERATURE DETECTION

<!-- image -->

20s/div CONDITIONS: CC STATE, SHUNT POSITION 2-3 ON JUMPER J3

<!-- image -->

CONDITIONS: V OUT = 13.3V, I CHG = 10A, ABSORPTION CV STATE, WITH L2 = 5.6µH, C4-C8=C10=C32=C33=C45=C49-C51= 4.7µF/100V/X7R/1206

<!-- image -->

## CHARGING-VOLTAGE TEMPERATURE COMPENSATION

CONDITIONS: ABSORPTION CV STATE, I CHG = 1.1A Peak (Horizontal)

<!-- image -->

60

<!-- image -->

dBµV/m

CONDITIONS: V OUT = 13.3V, I CHG = 10A, ABSORPTION CV STATE

MAGNITUDE (dBµV/m)

## MAX17702EVKITA# Evaluation Kit

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

Note: Indicate that you are using the MAX17702 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17702EVKITA# | EV Kit |

## MAX17702EVKITA# Evaluation Kit

## MAX17702EVKITA# Bill of Materials

| S. No   | DESIGNATOR                         | DESCRIPTION                                                               | QUANTITY                         | MANUFACTURER PART NUMBER       |
|---------|------------------------------------|---------------------------------------------------------------------------|----------------------------------|--------------------------------|
| 1       | C1, C9, C19, C20, C22, C25         | 4.7µF, 10%, 100V, X7R, Ceramic capacitor (1206)                           | 6                                | MURATA GRM31CZ72A475KE11       |
| 2       | C2, C11, C27, C42, C43             | 0.1µF, 10%, 100V, X7R, Ceramic capacitor (0603)                           | 5                                | TAIYO YUDEN HMK107B7104KA      |
| 3       | C3, C13, C28, C40, C52, C53        | 150pF, 5%, 100V, COG, Ceramic capacitor (0402)                            | 6                                | TDK C1005C0G2A151J050BA        |
| 4       | C12                                | 0.1µF, 10%, 16V, X7R, Ceramic capacitor (0402)                            | 1                                | TAIYO YUDEN EMK105B7104KV      |
| 5       | C14                                | 10pF, 5%, 50V, COG, Ceramic capacitor (0402)                              | 1                                | KEMET C0402C100J5GAC           |
| 6       | C15                                | ALUMINUM-ELECTROLYTIC; 68UF; 100V; TOL=20%; MODEL=EEV SERIES              | 1                                | PANASONIC EEV-FK2A680Q         |
| 7       | C16                                | 0.27µF, 10%, 16V, X7R, Ceramic capacitor (0603)                           | 1                                | KEMET C0603C274K4RAC           |
| 8       | C17                                | 5600pF, 10%, 50V, X7R, Ceramic capacitor (0402)                           | 1                                | KEMET C0402C562K5RAC           |
| 9       | C18                                | 47pF, 5%, 50V, COG, Ceramic capacitor (0402)                              | 1                                | YAGEO CC0402JRNPO9BN470        |
| 10      | C21                                | 4.7µF, 10%, 16V, X7R, Ceramic capacitor (0805)                            | 1                                | MURATA GRM21BR71C475KA73       |
| 11      | C23                                | 1µF, 10%, 25V, X7R, Ceramic capacitor (0603)                              | 1                                | TAIYO YUDEN TMK107B7105KA      |
| 12      | C24                                | 1000pF, 10%, 16V, X7R, Ceramic Capacitor (0402)                           | 1                                | KEMET C0402C102K4RAC           |
| 13      | C26                                | 0.47µF, 10%, 16V, X7R, Ceramic capacitor (0603)                           | 1                                | MURATA GRM188R71C474K          |
| 14      | C29, C48                           | 2200pF, 10%, 50V, X7R, Ceramic capacitor (0402)                           | 2                                | MURATA GRM155R71H222KA01       |
| 15      | C31, C39                           | 0.1μF, 10%, 25V, X7R, Ceramic capacitor (0402)                            | 2                                | MURATA GRM155R71E104KE14       |
| 16      | C34                                | 68μF, 20%, 25V, Tantalum capacitor (2917)                                 | 1                                | AVX TCJE686M025R0050           |
| 17      | C36, C37                           | 22µF, 10%, 25V, X7R, Ceramic capacitor (1210)                             | 2                                | MURATA GRM32ER71E226KE15       |
| 18      | C41                                | 47nF, 10%, 50V, X7R, Ceramic capacitor (0402)                             | 1                                | TDK C1005X7R1H473K             |
| 19      | D2                                 | SCHOTTKY DIODE PIV=100V; IF=1A                                            | 1                                | DIODES INCORPORATED DFLS1100-7 |
| 20      | L1                                 | INDUCTOR, 6.8µH, 18.5A (11mm x 11mm), 8.9mΩ                               | 1                                | COILCRAFT XAL1010-682ME        |
| 21      | Q1                                 | N-CHANNEL POWER MOSFET (PowerPAK® SO-8) PD-(6.25W); I-(95A); V-(100V)     | 1                                | VISHAY SIR170DP-T1-RE3         |
| 22      | Q3, Q4                             | N-CHANNEL POWER MOSFET (PowerPAK®SO-8) PD-(6.25W); I-(60A); V-(80V)       | 2                                | VISHAY SIR826ADP-T1-GE3        |
| 23      | Q6                                 | N-CHANNEL SMALL-SIGNAL MOSFET (SOT-723) PD-(0.15W); I-(0.25A); V-(20V)    | 1                                | TOSHIBA SSM3K37MFV             |
|         | R1                                 | RESISTOR, 158KΩ, 1% (0603), 0.1W                                          | 1                                | VISHAY DALE CRCW0603158KFK     |
| 24 25   | R2                                 | RESISTOR, 13KΩ, 1% (0603), 0.1W                                           | 1                                | VISHAY DALE CRCW060313K0FK     |
| 27      | R4                                 | RESISTOR, 11KΩ, 1% (0402), 0.0625W                                        | 1                                | VISHAY DALE CRCW040211K0FK     |
| 28      | R5                                 | RESISTOR, 47KΩ, 1% (0402), 0.0625W                                        | 1                                | VISHAY DALE CRCW040247K0FK     |
| 29      | R6                                 | RESISTOR, 84.5KΩ, 1% (0402), 0.0625W                                      | 1                                | VISHAY DALE CRCW040284K5FK     |
| 30      | R7                                 | RESISTOR, 127KΩ, 1% (0402), 0.1W                                          | 1                                | PANASONIC ERJ-2RKF1273         |
| 31      | R8                                 | RESISTOR, 80.6KΩ, 1% (0402), 0.1W                                         | 1                                | PANASONIC ERJ-2RKF8062         |
| 32      | R9                                 | RESISTOR, 45.3KΩ, 1% (0402), 0.0625W                                      | 1                                | PANASONIC ERJ-2RKF4532         |
| 33      | R11, R15, R28                      | RESISTOR, 0Ω, 5% (0402), 0.0625W                                          | 3                                | YAGEO PHYCOMP RC0402JR-070RL   |
| 34      | R12                                | RESISTOR, 23.7KΩ, 1% (0402), 0.1W                                         | 1                                | PANASONIC ERJ-2RKF2372         |
| 35      | R13, R14                           | RESISTOR, 10KΩ, 1% (0402), 0.0625W                                        | 2                                | YAGEO PHYCOMP RC0402FR-0710KL  |
| 36      | R16                                | RESISTOR, 22.6KΩ, 1% (0402), 0.0625W                                      | 1                                | VISHAY DALE CRCW040222K6FK     |
| 37      | R17, R19                           | RESISTOR, 1Ω, 1% (0402), 0.0625W                                          |                                  | VISHAY DALE CRCW04021R00FK     |
| 38      | R21                                | RESISTOR, 4.99KΩ, 1% (0805), 0.125W                                       | 2 1                              | VISHAY DALE CRCW08054K99FK     |
| 39      | R22                                | RESISTOR, 576KΩ, 1% (0402), 0.0625W                                       | 1                                | VISHAY DALE CRCW0402576KFK     |
| 40      | R26                                | RESISTOR, 40.2Ω, 1% (0402), 0.0625W                                       | 1                                | VISHAY DALE CRCW040240R2FK     |
| 41      | R27                                | RESISTOR, 0.005Ω, 1% (2512), 1W                                           | 1                                | VISHAY DALE WSL25125L000F      |
| 42      | R30                                | RESISTOR, 137KΩ, 1% (0402), 0.0625W                                       | 1                                | PANASONIC ERJ-2RKF1373         |
| 43      | R31                                | RESISTOR, 9.09KΩ, 1% (0402), 0.0625W                                      | 1                                | VISHAY DALE CRCW04029K09FK     |
| 44      | U1                                 | SYNCHRONOUS STEP-DOWN LEAD-ACID BATTERY CHARGER CONTROLLER                | 1                                | MAX17702ATG+                   |
| 45      | DCIN, PGND, PGND2, VOUT            | (TQFN24-EP 4mm x 4mm) BANANA JACK (5.2mm DIA X 5.5mm LENGTH)              | 4                                | KEY STONE 575-4                |
| 46      | ILIM_EXT                           | TEST POINT, PIN DIA=0.1IN; TOTAL LENGTH=0.3IN;                            | 1                                | KEY STONE 5000                 |
| 47      | J1-J4                              | 3-pin header (0.1' centers)                                               | 4                                | SULLINS PEC03SAAN              |
| 48      | -                                  | SHUNTS                                                                    | 4                                | SULLINS STC02SYAN              |
| 49      | RT1                                | THERMISTOR, NTC, 47KOHM, 1%, 4108K (B25°C-85°C) THROUGH HOLE-RADIAL LEAD  | 1 (Separate Packout with EV kit) | MURATA NXFT15WB473FA2B150      |
| 50      | RT2                                | THERMISTOR PTC 5KOHM, 1%, THROUGH HOLE-RADIAL LEAD                        | 1 (Separate Packout with EV kit) | VISHAY TFPTL15L5001FL2         |
| 51      | C4-C8, C10, C32, C33, C45, C49-C51 | OPTIONAL: 4.7µF, 10%, 100V, X7R, Ceramic capacitor (1206)                 | 12                               | MURATA GRM31CZ72A475KE11       |
| 52      | L2                                 | OPTIONAL: INDUCTOR, 5.6µH, 12.6A (6.7mm x 6.5mm), 11.7mΩ                  | 1                                |                                |
| 53      | C46,                               | OPEN: CAPACITOR (0402)                                                    | 0                                | COILCRAFT XGL6060-562ME        |
|         | C30,                               |                                                                           |                                  |                                |
| 54      | C47 C35                            | OPEN: TANTALUM CAPACITOR (2917)                                           | 0                                |                                |
| 55      | C38, C44                           | OPEN: CAPACITOR (1210)                                                    | 0                                |                                |
| 56      | C54, C55                           | OPEN: CAPACITOR (1206)                                                    | 0                                |                                |
|         |                                    | OPEN: (7mmx8.5mm)                                                         |                                  |                                |
| 57 58   | C56 D1 D3                          | ALUMINUM-ELECTROLYTIC CAPACITOR OPEN: SOD-523F OPEN: SCHOTTKY DIODE (SMB) | 0 0 0                            |                                |
| 59 60   | Q2, Q5 R18, R20,                   | OPEN: PowerPAK®SO-8 OPEN: RESISTOR (0402)                                 | 0                                |                                |
| 61      | R10, R29                           |                                                                           | 0                                |                                |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| J1, J2, J3, J4         | 1-2                    |

## Evaluates: MAX17702 in 13.8V Lead-Acid Battery Charger Application

## MAX17702EVKITA# Evaluation Kit

## MAX17702EVKITA# Schematic

<!-- image -->

## MAX17702EVKITA# Evaluation Kit

## MAX17702EVKITA# PCB Layout

MAX17702EVKITA#-Top Silkscreen

<!-- image -->

MAX17702EVKITA#-Layer 2

<!-- image -->

## Evaluates: MAX17702 in 13.8V Lead-Acid Battery Charger Application

MAX17702EVKITA#-Top Layer

<!-- image -->

MAX17702EVKITA#-Layer 3

<!-- image -->

## MAX17702EVKITA# Evaluation Kit

## MAX17702EVKITA# PCB Layout (continued)

MAX17702EVKITA#-Bottom Layer

<!-- image -->

## Evaluates: MAX17702 in 13.8V Lead-Acid Battery Charger Application

MAX17702EVKITA#-Bottom Silkscreen

<!-- image -->

## MAX17702EVKITA# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                           | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 4/21            | Initial Release                                                                                                                                                                                       | -               |
|                 1 | 1/22            | Updated Features , Equipment Setup and Test Procedure , and Detailed Description sections, Typical Operating Characteristics 1, 2, 12, 13, 15, and 16, Bill of Materials, Schematic , and PCB Layouts | 1-6, 8-15       |
|                 2 | 2/22            | Updated Table 1 and Table 2                                                                                                                                                                           | 4               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

Evaluates: MAX17702 in 13.8V

## Lead-Acid Battery Charger Application