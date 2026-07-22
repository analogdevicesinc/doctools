<!-- lastmod 2022-08-02 -->
## MAX20030 Evaluation Kit

## General Description

The MAX20030 evaluation kit (EV kit) is a fully assembled and  tested  application  circuit  for  the  MAX20030  highvoltage,  dual-synchronous  step-down  controller  IC  with preboost and an internal LDO. The EV kit is set up to provide 5V and 3.3V from an input voltage ranging from 3.5V to 36V. The preboost circuit maintains the 10V supply rail for input voltages below 10V. Each buck rail can deliver up  to  5A  load  current.  Various  jumpers  are  provided  to help evaluate features of the IC. The EV kit can also be used to evaluate the pin-compatible MAX20031 with IC replacement of U1.

## Benefits and Features

- Dual-Synchronous Step-Down Controllers Operate at 180° Out-of-Phase to Reduce Switching Noise
- Preboost Controller Maintains Operation with Low Supply Voltage
- 3.5V to 36V Wide Input Supply Range
- Buck Output Voltage: 5V and 3.3V Fixed or Adjustable Between 1V and 10V
- 5V, 200mA LDO Output
- Current-Mode Controllers with Forced-PWM and Skip Modes
- Resistor-Programmable Frequency Between 1MHz and 2.2MHz
- Frequency Synchronization Input
- Independent Enable Inputs
- Voltage-Monitoring PGOOD\_ Outputs
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX20030/MAX20031

## Quick Start

## Required Equipment

- MAX20030 EV kit
- 3.5V to 36V, 15A power supply capable of providing 15A at 3V input
- Two voltmeters
- Two electronic loads capable of sinking 5A each

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  all  jumpers  are  in  their  default  positions according to Table 1.
- 2) Connect  the  positive  and  negative  terminals  of  the power  supply  to  the  VBATF  and  PGND  test  pads, respectively.
- 3) Connect  the  positive  terminal  of  the  first  electronic load  to  the  VOUT1  test  pad.  Connect  the  ground terminal  of  the  electronic  load  to  the  corresponding PGND test pad.
- 4) Connect the positive terminal of the second electronic load to the VOUT2 test pad. Connect the ground terminal of the electronic load to the corresponding PGND test pad.
- 5) Set the power-supply voltage to 14V.
- 6) Turn on the power supply.
- 7) Enable the electronic loads.
- 8) Verify that VOUT1 is approximately 5V.
- 9) Verify that VOUT2 is approximately 3.3V.
- 10) Verify that the buck 1 and buck 2 switching frequency is approximately 2.0MHz.

<!-- image -->

## MAX20030 Evaluation Kit

## Detailed Description

The  MAX20030  EV  kit,  which  evaluates  the  MAX20030 high-voltage,  dual-synchronous  step-down  controller  with a  boost  controller  and  a  200mA  LDO,  can  supply  up  to four  rails  in  a  system.  The  EV  kit  includes  two  currentmode  buck  controllers  that  are  fixed  to  5V  and  3.3V,  or programmable  from  1V  to  10V  with  external  resistordividers. The current capability is ~5A per rail. Both outputs are  current  limited  and  can  be  controlled  independently through  their  respective  enable  inputs  EN\_.  The  EV  kit includes an external boost controller that enables full output  functionality  during  undervoltage  events.  The  boost controller  is  designed  to  support  full  load  on  buck  controllers  down to 2V input. The EV kit also includes a 5V, 200mA linear regulator that is low I Q  and can be used to power always-on systems.

## Switching Frequency/External Synchronization

The  EV  kit  switching  frequency  can  be  adjusted  from 220kHz to 2.2MHz by changing the FOSC resistor (R75). The EV kit can also be synchronized to an external clock by  connecting  the  external  clock  signal  to  the  FSYNC test  point.  Refer  to  the Switching  Frequency/External Synchronization section in the MAX20030 IC data sheet for more information.

## Buck Output Monitoring (PGOOD\_)

