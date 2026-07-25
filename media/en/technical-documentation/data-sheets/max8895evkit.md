<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX8895 Evaluation Kit

## Evaluates:  MAX8895W/MAX8895X/MAX8895Y

## General Description

The MAX8895 evaluation kit (EV kit) is a fully assembled and tested PCB for evaluating the MAX8895\_ dual-path lithium-ion (Li+) battery chargers. The EV kit is powered from  a  USB  port  or  dedicated  charger  with  automatic detection of adapter type and USB enumeration capability.

The EV kit features LED indicators for charging ( CHG ), prequalification state ( PREQ ), power-ok ( UOK ), and fault condition  ( FLT ).  The  LEDs  can  be  powered  from  SYS, BAT+, or BUS through an external LDO. The EV kit also features  programmable  charging  currents  (JU1,  JU2), NTC thermistor  for  thermal  protection  (R11),  and  logic switches for the MAX8895\_ features (SW1, SW2).

By default, the EV kit is configured for the MAX8895Y, but can also be reconfigured for the MAX8895W/MAX8895X with  slight  board/hardware  modifications.  To  evaluate the MAX8895W/MAX8895X, request free samples of the MAX8895WEWA+/MAX8895XEWA+  when  ordering  the EV kit and see the Evaluating the MAX8895W/MAX8895X section.

Features

- S Micro-B USB Connector
- S Dual-Speed Operation (Full Speed: MAX8895Y; Low Speed: MAX8895W/MAX8895X)
- S Input Overvoltage Protection to 16V
- S Automatic Current Sharing Between Battery Charging and System
- S Smart Power Selector™ Operates with Discharged or No Battery
- S LED Indicators
- S Logic Switches
- S NTC Monitoring of Battery Temperature
- S Thermal Regulation Prevents Overheating

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8895EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                           |
|---------------|-------|-----------------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 10 F F Q 10%, 16V X5R ceramic capacitor (0805) TDK C2012X5R1C106KB Taiyo Yuden EMK212BJ106KG-T                        |
| C2, C3        |     2 | 10 F F Q 10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J106MB Taiyo Yuden JMK107BJ106MA-T                      |
| C4, C5        |     2 | 0.1 F F Q 10%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R1C104KT Taiyo Yuden LMK105BJ104KV Murata GRM155R60J104K |
| C6-C11        |     0 | Not installed, capacitors (0402)                                                                                      |
| D1-D4         |     4 | Red LEDs OSRAM LS L296-P2Q2-1-Z                                                                                       |
| JU1, JU2      |     2 | 5-pin headers Digi-Key S1012E-36-ND                                                                                   |

Smart Power Selector is a trademark of Maxim Integrated Products, Inc.

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maximintegrated.com.

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| JU3           |     1 | 4-pin header Digi-Key S1012E-36-ND                                          |
| JU4-JU8       |     0 | Not installed, 2-pin headers JU4, JU5, JU7 are PCB short; JU6, JU8 are open |
| P1            |     1 | Micro-B USB receptacle Hirose H11635CT-ND ZX62-AB-5PA(11)                   |
| R1-R4         |     4 | 270 I Q 5% resistors (0402), lead free                                      |
| R5            |     1 | 3.74k I Q 1% resistor (0402), lead free                                     |
| R6            |     1 | 1.87k I Q 1% resistor (0402), lead free                                     |
| R7, R13       |     2 | 30.1k I Q 1% resistors (0402), lead free                                    |
| R8            |     1 | 10k I Q 1% resistor (0402), lead free                                       |

