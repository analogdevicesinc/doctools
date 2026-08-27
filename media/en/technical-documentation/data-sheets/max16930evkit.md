<!-- lastmod 2022-08-02 -->
## MAX16930 Evaluation Kit

## General Description

The MAX16930 evaluation kit (EV kit) is a fully assembled and  tested  application  circuit  for  the  MAX16930  highvoltage, dual synchronous step-down controller with preboost. The EV kit is set up to provide 5V and 3.3V from an input voltage ranging from 3.5V to 36V (without preboost). The preboost circuit maintains the 10V supply rail for input voltages below 10V. Each buck rail can deliver up to 5A load current. Various jumpers are provided to help evaluate features of the MAX16930 IC.

## Benefits and Features

- Dual, Synchronous Step-Down Controllers Operate at 180° Out-of-Phase to Reduce Switching Noise
- Preboost Controller to Maintain Operation with Low Supply Voltage
- 3.5V to 36V Wide Input Supply Range
- Buck Output Voltage: 5V and 3.3V Fixed or Adjustable Between 1V and 10V
- Current-Mode Controllers with Forced-PWM and Skip Modes
- Resistor-Programmable Frequency Between 1MHz and 2.2MHz
- Frequency Synchronization Input
- Independent Enable Inputs
- Voltage Monitoring PGOOD\_ Outputs
- Fully Assembled and Tested

## EV Kit Contents

- MAX16930 EV Kit Board

Ordering Information appears at end of data sheet.

Evaluates: MAX16930, MAX16931

## Quick Start

## Recommended Equipment

- MAX16930 EV kit
- 3.5V  to  36V,  15A  power  supply  (the  power  supply should be capable of providing 15A at 3V input)
- Two voltmeters
- Two electronic loads capable of sinking 5A each

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to activate the board. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that all jumpers are in their default configurations according to Table 1.
- 2) Connect  the  positive  and  negative  terminals  of  the power  supply  to  the  VBATF  and  PGND  test  pads, respectively.
- 3) Connect  the  positive  terminal  of  the  first  electronic load  to  the  VOUT1  test  pad.  Connect  the  ground terminal of the electronic load to the corresponding PGND test pad.
- 4) Connect the positive terminal of the second electronic load  to  the  VOUT2  test  pad.  Connect  the  ground terminal of the electronic load to the corresponding PGND test pad.
- 5) Set the power-supply voltage to 14V.
- 6) Turn on the power supply.
- 7) Enable the electronic loads.
- 8) Verify that VOUT1 is approximately 5V.
- 9) Verify that VOUT2 is approximately 3.3V.
- 10)  Verify the switching frequency of VOUT1 and VOUT2 is approximately 2.0MHz.

<!-- image -->

Table 1. Default Jumper Settings

| JUMPER        | DEFAULT SHUNT POSITION   | FUNCTION                                             |
|---------------|--------------------------|------------------------------------------------------|
| JU1, JU2      | Installed                | PGOOD_ pulls up to VBIAS when OUT_ is in regulation. |
| JU3           | Installed                | Preboost on-indicator enabled.                       |
| JU5           | 1-4                      | Switches to EXTVCC. Internal regulator disabled.     |
| JU6           | 1-2                      | Forced-PWM mode.                                     |
| JU7, JU8, JU9 | 1-2                      | Buck outputs, preboost enabled.                      |
| JU10          | 2-3                      | f BOOST = fSW                                        |

## Detailed Description of Hardware

The MAX16930 EV kit, which evaluates the MAX16930 high-voltage, dual synchronous step-down controller with preboost, can supply up to two rails. The EV kit includes two current-mode buck outputs that are fixed to 5V and 3.3V,  or  programmable  from  1V  to  10V  with  external resistor-dividers. The current capability is 5A per rail. Both outputs  are  current  limited  and  can  be  controlled  independently  through  their  respective  enable  inputs  EN\_. The EV kit includes an external preboost, which enables full  output  functionality  during  undervoltage  events. The EV kit also includes a 5V, 100mA internal linear regulator  (BIAS),  which  powers  the  internal  circuitry  of  the MAX16930.

## Switching Frequency/ External Synchronization

The  EV  kit  switching  frequency  can  be  adjusted  from 1MHz  to  2.2MHz  by  changing  the  FOSC  resistor  R75. The EV kit can also be synchronized to an external clock by  connecting  the  external  clock  signal  to  the  FSYNC test  point.  Refer  to  the Switching  Frequency/External Synchronization section in the MAX16930 IC data sheet for more details.

## Buck Output Monitoring (PGOOD\_)

The  EV  kit  provides  two  power-good  output  test  points (PGOOD1 and PGOOD2) to monitor the status of the two buck  outputs  (OUT1  and  OUT2).  Each  PGOOD\_  goes high (high impedance) when the corresponding regulator output voltage is in regulation. Each PGOOD\_ goes low when  the  corresponding  regula  tor  output  voltage  drops below 15% (typ) or rises above 10% (typ) of its nominal regulated voltage.