The  EV  kit  provides  two  power-good  output  test  points (PGOOD1  and  PGOOD2)  to  monitor  the  status  of  the two  buck  outputs  (OUT1  and  OUT2).  Each  PGOOD\_ goes high impedance when the corresponding regulator output voltage is in regulation. Each PGOOD\_ goes low when  the  corresponding  regulator  output  voltage  drops below 15% (typ) or rises above 10% (typ) of its nominal regulated voltage.

To  obtain  a  logic  signal,  pull  up  PGOOD\_  to  V BIAS   by installing shunts on JU1 and JU2. See Table 1 for default jumper settings.

## EXTVCC Switchover Comparator

The internal linear regulator can be bypassed by connecting an external supply (3V to 5.2V) or the output of one of the buck converters to EXTVCC. BIAS internally switches to EXTVCC and the internal linear regulator turns off. If V EXTVCC drops below V TH,EXTVCC  = 3V (min), the internal regulator enables and switches back to BIAS. See Table 2 for shunt positions.

## Table 1. Default Jumper Settings

| JUMPER        | DEFAULT SHUNT POSITION   | FUNCTIONS                                            |
|---------------|--------------------------|------------------------------------------------------|
| JU1           | 1-2                      | Forced-PWM mode                                      |
| JU2, JU6      | Open, Installed          | Boost disabled (active- high version IC used)        |
| JU3           | 1-4                      | OUT1 connected to EXTVCC                             |
| JU4, JU5, JU7 | 1-2                      | Buck controllers and LDO enabled                     |
| JU8, JU9      | Installed                | PGOOD_ pulls up to V BIAS when OUT_ is in regulation |
| JU10          | Installed                | Boost on-indicator enabled                           |
| JU11          | 2-3                      | Spread spectrum disabled                             |

## Table 2. EXTVCC (JU3)

| SHUNT POSITION   | EXTVCC PIN         | BIAS                                                  |
|------------------|--------------------|-------------------------------------------------------|
| 1-2              | Connected to VOUT2 | Switches to EXTVCC. Internal regulator disabled.      |
| 1-3              | Connected to PGND  | Internal regulator en- abled to generate BIAS supply. |
| 1-4*             | Connected to VOUT1 | Switches to EXTVCC. Internal regulator disabled.      |

│

## MAX20030 Evaluation Kit

## Mode of Operation

The  EV  kit  features  jumper  JU1  to  configure  the  mode switch-control input. Drive FSYNC high (pins 1-2 of JU1) to  enable  forced-PWM  mode.  Drive  FSYNC  low  (pins 2-3 of JU1) to enable skip mode under light loads. See Table 3 for default jumper settings.

## Enable Control

The  EV  kit  features  jumpers  JU4,  JU5,  JU7  and  JU2, JU6 to independently control the digital enable inputs of the buck 1 controller, the buck 2 controller, LDO, and the boost  controller,  respectively.  Connect  the  active-high input EN\_ to VIN (pins 1-2) to enable the corresponding controller.  Connect the EN\_ to ground (pins 2-3) to disable the corresponding controller. See Table 4 for default jumper settings..

## Setting Output Voltage in Buck Converters

To  externally  adjust  output  voltage  OUT1  between  1V and 10V, remove resistor R8. Connect a resistive divider from  output  OUT1  to  FB1  to AGND.  Place  appropriate resistors in positions R5 and R6 according to the following equation:

<!-- formula-not-decoded -->

where V FB1  = 1V (typ).

To  externally  adjust  output  voltage  OUT2  between  1V and 10V, remove resistor R28. Connect a resistive divider from  output  OUT2  to  FB2  to  GND.  Place  appropriate resistors  in  positions  R26  and  R27,  according  to  the following equation:

<!-- formula-not-decoded -->

where V FB2  = 1V (typ).

Table 3. Mode of Operation (JU1)

| SHUNT POSITION   | FSYNC PIN         | MODE            |
|------------------|-------------------|-----------------|
| 1-2*             | Connected to BIAS | Forced-PWM mode |
| 2-3              | Connected to GND  | Skip mode       |

## Table 4. Enable Control (JU2 , JU4 -JU7)