## Evaluates:  MAX8895W/MAX8895X/MAX8895Y MAX8895 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                     |
|---------------|-------|---------------------------------------------------------------------------------|
| R9, R10       |     2 | 100k I Q 1% resistors (0402), lead free                                         |
| R11           |     1 | 100k I NTC thermistor ( β = 4100) Vishay NTCS0603E3104FXT                       |
| R12           |     1 | 1M I Q 5% resistor (0402), lead free                                            |
| R14           |     1 | 15k I Q 1% resistor (0402), lead free                                           |
| R15           |     1 | 243k I Q 1% resistor (0402), lead free                                          |
| R16           |     1 | 80.6k I Q 1% resistor (0402), lead free                                         |
| R17, R18      |     2 | 33.2 I Q 1% resistors (0402), lead free                                         |
| SW1           |     1 | 2-position surface-mount DIP SPDT switch (12 pins, 3 switches) Grayhill 78J03ST |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                             |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------------|
| SW2           |     1 | 2-position surface-mount DIP SPDT switch (24 pins, 6 switches) Grayhill 78J06ST                                         |
| U1            |     1 | Dual-path Li+ charger with USB enumeration (25 WLP) Maxim MAX8895YEWA+T, or Maxim MAX8895WEWA+T, or Maxim MAX8895XEWA+T |
| Y1            |     1 | 12MHz Q 2500ppm crystal Murata CSTCE1205G15L                                                                            |
| -             |     1 | USB A-to-micro B cable, 3ft (1m) Hirose ZX64-B-5S-1000-STDA Digi-Key H11609-ND Molex 68784-0001 Digi-Key WM17145-ND     |
| -             |     1 | PCB: MAX8895EVKIT+                                                                                                      |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEB                         |
|----------------------------------------|--------------|-----------------------------|
| Digi-Key Corp.                         | 800-344-4539 | www.digikey.com             |
| Grayhill Inc.                          | 708-354-2820 | www.grayhill.com            |
| Hirose Electric USA Inc.               | 805-522-7958 | www.hiroseusa.com           |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| OSRAM GmbH                             | 978-777-1900 | www.osram.com               |
| Taiyo Yuden                            | 408-573-4150 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX8895 when contacting these component suppliers.

## Evaluates:  MAX8895W/MAX8895X/MAX8895Y MAX8895 Evaluation Kit

## Quick Start

## Recommended Equipment

- USB	A-to-micro	B	cable	(included	with	the	EV	kit)
- Three	digital	multimeters	(DMM1,	DMM2,	DMM3)
- 10A	ammeter
- Electronic	load
- Single-cell	Li+	battery	(not	fully	charged)
- User-supplied	PC	with	a	spare	USB	port

## Procedure (MAX8895Y Evaluation)

The  MAX8895  EV  kit  is  a  fully  assembled  and  tested surface-mount board. Follow the steps below and Figure 3  to  set  up  and  verify  the  MAX8895Y  and  board operation:

- 1) Verify that there are shorts across jumpers JU5 and JU7.
- 2) Verify that jumpers JU6 and JU8 are open.
- 3) Verify  that  the  ISET,  IDN,  STDBY,  RWU,  and CEN switches are set to the left.
- 4) Verify that the CT and KB\_TM switches are set to the right.
- 5) Verify  that  shunts  are  installed  between  the  center pin and pin 2 of jumpers JU1 and JU2.
- 6) Verify that a shunt is installed between pins 1-3 for jumper JU3.
- 7) Observe correct Li+ cell polarity. Connect a singlecell Li+ battery and series 10A ammeter. The positive lead of the ammeter must connect to BAT+ and the negative lead to the positive terminal of the Li+ battery.
- 8) Connect a digital multimeter (DMM1) across the Li+ battery.  Connect  the  positive  terminal  of  DMM1  to the positive terminal of the Li+ battery. Connect the negative terminal of DMM1 to the negative terminal of the Li+ battery and note the battery voltage.
- 9) Connect a digital multimeter (DMM2) from INT\_3V3 to BUS\_DGND.
- 10)  Connect  a  digital  multimeter  (DMM3)  from  SYS  to SYS\_DGND.
- 11)  Preset  the  electronic  load  for  400mA  and  turn  off. Connect the positive lead of the electronic load to SYS and the negative lead to SYS\_DGND.
- 12)  Plug in a USB cable from P1 to the PC with a 500mA USB port.
- 13)  Verify that LED D1 is on, indicating that UOK is low.
- 14)  Verify that LED D2 is on, indicating that the charger is  on.  If  VBAT+  &lt;  2.5V,  the  charger  starts  in  precharge  mode.  If  VBAT+  ≥  2.5V,  the  charger  starts up  in  fast-charge  mode.  If  in  precharge  mode, verify that the ammeter reads 80mA. If in fast-charge mode, verify that the ammeter reads 500mA due to the USB current limit.
- 15)  Verify  that  the  voltage  read  by  DMM2  is  approximately 3.3V.
- 16)  Verify that the voltage read by DMM3 is (DMM1 + 140mV) or 3.4V, whichever is greater.
- 17)  Turn on the electronic load and verify that the voltage  read  by  DMM3  is  (DMM1  +  140mV)  or  3.4V, whichever is greater.
- 18)  Turn  off  the  electronic  load  and  wait  until  DMM1 reads 4.2V, indicating a fully charged battery.
- 19)  Verify that LED D2 is off and push the CEN switch to the right. Remove the battery.
- 20)  Verify that DMM3 is approximately 4.3V.
- 21)  Remove the USB cable from P1.
- 22)  Disconnect all test leads from the EV kit.