To  obtain  a  logic  signal,  pull  up  PGOOD\_  to  VBIAS  by installing shunts on JU1 and JU2.

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
| 2-3              | Connected to GND  | Skip mode       |

* Default configuration.

## EXTVCC Switchover Comparator

The internal linear regulator can be bypassed by connecting an external supply (3V to 5.2V) or the output of one of the buck converters to EXTVCC. BIAS internally switches to  EXTVCC and the internal linear regulator turns off. If VEXTVCC drops below V TH,EXTVCC  = 3V(min), the internal regulator enables and switches back to BIAS.

## Mode of Operation

The  EV  kit  features  jumper  JU6  to  configure  the  mode switch-control input. Drive FSYNC high (pins 1-2 of JU6) to enable forced-PWM mode. Drive FSYNC low (pins 2-3 of JU6) to enable skip mode under light loads.

│

## MAX16930 Evaluation Kit

## Enable Control

The EV kit features jumpers JU7, JU8, and JU9 to independently control the digital enable inputs of the buck 1 controller, the buck 2 controller, and the boost controller, respectively.  Connect  the  active-high  input  EN\_  to  VIN (pins 1-2) to enable the corresponding controller. Connect the  EN\_  pin  to  ground  (pins  2-3)  to  disable  the  corresponding controller. See Table 4.

## Preboost Frequency Select

The  boost  frequency  is  selected  as  a  multiple  of  the buck frequency by setting the input voltage of FSELBST. Connect FSELBST to GND (pins 2-3) to set the preboost frequency to be the same switching frequency as buck 1. Connect FSELBST to BIAS (pins 1-2) to set the preboost frequency to have a switching frequency that is 1/5th that of buck 1.

## Setting the Output Voltage in Buck Converters

To externally adjust the output voltage OUT1 between 1V and 10V, remove R61. Connect a resistive divider from the  output  OUT1  to  FB1  to  AGND.  Place  appropriate resistors in positions R58 and R59 according to the following equation:

<!-- formula-not-decoded -->

where V FB1  = 1V (typ).

To externally adjust the output voltage OUT2 between 1V and 10V, remove R73. Connect a resistive divider from the output OUT2 to FB2 to GND. Place appropriate resistors in positions R70 and R71 according to the following equation:

<!-- formula-not-decoded -->

where V FB2  = 1V (typ).

## Preboost

The EV kit includes an asynchronous current-mode preboost with adjustable output. The boost converter output is  called VIN since it powers the input supply pin of the device. This preboost can be used independently, but is ideally suited for applications that need to stay fully functional during input voltage dropouts typical for automotive cold-crank or start-stop.

## Evaluates: MAX16930, MAX16931

To externally adjust the boost output voltage (VIN), place appropriate resistors in positions R78 and R79 according to the following equation:

<!-- formula-not-decoded -->

where V FB3  = 1.25V (typ).

## Evaluating the MAX16931 on the MAX16930 EV Kit

The  MAX16930  EV  kit  can  be  modified  to  operate  the MAX16931. The MAX16931 operates at a switching frequency of 400kHz, which requires a change in the following components:

- 1)  Replace U1 with the MAX16931 IC.
- 2)  Replace R75 (R FOSC ) with 80.6kΩ to achieve 400kHz switching frequency.
- 3)  Replace the preboost inductor (L6) with a 2.2µH 15A inductor.
- 4)  Replace the buck inductors (L4, L5) with a 6.8µH 7A inductor.

Contact  Technical  Support  at www.maximintegrated. com/support for any further questions.

## Table 4. Enable Control (JU7, JU8, JU9)

| SHUNT POSITION   | EN_ PIN           | CONTROLLER_   |
|------------------|-------------------|---------------|
| 1-2*             | Connected to VIN  | Enabled       |
| 2-3              | Connected to PGND | Disabled      |

## Table 5. FSELBST (JU10)

| SHUNT POSITION   | FSELBST PIN       | BOOST FREQUENCY   |
|------------------|-------------------|-------------------|
| 1-2              | Connected to BIAS | f BOOST = 0.2fSW  |
| 2-3*             | Connected to PGND | f BOOST = fSW     |

* Default configuration.

│

## MAX16930 Evaluation Kit

## Component List

