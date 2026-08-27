<!-- lastmod 2022-08-02 -->
## MAX17231 Evaluation Kit

## General Description

The MAX17231 evaluation kit (EV kit) is a fully assembled and  tested  application  circuit  board  for  the  MAX17231 high-voltage, dual synchronous step-down controller with preboost. The EV kit is set up to provide 5V and 3.3V from an input voltage ranging from 3.5V to 36V. The preboost circuit  maintains  the  10V  supply  rail  for  input  voltages below 10V. Each buck rail can deliver up to 5A load current. Various jumpers are provided to help evaluate features of the MAX17231 IC.

## Features

- Dual, Synchronous Step-Down Controllers Operate at 180° Out-of-Phase to Reduce Switching Noise
- Preboost Controller to Maintain Operation with Low Supply Voltage
- 3.5V to 36V Wide Input Supply Range
- Buck Output Voltage: 5V and 3.3V Fixed or Adjustable Between 1V and 10V
- Current-Mode Controllers with Forced-PWM and Skip Modes
- Resistor-Configurable Frequency Between 1MHz and 2.2MHz
- Independent Enable Inputs
- 85% Peak Efficiency at 12V Input in Skip-Mode
- FSYNC Input and Power-Good Output
- Proven 4-Layer 2oz Copper PCB Layout
- Demonstrates 1937mil x 1702mil Solution Size
- Fully Assembled and Tested

## EV Kit Contents

- MAX17231EV Kit Board

Ordering Information appears at end of data sheet.

Evaluates: MAX17231, MAX17230

## Quick Start

## Recommended Equipment

- MAX17231 EV Kit
- 3.5V  to  36V,  20A  power  supply  (the  power  supply should be capable of providing 20A at 3V input)
- Two voltmeters
- Two electronic loads capable of sinking 5A each

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to activate the board. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that all jumpers are in their default configurations according to Table 1.
- 2) Connect  the  positive  and  negative  terminals  of  the power supply to the VBATF and PGND banana jacks, respectively.
- 3) Connect the positive terminal of the first electronic load to the VOUT1 banana jack. Connect the ground terminal of  the  electronic  load  to  the  corresponding  PGND banana jack.
- 4) Connect the positive terminal of the second electronic load to the VOUT2 banana jack. Connect the ground terminal of the electronic load to the corresponding PGND banana jack.
- 5) Set the power-supply voltage to 14V.
- 6) Turn on the power supply.
- 7) Enable the electronic loads.
- 8) Verify that VOUT1 is approximately 5V.
- 9) Verify that VOUT2 is approximately 3.3V.

<!-- image -->

## Table 1. Default Jumper Settings

| JUMPER        | DEFAULT SHUNT POSITION   | FUNCTION                                            |
|---------------|--------------------------|-----------------------------------------------------|
| JU1, JU2      | Installed                | PGOOD_ pulls up to BIAS when OUT_ is in regulation. |
| JU3           | Installed                | Preboost on-indicator enabled.                      |
| JU5           | 1-4                      | Switches to EXTVCC. Internal regulator disabled.    |
| JU6           | 1-2                      | Forced-PWM mode.                                    |
| JU7, JU8, JU9 | 1-2                      | Buck outputs, preboost enabled.                     |

## Detailed Description of Hardware

The MAX17231 EV kit, which evaluates the MAX17231 high-voltage, dual synchronous step-down controller with preboost, can supply up to two rails. The EV kit includes two  current-mode  buck  outputs  that  are  fixed  to  5V and  3.3V,  or  configurable  from  1V  to  10V  with  external resistor-dividers.  The  current  capability  is  5A  per  rail. Both  outputs  are  current  limited  and  can  be  controlled independently  through  their  respective  enable  inputs EN\_.  The  EV  kit  includes  an  external  preboost,  which enables  full  output  functionality  during  undervoltage events.  The  EV  kit  also  includes  a  5V,  100mA  internal linear regulator (BIAS), which powers the internal circuitry of the MAX16930.

## Switching Frequency/External Synchronization

The  EV  kit  switching  frequency  can  be  adjusted  from 1MHz  to  2.2MHz  by  changing  the  F OSC   resistor  R75. The EV kit can also be synchronized to an external clock by  connecting  the  external  clock  signal  to  the  FSYNC test point and AGND. Refer to the Switching Frequency/ External  Synchronization section  in  the  MAX17231  IC data sheet for more details.