## Procedure (MAX8895W/MAX8895X Evaluation)

Follow the steps below and Figure 2 to set up and verify the MAX8895W/MAX8895X and board operation:

- 1) Verify that there are shorts across jumpers JU6 and JU8.
- 2) Verify that jumpers JU5 and JU7 are open.
- 3) Verify  that  the  ISET,  IDN,  STDBY, ENU\_EN ,  RWU, and CEN switches  are  set  to  the  left.  If  using  the MAX8895W,  verify  that  switch  No.  4  in  SW2  is pushed to the right to set IBUS\_DEF.
- 4) Verify  that  the  CT,  SUS\_EN,  and  KB\_TM  switches are set to the right.
- 5) Verify  that  shunts  are  installed  between  the  center pin and pin 2 of jumpers JU1 and JU2.
- 6) Verify that a shunt is installed between pins 1-3 for jumper JU3.
- 7) Observe correct Li+ cell polarity. Connect a singlecell  Li+  battery  and  series  10A  ammeter.  The positive lead of the ammeter must connect to BAT+ and the negative lead to the positive terminal of the Li+ battery.

## MAX8895 Evaluation Kit

## Evaluates:  MAX8895W/MAX8895X/MAX8895Y

- 8) Connect a digital multimeter (DMM1) across the Li+ battery.  Connect  the  positive  terminal  of  DMM1  to the positive terminal of the Li+ battery. Connect the negative terminal of DMM1 to the negative terminal of the Li+ battery and note the battery voltage.
- 9) Connect a digital multimeter (DMM2) from INT\_3V3 to BUS\_DGND.
- 10)  Connect  a  digital  multimeter  (DMM3)  from  SYS  to SYS\_DGND.
- 11)  Preset  the  electronic  load  for  400mA  and  turn  off. Connect the positive lead of the electronic load to SYS and the negative lead to SYS\_DGND.
- 12)  Plug  in  the  USB  cable  from  P1  to  the  PC  with  a 500mA USB port.
- 13)  Verify that LED D1 is on, indicating that UOK is low.
- 14)  Verify that LED D2 is on, indicating that the charger is on. If VBAT+ &lt; 2.5V, the charger starts in precharge mode. If VBAT+ ≥ 2.5V, the charger starts up in fastcharge mode. If in precharge mode, verify that the

## Table 1. Jumper Settings (JU1, JU2, JU3)

| JUMPER   | EV KIT DEFAULT SETTINGS        | FUNCTION                                                                                                                                                                                                                                                                                            |
|----------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Center pin to pin labeled 0.8A | JU1 selects the maximum fast-charge current. Connect the center pin to the corresponding pins labeled 0.1A, 0.3A, 0.8A, or 1.6A to select the maximum fast-charge current.                                                                                                                          |
| JU2      | Center pin to pin labeled 80mA | JU2 selects the charge termination current threshold. Connect the center pin to the corresponding pins labeled 10mA, 30mA, 80mA, or 160mA to select the termination current.                                                                                                                        |
| JU3      | 1-3                            | External LDO power-supply selector. Connect pin 1 to pins 2, 3, or 4 to select the input power supply for the external LDO. Pin 2 selects SYS, pin 3 selects BUS, and pin 4 selects BAT+. Note that when a jumper is installed between pins 1-3, do not exceed the 6V voltage rating for C2 and U2. |