| SHUNT POSITION   | EN_ PIN         | CONTROLLER_                           |
|------------------|-----------------|---------------------------------------|
| JU2, JU6*        | Open, Installed | EN3 active-low version boost enabled  |
| JU2, JU6         | Installed, Open | EN3 active-high version boost enabled |
| JU4, JU5, JU7*   | 1-2             | Buck controllers and LDO enabled      |
| JU4, JU5, JU7    | 2-3             | Buck controllers and LDO disabled     |

## Boost Controller

The EV kit  includes  a  synchronous  current-mode  boost controller with adjustable output. The boost controller output is called V IN  since it powers the input supply pin of the device. This boost controller can be used independently, but is ideally suited for applications that need to stay fully functional during input-voltage dropouts typical for automotive cold-crank or start-stop.

To externally adjust the boost output voltage (V IN ), place appropriate resistors in positions R18 and R19 according to the following equation:

<!-- formula-not-decoded -->

where V FB3  = 1.005V (typ).

## Evaluating with the MAX20030 EV Kit

The  MAX20030  EV  kit  can  be  modified  to  operate  at a  400kHz  switching  frequency,  which  would  require  a change in the following components:

- 1) Replace R30 (R FOSC ) with 80.6kΩ to achieve 400kHz switching frequency.
- 2) Replace the preboost inductor (L3) with a 2.2µH, 15A inductor.
- 3) Replace the buck inductors (L1, L2) with a 6.8µH, 7A inductor.

Contact Maxim Applications for any questions.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20030EVKIT# | EV Kit |

# Denotes RoHS compliant.

│

## MAX20030 EV Kit BOM