## Buck Output Monitoring (PGOOD\_)

The  EV  kit  provides  two  power-good  output  test  points (PGOOD1 and PGOOD2) to monitor the status of the two buck  outputs  (OUT1  and  OUT2).  Each  PGOOD\_  goes high (high impedance) when the corresponding regulator output voltage is in regulation. Each PGOOD\_ goes low when  the  corresponding  regula  tor  output  voltage  drops below 15% (typ) or rises above 10% (typ) of its nominal regulated voltage.

To  obtain  a  logic  signal,  pull  up  PGOOD\_  to  BIAS  by installing shunts on JU1 and JU2.

## Table 2. EXTVCC (JU5)

| SHUNT POSITION   | EXTVCC PIN         | BIAS                                                |
|------------------|--------------------|-----------------------------------------------------|
| 1-2              | Connected to VOUT2 | Switches to EXTVCC. Internal regulator disabled.    |
| 1-3              | Connected to PGND  | Internal regulator enabled to generate BIAS supply. |
| 1-4*             | Connected to VOUT1 | Switches to EXTVCC. Internal regulator disabled.    |

* Default configuration.

## Table 3. Mode of Operation (JU6)

| SHUNT POSITION   | FSYNC PIN         | MODE            |
|------------------|-------------------|-----------------|
| 1-2*             | Connected to BIAS | Forced-PWM mode |
| 2-3              | Connected toAGND  | Skip mode       |

* Default configuration.

## EXTVCC Switchover Comparator

The internal linear regulator can be bypassed by connecting an external supply (3V to 5.2V) or the output of one of the buck converters to EXTVCC. BIAS internally switches to  EXTVCC and the internal linear regulator turns off. If VEXTVCC drops below V TH,EXTVCC  = 3V(min), the internal regulator enables and switches back to BIAS.

## Mode of Operation

The  EV  kit  features  jumper  JU6  to  configure  the  mode switch-control input. Drive FSYNC high (pins 1-2 of JU6) to enable forced-PWM mode. Drive FSYNC low (pins 2-3 of JU6) to enable skip mode under light loads.

│

## MAX17231 Evaluation Kit

## Enable Control

The  EV  kit  features  jumpers  JU7,  JU8,  and  JU9  to independently control the digital enable inputs of the buck 1 controller, the buck 2 controller, and the boost controller, respectively.  Connect  the  active-high  input  EN\_  to  VIN (pins 1-2) to enable the corresponding controller. Connect the EN\_  pin to PGND  (pins  2-3) to disable the corresponding controller. See Table 4.

## Setting the Output Voltage in Buck Converters

To  externally  adjust  the  output  voltage  OUT1  between 1V  and  10V,  remove  R61.  Connect  a  resistive  divider from  the  output  OUT1  to  FB1  to AGND.  Place  appropriate resistors  in  positions  R58  and  R59  according  to  the following equation:

<!-- formula-not-decoded -->

where V FB1  = 1V (typ).

To externally adjust the output voltage OUT2 between 1V and 10V, remove R73. Connect a resistive divider from the output OUT2 to FB2 to AGND. Place appropriate resistors in positions R70 and R71 according to the following equation:

<!-- formula-not-decoded -->

where V FB2  = 1V (typ).

## Preboost

The  EV  kit  includes  an  asynchronous  current-mode preboost with adjustable output. The boost converter output is  called VIN since it powers the input supply pin of the device. This preboost can be used independently, but is ideally  suited  for  applications  that  need  to  stay  fully functional during input voltage dropouts  typical for systems that have an input voltage that varies over a wide range  and  where  the  input  voltage  can  drop  below  the output voltage.

Note: The preboost output (V IN ) automatically changes its slope compensation when V IN  - V BATF  is near 5.3V to maintain optimum stability.

## Evaluates: MAX17231, MAX17230

To externally adjust the boost output voltage (V IN ), place appropriate resistors in positions R78 and R79 according to the following equation:

<!-- formula-not-decoded -->

where V FB3  = 1.25V (typ).

## Evaluating the MAX17230 On the MAX17231 EV Kit

The  MAX17231  EV  kit  can  be  modified  to  operate  the MAX16931.  The  MAX17230  operates  at  a  switching frequency  of  400kHz,  which  requires  a  change  in  the following components:

- 1)  Replace U1 with the MAX17230 IC.
- 2)  Replace R75 (R FOSC ) with 80.6kΩ to achieve 400kHz switching frequency.
- 3)  Replace the preboost inductor (L6) with a 2.2µH 15A inductor.
- 4)  Replace the buck inductors (L4, L5) with a 6.8µH 7A inductor.

Contact  Technical  Support  at www.maximintegrated. com/support for any further questions.

## Table 4. Enable Control (JU7, JU8, JU9)

| SHUNT POSITION   | EN_ PIN           | CONTROLLER_   |
|------------------|-------------------|---------------|
| 1-2*             | Connected to VIN  | Enabled       |
| 2-3              | Connected to PGND | Disabled      |

* Default configuration.

│

## Component Suppliers

| SUPPLIER                               | WEBSITE               |
|----------------------------------------|-----------------------|
| Fairchild Semiconductor                | www.fairchildsemi.com |
| Murata Electronics North America, Inc. | www.murata.com        |
| NXP Semiconductors                     | www.nxp.com           |
| Panasonic Corp.                        | www.panasonic.com     |
| Stackpole Electronics                  | www.seielect.com      |
| TDK Corp.                              | www.component.tdk.com |
| Taiyo Yuden                            | www.t-yuden.com       |
| TT Electronics                         | www.ttelectronics.com |
| Vishay                                 | www.vishay.com        |

Note:

Indicate that you are using the MAX17231when contacting these component suppliers.

Evaluates: MAX17231, MAX17230

│

## MAX17231 EV Kit Bill of Materials

| REF_DES                             |   QTY | DESCRIPTION                                                                                                      |
|-------------------------------------|-------|------------------------------------------------------------------------------------------------------------------|
| BSTON, FSYNC, PGOOD1, PGOOD2        |     4 | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| C2-C4, C33, C41                     |     5 | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                      |
| C5, C48-C51, C53-C55, C74           |     9 | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;AUTO                  |
| C34, C35, C42, C43                  |     4 | CAPACITOR; SMT (1210); CERAMIC; 47UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R           |
| C36, C44                            |     2 | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R-                     |
| C37                                 |     1 | CAPACITOR; SMT (0402); CERAMIC CHIP; 22PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                         |
| C39                                 |     1 | CAPACITOR; SMT (1206); CERAMIC CHIP; 6.8UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                       |
| C40                                 |     1 | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                       |
| C45                                 |     1 | CAPACITOR; SMT (0402); CERAMIC CHIP; 10PF; 50V; TOL=2%; TG=-55 DEGC TO +125 DEGC; TC=C0G                         |
| C46                                 |     1 | CAPACITOR; SMT (CASE_F); ALUMINUM-ELECTROLYTIC; 150UF; 35V; TOL=20%; TG=- 55 DEGC TO +105 DEGC;AUTO              |
| C47                                 |     1 | CAPACITOR; SMT (CASE_G); ALUMINUM-ELECTROLYTIC; 270UF; 35V; TOL=20%; TG=- 55 DEGC TO +105 DEGC;AUTO              |
| C57                                 |     1 | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.022UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                     |
| D1, D2                              |     2 | DIODE; SCH; SMT (SOD-128); PIV=40V; IF=5A                                                                        |
| D7, D12                             |     2 | DIODE; SCH; SMT (SOT-23); PIV=30V; IF=0.2A                                                                       |
| D16                                 |     1 | DIODE; SCH; SMT (SOT-1289); PIV=45V; IF=15A                                                                      |
| JU1-JU3                             |     3 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                        |
| JU5                                 |     1 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                        |
| JU6-JU9                             |     4 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                        |
| L4, L5                              |     2 | INDUCTOR; SMT; SHIELDED; 2.2UH; TOL=+/-20%; 9A                                                                   |
| L6                                  |     1 | INDUCTOR; SMT; SHIELDED; 0.47UH; TOL=+/-20%; 17.5A                                                               |
| Q8-Q11                              |     4 | TRAN; N-CHANNELPOWER TRENCH MOSFET; NCH; MLP8-EP; PD-(24W); I-(18A); V-(40V)                                     |
| Q12                                 |     1 | TRAN; N-CHANNEL 40-V (D-S) MOSFET; NCH; SO-8; PD-(41.7W); I-(30A); V-(40V)                                       |
| R1-R3                               |     3 | RESISTOR; 0603; 1K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                            |
| R5, R52-R54, R61, R64-R66, R73, R82 |    10 | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                              |
| R55, R67                            |     2 | RESISTOR; 2010; 0.012 OHM; 1%; 100PPM; 1W; THICK FILM                                                            |
| R62                                 |     1 | RESISTOR, 0603, 22.1KOHMS, 1%,100PPM, 0.1W, THICK FILM                                                           |
| R63                                 |     1 | RESISTOR; 0603; 1 OHM; 5%; 200PPM; 0.1W; THICK FILM                                                              |
| R74                                 |     1 | RESISTOR; 0603; 14K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                            |