## Table 2. Switch SW1 Settings

| SWITCH NO.   | LEFT                                                                                                                                                                   | RIGHT                                                                                    |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| 1: ISET      | ISET is connected to the center pin of jumper JU1. Use JU1 to select the maximum fast-charge current.                                                                  | ISET is connected to INT_3V3 and the fast-charge current is set to the maximum 600mA.    |
| 2: IDN       | IDN is connected to the center pin of jumper JU2. Use JU2 to select the termination current.                                                                           | IDN is connected to INT_3V3 and the termination cur- rent is set to the maximum 60mA.    |
| 3: CT        | CT is connected to AGND and the default timers are used. The default timers are 24min for prequalifica- tion, 144min for fast charge, and 6min for maintenance charge. | CT is connected to the C5 capacitor and fault timers are based on the capacitance of C5. |

- ammeter reads 80mA. If in fast-charge mode, verify that  the  ammeter  reads  500mA.  When  using  the MAX8895W, LED D2 indicates CHG\_TYPE.
- 15)  Verify  that  the  voltage  read  by  DMM2  is  approximately 3.3V.
- 16)  Verify that the voltage read by DMM3 is (DMM1 + 140mV) or 3.4V, whichever is greater
- 17)  Turn on the electronic load and verify that the voltage  read  by  DMM3  is  (DMM1  +  140mV)  or  3.4V, whichever is greater.
- 18)  Turn  off  the  electronic  load  and  wait  until  DMM1 reads 4.2V, indicating a fully charged battery.
- 19)  Verify  that  the  ammeter  reads  0mA  and  push  the CEN switch to the right. Remove the battery.
- 20)  Verify that DMM3 is approximately 4.3V.
- 21)  Remove the USB cable from P1.
- 22)  Disconnect all test leads from the EV kit.

## Evaluates:  MAX8895W/MAX8895X/MAX8895Y MAX8895 Evaluation Kit

Table 3. Switch SW2 Settings

| SWITCH NO.                          | LEFT                                                                                                                                     | RIGHT                                                                                                                                                |
|-------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1: STDBY                            | STDBY is connected to DGND and the IC is in automatic detect mode.                                                                       | STDBY is connected to INT_3V3 and the IC is in suspend mode, regardless of external conditions.                                                      |
| 2: ENU_EN (MAX8895W/ MAX8895X only) | ENU_EN is connected to DGND and the IC automatically performs enumeration. Note: The MAX8895Y always performs enumeration automatically. | ENU_EN is connected to INT_3V3 and the input current is limited to 100mA without performing enumeration.                                             |
| 3: SUS_EN (MAX8895W/ MAX8895X only) | SUS_EN is connected to DGND and the IC disables the automatic suspend-mode detection.                                                    | SUS_EN is connected to INT_3V3 and the auto- matic detection of suspend mode is enabled. Note: The MAX8895Y always starts in automatic suspend mode. |
| 4: RWU (MAX8895X/ MAX8895Y only)    | RWU is connected to DGND and remote wake-up is supported.                                                                                | RWU is connected to INT_3V3 and remote wake- up is not supported.                                                                                    |
| 4: IBUS_DEF (MAX8895W only)         | IBUS_DEF is connected to DGND and the input limit unit is set to 100mA.                                                                  | IBUS_DEF is connected to INT_3V3 and the input limit is set to 500mA.                                                                                |
| 5: CEN                              | CEN is connected to DGND and charging is enabled when a valid source is present on BUS.                                                  | CEN is connected to INT_3V3 and charging is disabled.                                                                                                |
| 6: KB_TM                            | KB_TM is connected to AGND for normal operation.                                                                                         | KB_TM is connected to INT_3V3 and is only used during USB certification.                                                                             |

## Detailed Description of Hardware