| PART                                 | QTY   | DESCRIPTION                                                  | MANUFACTURER PART NUMBER         |
|--------------------------------------|-------|--------------------------------------------------------------|----------------------------------|
| C1, C14, C21, C24, C31               | 5     | 0.1uF ±10%, 50V X7R ceramic capacitors (0402)                | TDK CGA2B3X7R1H104K050BB         |
| C2, C5, C8                           | -     | Not installed, capacitor (0402)                              |                                  |
| C3, C13, C22-C23, C25, C28, C29, C40 | 8     | 4.7uF ±10%, 50V X7R ceramic capacitor (1210)                 | Murata GCM32ER71H475KA55L        |
| C6-C7, C34-C35                       | 4     | 47uF ±10%, 10V X7R ceramic capacitor (1210)                  | Murata GRM32ER71A476K            |
| C9, C36                              | 2     | 22pF ±5% 16V C0G ceramic capacitor (0402)                    | Taiyo Yuden UMK105CG220JV-F      |
| C10, C37                             | 2     | 4700pF ±10% 50V X7R ceramic capacitor (0402)                 | Murata GRM155R71H472K            |
| C11                                  | 1     | 6.8uF ±10%, 16V X7R ceramic capacitor (1206)                 | TDK C3216X7R1C685K               |
| C12                                  | 1     | 2.2uF ±10%, 10V X7R ceramic capacitor (0603)                 | Murata GRM188R71A225K            |
| C15                                  | 1     | 100pF ±10% 50V C0G ceramic capacitor (0402)                  | TDK CGA2BC0G1H101J050BA          |
| C20                                  | 1     | 47uF, 50V aluminum electrolytic capacitor (6.2mm x 8mm)      | Panasonic EEE-FK1H470P           |
| C27                                  | 1     | 100uF, 50V aluminum electrolytic capacitor (10.0mm x 10.2mm) | Panasonic EEHZA1H101P            |
| C32                                  | 1     | 4.7uF ±10%, 16V X7R ceramic capacitor (0805)                 | TDK CGA4J3X7R1C475K125AB         |
| C38                                  | 1     | 3900pF ±10% 50V X7R ceramic capacitor (0402)                 | Murata GRM155R71H392KA01D        |
| C39                                  | 1     | 2pF ±10% 50V C0G ceramic capacitor (0402)                    | TDK CGA2B2C0G1H020C050BA         |
| D1-D3                                | 3     | 200mA, 30V diodes (SOT-323)                                  | Fairchild BAT54HT1G              |
| JU1, JU4, JU5, JU7, JU11             | 5     | 3-pin header (CUT TO FIT)                                    | SULLINS PEC36SAAN                |
| JU2, JU6, JU8-JU10                   | 4     | 2-pin header (CUT TO FIT)                                    | SULLINS PEC36SAAN                |
| JU3                                  | 1     | 4-pin header (CUT TO FIT)                                    | SULLINS PEC36SAAN                |
| L1, L2                               | 2     | 2.2uH Power Inductor (R=13.2mOhms, I=7.2A, 5.2mm x 5.48mm)   | Coilcraft XAL5030-222ME          |
| L3                                   | 1     | 0.47uH Power Inductor (R=4mOhms, I=17.5A, 6.47mm x 6.86mm)   | Vishay IHLP2525CZERR47M01        |
| Q1-Q4                                | 4     | 40V, 7.6A N-channel MOSFET (8-SOIC)                          | Fairchild FDMC8015L              |
| Q5, Q6                               | 2     | 60V, 40A N-channel MOSFET (PowerPAK 1212-8)                  | Vishay SIS862DN-T1-GE3           |
| R1, R2, R9, R10, R11, R23            | 2     | 0Ω resistor (0402)                                           | Any                              |
| R3, R8, R12, R14-R15, R17, R28, R38  | 8     | 0Ω resistor (0402)                                           | Any                              |
| R4, R13                              | 2     | 15mΩ, ½Wsense resistor (1206)                                | IRC LRF1206LF-01-R015-F          |
| R7                                   | 1     | 22.1kΩ ±1% resistors (0402)                                  | Any                              |
| R16                                  | 1     | 5mΩ, 1W sense resistor (1206)                                | TT Electronics LRMAM1206-R005FT5 |
| R18                                  | 1     | 909kΩ ±1% resistors (0402)                                   | Any                              |
| R19, R31                             | 2     | 100kΩ ±1% resistors (0402)                                   | Any                              |
| R24, R34                             | 2     | 1.0MΩ ±1% resistors (0402)                                   | Any                              |
| R25                                  | 1     | 332kΩ ±1% resistors (0402)                                   | Any                              |
| R29                                  | 1     | 15.0kΩ ±1% resistors (0402)                                  | Any                              |
| R30                                  | 1     | 12.0kΩ ±1% resistors (0402)                                  | Any                              |
| R32                                  | 1     | 49.9kΩ ±1% resistors (0402)                                  | Any                              |
| R33                                  | 1     | 10.0kΩ ±1% resistors (0402)                                  | Any                              |
| R35, R37, R39                        | 3     | 51.1kΩ ±1% resistors (0402)                                  | Any                              |
| U1                                   | 1     | Automotive Boost-Dual Buck with PreBoost (48 TQFN-EP)        | Maxim MAX20030BATMA/V+           |
| -                                    | 1     | PCB: MAX20030EVKIT                                           |                                  |

**= L4 can be populated with a 6A Ferrite Bead (1806) Murata BLM41PG600SN1L if EMI testing is needed. To be included with the EMI circuit is C16=C18=0.1µF±10%, 50V X7R (0603) and C17=C19=1,000pF±10%, 50V X7R (0603).

MAX20030 Evaluation Kit

## MAX20030 EV Kit Schematics

<!-- image -->

Evaluates: MAX20030/MAX20031

## MAX20030 EV Kit PCB Layouts

MAX20030 EV Kit -Top Assembly

<!-- image -->

MAX20030 EV Kit -Top Layer

<!-- image -->

│

## MAX20030 EV Kit PCB Layouts (continued)

MAX20030 EV Kit -Inner Layer 2

<!-- image -->

MAX20030 EV Kit -Inner Layer 3

<!-- image -->

│

## MAX20030 EV Kit PCB Layouts (continued)

MAX20030 EV Kit -Bottom Layer

<!-- image -->

MAX20030 EV Kit -Bottom Assembly

<!-- image -->

│

## MAX20030 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------|-----------------|
|                 0 | 7/17            | Initial Release                                                                         | -               |
|                 1 | 3/20            | Updated MAX20030 EV Kit BOM : in U1 section changed part number to be MAX20030BATMA/V+. | 4               |

For information on other Maxim Integrated products, visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

<!-- image -->

│

Evaluates: MAX20030/MAX20031