│

Evaluates: MAX17231, MAX17230

## MAX17231 EV Kit Bill of Materials (Continued)

| REF_DES                              |   QTY | DESCRIPTION                                                                                                        |
|--------------------------------------|-------|--------------------------------------------------------------------------------------------------------------------|
| R75                                  |     1 | RESISTOR; 0603; 15.4K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                            |
| R76                                  |     1 | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                |
| R77                                  |     1 | RESISTOR; 2728; 0.005 OHM; 1%; 25PPM; 4W; METAL FOIL                                                               |
| R78                                  |     1 | RESISTOR; 0603; 140K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                             |
| R79, R81                             |     2 | RESISTOR; 0603; 20K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                              |
| R80                                  |     1 | RESISTOR; 0603; 133K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                            |
| R95-R97                              |     3 | RESISTOR; 0603; 51.1K; 1%; 100PPM; 0.10W; THICK FILM                                                               |
| SU1-SU8                              |     8 | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED            |
| U1                                   |     1 | EVKIT PART-IC; 2MHZ; 36V; DUAL BUCK WITH PREBOOSTAND 20UA QUIESCENT CURRENT; TQFN40-EP                             |
| X1                                   |     1 | CONNECTOR; MALE; PANELMOUNT; BANANAJACK; STRAIGHT; 1PIN                                                            |
| X4                                   |     1 | CONNECTOR; MALE; PANELMOUNT; BANANAJACK; STRAIGHT; 1PIN                                                            |
| X5, X9, X11                          |     3 | CONNECTOR; MALE; PANELMOUNT; BANANAJACK; STRAIGHT; 1PIN                                                            |
| X6                                   |     1 | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| X8                                   |     1 | CONNECTOR; MALE; PANELMOUNT; BANANAJACK; STRAIGHT; 1PIN                                                            |
| X10                                  |     1 | CONNECTOR; MALE; PANELMOUNT; BANANAJACK; STRAIGHT; 1PIN                                                            |
| X22                                  |     1 | CONNECTOR; MALE; PANELMOUNT; BANANAJACK; STRAIGHT; 1PIN                                                            |
| C1, C6-C10, C56, C60, C61            |     0 | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                           |
| L1                                   |     0 | PACKAGE OUTLINE 1806 INDUCTOR                                                                                      |
| VIN, PGND, VBAT, VBATF, VOUT1, VOUT2 |     0 | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                           |
| R4, R58, R59, R70, R71               |     0 | PACKAGE OUTLINE 0603 RESISTOR                                                                                      |
| X3, X7                               |     0 | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                           |
| PCB                                  |     1 | PCB Board:MAX17231 EVALUATION KIT                                                                                  |

│

## MAX17231 EV Kit PCB Layout Diagrams

MAX17231 EV Kit-Top Silkscreen

<!-- image -->

MAX17231 EV Kit- Layer 2 PGND

<!-- image -->

MAX17231 EV Kit-Bottom Silkscreen

<!-- image -->

MAX17231 EV Kit- Layer 3 Power Signals

<!-- image -->

│

## MAX17231 EV Kit PCB Layout Diagrams (continued)

MAX17231 EV Kit-Top

<!-- image -->

MAX17231 EV Kit-Bottom

<!-- image -->

│

## MAX17231 EV Kit Schematic

<!-- image -->

## MAX17231 EV Kit Minimal Component Schematic

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17231EVKIT# | EV Kit |

# Denotes RoHS compliant.

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses aUe iPSOieG. 0a[iP ,QteJUateG UeVeUveV the UiJht to chaQJe the ciUcXitU\ aQG VSeci¿catioQV withoXt Qotice at aQ\ tiPe.

│

Evaluates: MAX17231, MAX17230