The MAX8895 EV kit evaluates the MAX8895\_ integrated single-cell  Li+  chargers  with  USB  enumeration  capability.  The  EV  kit  negotiates  charging  current  from  the USB  host  or  hub,  without  processor  intervention.  The MAX8895\_  also  automatically  detects  for  a  dedicated charger or USB charger and sets the input current limit accordingly.  The  maximum battery charge current can be set up to 1.6A through jumper JU1. The USB input power not used by the system charges the battery.

## USB Interface

An integrated USB peripheral controller provides automatic enumeration for full-speed (MAX8895Y) and lowspeed  (MAX8895W/MAX8895X) modes. The  USB  controller is in charge of:

- Executing	 adapter-detection	 sequence:	 Detects what type of adapter is externally connected to the USB receptacle (P1) and sets the input current limit accordingly.
- Whether	the	USB	receptacle	(P1)	is	attached	to	a USB  charger  (host  or  hub)  or  to  a  USB  2.0  (host or  hub).  It  enumerates  as  an  HID  device  and negotiates  the  maximum  charging  current  level (from BUS).

The MAX8895W/MAX8895X operate in low-speed mode using an internal 6MHz oscillator and does not require an external crystal to be USB compliant. The MAX8895Y operates  in  full-speed  mode  and  requires  an  external 12MHz crystal (Y1, Figure 4).

According  to  the  USB  2.0  specification,  a  low-speed device  is  not  allowed  to  use  a  standard  USB  type-B connector, which is why the MAX8895Y is also able to operate  in  full-speed  mode.  This  makes  it  possible  to use a custom or captive cable for low-speed mode using the MAX8895W/MAX8895X and still be USB compliant. While operating in full-speed mode, using the MAX8895Y allows use of a standard USB type-B connector.

## Adapter Detection

When an adapter is present on the USB receptacle (P1), the IC examines the external device to identify the type of adapter connected.

The possible adapter types are:

- Dedicated	charger
- USB	charger	(host	or	hub)
- USB	2.0	(host	or	hub)	low	power
- USB	2.0	(host	or	hub)	high	power

## MAX8895 Evaluation Kit

## Evaluates:  MAX8895W/MAX8895X/MAX8895Y

## Table 4. Adapter Types

Figure 1. Smart Power Selector

| ADAPTER TYPE       | OUTPUT VOLTAGE                                                  | OUTPUT CURRENT                                                                                   |
|--------------------|-----------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| Dedicated charger  | 4.75V to 5.25V at I LOAD < 500mA 2V to 5.25V for I LOAD R 500mA | 500mA to 1.8A                                                                                    |
| USB charger        | 4.75V to 5.25V at I LOAD < 500mA 0 to 5.25V for I LOAD R 500mA  | 500mA to 900mA (low speed, full speed, and high speed), 500mA to 1.5A (low speed and full speed) |
| USB 2.0 low power  | 4.25V to 5.25V                                                  | 100mA (max)                                                                                      |
| USB 2.0 high power | 4.75V to 5.25V                                                  | 500mA (max)                                                                                      |

<!-- image -->

Each  of  these  different  devices  has  different  current capability, as shown in Table 4.

When an adapter is connected, the IC performs a series of tests to identify the type of device connected. Refer to the flow charts in the MAX8895W/MAX8895X/MAX8895Y IC data sheet for more details.

## Smart Power Selector (SPS)

The Smart Power Selector seamlessly distributes power between  the  external  adapter  input  (BUS),  the  battery (BAT+), and the system load (SYS). Basic functions of the Smart Power Selector include:

- 1) With  both  an  external  adapter  and  battery  connected:
- a. When  the  system  load  requirements  are  less than the input current limit, the battery is charged with residual power from the input.
- b. When the system load requirements exceed the input current limit, the battery supplies supplemental current to the load.
- 2) When the battery is connected and there is no external  power  input,  the  system  is  powered  from  the battery.
- 3) When  an  external  power  input  is  connected  and there is no battery, the system is powered from BUS.

If the junction temperature starts to get too hot (+110°C, typ), the charging rate is reduced. If this is not sufficient to cool down the MAX8895\_, then the input current limit is reduced.