| DESIGNATION               |   QTY | DESCRIPTION                                                                      |
|---------------------------|-------|----------------------------------------------------------------------------------|
| C2, C3, C4, C7, C33, C41  |     5 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K              |
| C5, C48-C51, C53-C55, C74 |     9 | 4.7µF ±10%, 50V X7R ceramic capacitor (1210) Murata GCM32ER71H475KA55L           |
| C34, C35, C42, C43        |     4 | 47µF ±10%, 10V X7R ceramic capacitor (1210) Murata GRM32ER71A476K                |
| C36, C44                  |     2 | 4700pF ±10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H472K              |
| C37                       |     1 | 22pF ±5%, 50V C0G ceramic capacitor (0402) Taiyo Yuden UMK105CG220JV-F           |
| C39                       |     1 | 6.8µF ±10%, 16V X7R ceramic capacitor (1206) TDK C3216X7R1C685K                  |
| C40                       |     1 | 2.2µF ±10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A225K               |
| C45                       |     1 | 10pF ±5%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H100J                 |
| C46                       |     1 | 150µF, 35V aluminum electrolytic capacitor (8.00mmx10.2mm) Panasonic EEHZA1V151P |
| C47                       |     1 | 270µF, 35V aluminum electrolytic capacitor (10.0mmx10.2mm) Panasonic EEHZA1V271P |
| C57                       |     1 | 0.022µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H223K             |
| C6, C7-C10, C56, C60, C61 |     0 | Capacitors, not installed                                                        |
| D1, D2                    |     2 | 3A, 40V Schottky diodes Vishay SS3P4HM3\84A                                      |

Evaluates: MAX16930, MAX16931

| DESIGNATION                     |   QTY | DESCRIPTION                                                        |
|---------------------------------|-------|--------------------------------------------------------------------|
| D7, D12                         |     2 | 200mA, 30V diodes (SOT23) Fairchild BAT54                          |
| D16                             |     1 | 10A, 45V Schottky diode (SMPC) Vishay SS10PH45HM3/86A              |
| JU1, JU2, JU3                   |     3 | 2-pin headers (CUT TO FIT) SULLINS PEC36SAAN                       |
| JU5                             |     1 | 4-pin header (CUT TO FIT) SULLINS PEC36SAAN                        |
| JU6-JU10                        |     5 | 3-pin headers (CUT TO FIT) SULLINS PEC36SAAN                       |
| L1*                             |     1 | Inductor, not installed                                            |
| L4, L5                          |     2 | 2.2µH 7A power inductors Vishay IHLP2525CZER2R2M11                 |
| L6                              |     1 | 0.47µH 26A power inductor Vishay IHLP2525CZERR47M01                |
| PGOOD1, PGOOD2, BSTON, FSYNC    |     4 | 40-mil drill size test points (RED) Keystone Electronics 5002      |
| Q8, Q9, Q10, Q11                |     4 | 40V, 7.6A n-channel MOSFETs (8 SO) Fairchild FDMC8015L             |
| Q12                             |     1 | 40V, 10.4A n-channel MOSFET (PowerPAK SO-8) Vishay SiR426DP-T1-GE3 |
| R52-R54, R61, R64-R66, R73, R82 |     9 | 0Ω ±5% resistors (0603)                                            |
| R1, R2, R3                      |     3 | 1kΩ ±5% resistors (0603)                                           |
| R55, R67                        |     2 | 15mΩ, 0.5W sense resistors (1206) IRC LRF1206LF-01-R015-F          |
| R62                             |     1 | 22.1kΩ ±1% resistors (0603)                                        |
| R63                             |     1 | 1Ω ±5% resistor (0603)                                             |
| R74                             |     1 | 14kΩ ±1% resistor (0603)                                           |
| R79, R81                        |     2 | 20kΩ ±1% resistors (0603)                                          |
| R75                             |     1 | 15.4kΩ 1% resistor (0603)                                          |

│

## MAX16930 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| R76           |     1 | 100kΩ ±1% resistor (0603)                                            |
| R77           |     1 | 0.012Ω ±1%, 2W current-sense resistor (2512) IRC LRF2512LF-01-R012-F |
| R78           |     1 | 140kΩ ±1% resistor (0603)                                            |
| R80           |     1 | 133kΩ ±1% resistor (0603)                                            |
| R95, R96, R97 |     3 | 51.1kΩ ±5% resistors (0603)                                          |

Evaluates: MAX16930, MAX16931

| DESIGNATION        |   QTY | DESCRIPTION                                                                              |
|--------------------|-------|------------------------------------------------------------------------------------------|
| R58, R59, R70, R71 |     0 | Resistors, not installed                                                                 |
| U1                 |     1 | Automotive boost dual buck with preboost (40 TQFN-EP**) Maxim Integrated MAX16930ATLR/V+ |
| -                  |     1 | PCB: MAX16930 EVKIT                                                                      |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX16930 when contacting these component suppliers.

│

Figure 1. MAX16930 EV Kit Schematic

<!-- image -->

Figure 2. MAX16930 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX16930 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX16930 EV Kit PCB Layout-Layer 2 (PGND)

<!-- image -->

Figure 5. MAX16930 EV Kit PCB Layout-Layer 3 (VIN and AGND)

<!-- image -->

Figure 6. MAX16930 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX16930 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16930EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX16930 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                   | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------|-----------------|
|                 0 | 9/13            | Initial release                               | -               |
|                 1 | 11/15           | Updated Figure 1 schematic                    | 6               |
|                 2 | 9/16            | Changed resistor R72 to R71 in Component List | 5               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSOieG. 0a[im ,nteJrateG reserves the riJht to chanJe the circuitr\ anG sSeci¿cations without notice at an\ time.

│

Evaluates: MAX16930, MAX16931