## Regulation Threshold

The  MAX8895X/MAX8895Y  always  regulate  SYS  to 140mV  (typ)  above  BAT+  with  a  minimum  voltage  of 3.4V, regardless of what device is connected. The 3.4V minimum voltage regulation reduces the ripple on SYS during peak load conditions where the input current limit is tripped.

## Evaluates:  MAX8895W/MAX8895X/MAX8895Y MAX8895 Evaluation Kit

## LED Indicators

## UOK Output

UOK is an open-drain output that pulls low when the BUS input has valid power.

The UOK monitor  has  several  different  thresholds depending on the type of adapter detected. The different thresholds are shown in Table 5.

## FLT Output and Charge Timer

FLT is an active-low, open-drain output that is driven low during a battery fault or failed enumeration. If the IC is in the fault state, the corresponding LED (D4) is turned on. The fault state occurs when either the prequalification or fast-charge timer expires. The prequalification and fastcharge fault timers are set by C5:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## PREQ Output (MAX8895X/MAX8895Y Only)

PREQ is  an active-low, open-drain output that is driven low when the charger is in the prequalification state. If the IC is in the prequalification state, the corresponding LED (D3) is turned on.

## CHG Output (MAX8895X/MAX8895Y Only)

CHG is  an  active-low,  open-drain  output  that  is  driven low during charging. If the charger is in precharge, fastcharge, or top-off, the corresponding LED (D2) is turned on. When charge current falls below the charge termination threshold, the charger is in voltage mode and D2 is turned off.

## Table 5. UOK Monitor Thresholds

| ADAPTER                              | UVLO                       | OVLO   |
|--------------------------------------|----------------------------|--------|
| Initial BUS detection                | 4.0V (typ) rising          | 6.9V   |
| For USB 2.0 low power                | 3.9V (typ) falling         | 6.9V   |
| For USB 2.0 high power               | 4.1V (typ) falling         | 6.9V   |
| For dedicated charger to USB charger | V SYS + 50mV (typ) falling | 6.9V   |

## Thermistor Input (THM)

The  THM  input  connects  to  an  external negative temperature  coefficient  (NTC)  thermistor  to  monitor battery or system temperature. Charging is suspended when  the  thermistor  temperature  is  out  of  range.  The charge timers are suspended and hold their state, but no fault is indicated. When the thermistor comes back into range, charging resumes and the charge timer continues from  where  it  was  previously.  Connect  THM  to  AGND to  disable  the  thermistor  monitoring  function.  For  more details,  refer  to  the  MAX8895W/MAX8895X/MAX8895Y IC data sheet.

## Thermal Shutdown

Thermal  shutdown  limits  total  power  dissipation  in  the MAX8895X/MAX8895Y. When the junction  temperature exceeds +160°C (typ), the device turns off, allowing the IC to cool. The IC turns on and begins soft-start after the junction temperature cools by +20°C (typ). This results in  a  pulsed  charge  current  during  continuous  thermaloverload conditions.

## External Crystal/Ceramic Resonator (MAX8895Y)

XIN  and  XOUT  are  used  to  interface  to  an  external 12MHz crystal (Y1). The Y1 crystal contains internal load capacitors; therefore, C6 and C7 are not used. If another crystal is selected and requires load capacitors, refer to the MAX8895W/MAX8895X/MAX8895Y IC data sheet.

## External Clock (MAX8895Y)

The MAX8895Y accepts an external clock input at XIN. Remove  the  preinstalled  crystal  (Y1,  Figure  4)  before driving  an  external  clock  signal  into  XIN.  The  external  clock  can  either  be  a  digital  level  square  wave  or sinusoidal, which can be directly coupled to XIN without the need for additional components. If the peaks of the reference  clock  are  above  VINT\_3V3  or  below  ground, the clock signal must be driven through a DC-blocking capacitor (~33pF) connected to XIN.

The  external  clock  source  can  be  enabled  using  the UOK or INT\_3V3 signals depending on whether the clock source is active-low or active-high enabled.

If the INT\_3V3 rail is used, ensure that no significant load is  taken  from  this  output  since  this  affects  the  performance of the MAX8895Y. Because the INT\_3V3 LDO's

## Evaluates:  MAX8895W/MAX8895X/MAX8895Y MAX8895 Evaluation Kit

input  is  sourced  from  VBUS,  significant  loading  could also cause violation of the USB specifications.

## Evaluating the MAX8895W

To evaluate the MAX8895W version, request a sample of  the  MAX8895WEWA+  when  ordering  the  EV  kit.  To modify the EV kit for evaluation of the MAX8895W, follow the steps below:

- 1) Remove U1 and replace with the MAX8895WEWA+.
- 2) Cut the PCB traces between the two half circles on jumpers JU5 and JU7.
- 3) Solder the two half circles together on jumpers JU6 and JU8.

Note  that  bumps  C1  and  D1  are ENU\_EN (automatic enumeration enable) and SUS\_EN (automatic suspendmode  detection  enable).  The  MAX8895W  operates  in USB low speed and does not require an external crystal.

- 4) Bump B2 is CHG\_TYPE. When using the MAX8895W, the EV kit CHG label and LED D2 are indeications of CHG\_TYPE. When LED D2 is on, the input current into the IC from a USB 2.0 host is 100mA. When LED D2 is off,  the  input  current  can  be  greater  than  or equal to 500mA.
- 5) Bump C2 is DET\_DONE .  When using the MAX8895W, the PREQ label  and  LED  D3  are  indications  of DET\_DONE . When LED D3 is on, this is an indication

that  adapter  detection  is  complete.  When  LED  D3 is off, this is an indication that the IC is in suspend mode.

- 6) Bump D2 is IBUS\_DEF. When using the MAX8895W, the  RWU toggle switch (No. 4, Table 3) in SW2 is used to control the logic state of IBUS\_DEF. When switch No. 4 is pushed to the left, the input current limit is set to 100mA. When switch No. 4 is pushed to the right, the input current limit is set to 500mA,

For  more  details,  refer  to  the  MAX8895W/MAX8895X/ MAX8895Y IC data sheet.

## Evaluating the MAX8895X

To  evaluate  the  MAX8895X  version,  request  a  sample of  the  MAX8895XEWA+  when  ordering  the  EV  kit.  To modify the EV kit for evaluation of the MAX8895X, follow the steps below:

- 1) Remove U1 and replace with the MAX8895XEWA+.
- 2) Cut the PCB traces between the two half circles on jumpers JU5 and JU7.
- 3) Solder the two half circles together on jumpers JU6 and JU8.

Note  that  bumps  C1  and  D1  are ENU\_EN (automatic enumeration enable) and SUS\_EN (automatic suspendmode  detection  enable).  The  MAX8895X  operates  in USB low speed and does not require an external crystal.

## Evaluates:  MAX8895W/MAX8895X/MAX8895Y MAX8895 Evaluation Kit

Figure 2. MAX8895 EV Kit Schematic (MAX8895W/MAX8895X Evaluation)

<!-- image -->

## Evaluates:  MAX8895W/MAX8895X/MAX8895Y MAX8895 Evaluation Kit

Figure 3. MAX8895 EV Kit Schematic (MAX8895Y Evaluation)

<!-- image -->

## Evaluates:  MAX8895W/MAX8895X/MAX8895Y MAX8895 Evaluation Kit

Figure 4. MAX8895 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 5. MAX8895 EV Kit PCB Layout-Component Side

<!-- image -->

## Evaluates:  MAX8895W/MAX8895X/MAX8895Y MAX8895 Evaluation Kit

Figure 6. MAX8895 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 7. MAX8895 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

## Evaluates:  MAX8895W/MAX8895X/MAX8895Y MAX8895 Evaluation Kit

Figure 8. MAX8895 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 9. MAX8895 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## MAX8895 Evaluation Kit

## Evaluates:  MAX8895W/MAX8895X/MAX8895Y

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                      | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------|-----------------|
|                 0 | 6/10            | Initial release                                  | -               |
|                 1 | 12/10           | Added new part (MAX8895W) and associated details | 1-14            |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.