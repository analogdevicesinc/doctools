<!-- lastmod 2022-08-04 -->
## MAX16932 Evaluation Kit

## General Description

The MAX16932 evaluation kit (EV kit) is a fully assembled and  tested  application  circuit  for  the  MAX16932  highvoltage, dual synchronous step-down controller. The EV kit is set up to provide 5V and 3.3V from an input voltage ranging from 3.5V to 36V. Each buck rail can deliver up to 5A load current. The EV kit's switching frequency is set at 2.2MHz for both buck converters. Various jumpers are provided to help evaluate features of the MAX16932 IC.

## Benefits and Features

- Dual, Synchronous Step-Down Controllers Operate at 180° Out-of-Phase to Reduce Switching Noise
- 3.5V to 36V Wide Input Supply Range
- Buck Output Voltage: 5V and 3.3V Fixed or Adjustable Between 1V and 10V
- Current-Mode Controllers with Forced-PWM and Skip Modes
- Resistor-Programmable Frequency Between 1MHz and 2.2MHz
- Frequency Synchronization Input
- Independent Enable Inputs
- Voltage Monitoring PGOOD\_ Outputs
- Fully Assembled and Tested

## EV Kit Contents

- MAX16932 EV Kit Board

Ordering Information appears at end of data sheet.

Evaluates: MAX16932, MAX16933

## Quick Start

## Recommended Equipment

- MAX16932 EV kit
- 3.5V to 36V, 15A power supply
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

<!-- image -->

## MAX16932 Evaluation Kit

## Table 1. Default Jumper Settings

| JUMPER   | DEFAULT SHUNT POSITION   | FUNCTION                                             |
|----------|--------------------------|------------------------------------------------------|
| JU1, JU2 | 1-2                      | Buck outputs enabled.                                |
| JU6      | 1-2                      | Forced-PWM mode.                                     |
| JU7      | 1-2                      | Switches to EXTVCC. Internal regulator disabled.     |
| JU8, JU9 | Installed                | PGOOD_ pulls up to VBIAS when OUT_ is in regulation. |

## Detailed Description of Hardware

The MAX16932 EV kit, which evaluates the MAX16932 high-voltage, dual synchronous step-down controller, can supply up to two rails. The EV kit includes two currentmode buck outputs that are fixed to 5V and 3.3V, or programmable from 1V to 10V with external resistor-dividers. The current capability is 5A per rail. Both outputs are current limited and can be controlled independently through their respective enable inputs EN\_.

## Switching Frequency/ External Synchronization

The  EV  kit  switching  frequency  can  be  adjusted  from 1MHz to 2.2MHz by changing the FOSC resistor R136. The EV kit can also be synchronized to an external clock by  connecting  the  external  clock  signal  to  the  FSYNC test  point.  Refer  to  the Switching  Frequency/External Synchronization section in the MAX16932 IC data sheet for more details.

## Enable Control

The EV kit features jumper JU1 to independently control the enable input of VOUT1 and jumper JU2 to control the enable  input  of  VOUT2.  Connect  the  EN\_  pin  to  VBAT (pins  1-2)  to  enable  VOUT\_.  Connect  the  EN\_  pin  to ground (pins 2-3) to disable VOUT\_.  See Table 2.

## Mode of Operation

The  EV  kit  features  jumper  JU6  to  configure  the  mode switch-control input (Table 3). Drive FSYNC high (pins 1-2 of JU6) to enable forced-PWM mode. Drive FSYNC low (pins 2-3 of JU6) to enable skip mode under light loads.

## EXTVCC Switchover Comparator

The  internal  linear  regulator  can  be  bypassed  by  connecting  an  external  supply  (3.1V  to  5.2V)  or  the  output of  one  of  the  buck  converters  to  EXTVCC.  BIAS  internally  switches  to  EXTVCC  and  the  internal  linear  regulator  turns  off.  If  V EXTVCC   drops  below  V TH,EXTVCC   = 3.1V(min),  the  internal  regulator  enables  and  switches back to BIAS. See Table 4.

## Table 2. Enable Control (JU1, JU2)

| SHUNT POSITION   | EN_ PIN           | VOUT_    |
|------------------|-------------------|----------|
| 1-2*             | Connected to VBAT | Enabled  |
| 2-3              | Connected to PGND | Disabled |

* Default configuration.

## Table 3. Mode of Operation (JU6)

| SHUNT POSITION   | FSYNC PIN         | MODE            |
|------------------|-------------------|-----------------|
| 1-2*             | Connected to BIAS | Forced-PWM mode |
| 2-3              | Connected toAGND  | Skip mode       |

## Table 4. EXTVCC (JU7)

| SHUNT POSITION   | EXTVCC PIN         | BIAS                                             |
|------------------|--------------------|--------------------------------------------------|
| 1-2              | Connected to VOUT1 | Switches to EXTVCC. Internal regulator disabled. |
| 1-3*             | Connected to PGND  | Internal regulator enabled.                      |
| 1-4              | Connected to VOUT2 | Switches to EXTVCC. Internal regulator disabled. |

Evaluates: MAX16932, MAX16933

│

## MAX16932 Evaluation Kit

## Buck Output Monitoring (PGOOD\_)

The  EV  kit  provides  two  power-good  output  test  points (PGOOD1 and PGOOD2) to monitor the status of the two buck outputs (OUT1 and OUT2). Each PGOOD\_ goes high (high impedance) when the corresponding regulator output voltage  is  in  regulation.  Each  PGOOD\_  goes  low  when the  corresponding  regula  tor  output  voltage  drops  below 15% (typ) or rises above 10% (typ) of its nominal regulated voltage. PGOOD\_ asserts low during soft-start and in shutdown. PGOOD\_ becomes high impedance when OUT\_ is in regulation. To obtain a logic signal, pull up PGOOD\_ to VBIAS by installing shunts on JU8 and JU9.

## Setting the Output Voltage in Buck Converters

To externally adjust the output voltage OUT1 between 1V and 10V, remove R122 and install a 0Ω resistor on R121. Connect a resistive divider from the output OUT1 to FB1 to  AGND.  Place  appropriate  resistors  in  positions  R58 and R119 and R120 according to the following equation:

<!-- formula-not-decoded -->

where V FB1  = 1V (typ).

To externally adjust the output voltage OUT2 between 1V and 10V, remove R132 and install a 0Ω resistor on R133. Connect a resistive divider from the output OUT2 to FB2 to GND. Place appropriate resistors in positions R131 and R132 according to the following equation:

<!-- formula-not-decoded -->

where V FB2  = 1V (typ).

## Evaluates: MAX16932, MAX16933

## Evaluating the MAX16933 on the MAX16932 EV Kit

The  MAX16932  EV  kit  can  be  modified  to  operate  the MAX16933. The MAX16933 operates at a switching frequency of 400kHz, which requires a change in the following components:

- 1)  Replace U1 with the MAX16933 IC.
- 2)  Replace R136 (R FOSC ) with 80.6kΩ to achieve 400kHz switching frequency.
- 3)  Replace the buck inductors (L7, L8) with a 6.8µH 7A inductor.

Contact  Technical  Support  at www.maximintegrated. com/support for any further questions.

│

## MAX16932 Evaluation Kit

## Component List

| DESIGNATION                                          |   QTY | DESCRIPTION                                                             |
|------------------------------------------------------|-------|-------------------------------------------------------------------------|
| C1, C2, C3, C75, C83                                 |     5 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K     |
| C4, C5, C100-C103, C105-C108, C111, C112, C119, C120 |     0 | Not installed, ceramic capacitors (0603)                                |
| C76, C77, C84, C85                                   |     4 | 47µF ±20%, 16V X7R ceramic capacitor (2220) TDK CGA9N3X7R1C476M         |
| C78, C86                                             |     2 | 4700pF ±10%, 50V X7R ceramic capacitors (0402) Murata GRM155R71H472K    |
| C79                                                  |     1 | 22pF ±5%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H220J        |
| C81                                                  |     1 | 6.8µF ±10%, 16V X7R ceramic capacitor (1206) TDK C3216X7R1C685K         |
| C82                                                  |     1 | 2.2µF ±10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A225K      |
| C87                                                  |     1 | 33pF ±5% 50V C0G ceramic capacitor (0402) Murata GRM1555C1H330J         |
| C88                                                  |     1 | 47µF, 50V aluminum electrolytic capacitor (E) Panasonic EEE-FK1H470P    |
| C90-C93, C97, C116                                   |     6 | 4.7µF ±10%, 50V X7R ceramic capacitors (1210) Murata GCM32ER71H475KA55L |

Evaluates: MAX16932, MAX16933

| DESIGNATION                                                                        |   QTY | DESCRIPTION                                                                             |
|------------------------------------------------------------------------------------|-------|-----------------------------------------------------------------------------------------|
| C117, C118                                                                         |     0 | Not installed, ceramic capacitors (2220)                                                |
| D20, D21                                                                           |     2 | 200mA, 30V diodes (SOT23) Fairchild BAT54                                               |
| D22, D23                                                                           |     2 | 3A, 60V Schottky diodes (SMB) Diodes B360B-13-F                                         |
| FSYNC                                                                              |     0 | Not installed, test point                                                               |
| JU1, JU2, JU6                                                                      |     3 | 3-pin headers                                                                           |
| JU7                                                                                |     1 | 4-pin header                                                                            |
| JU8, JU9                                                                           |     2 | 2-pin headers                                                                           |
| L7, L8                                                                             |     2 | 2.2µH, 12A power inductors Vishay IHLP4040DZER2R2M01                                    |
| PGOOD1, PGOOD2                                                                     |     2 | Test points                                                                             |
| Q13-Q16                                                                            |     4 | 40V, 7.6A n-channel MOSFETs (8 SO) Fairchild FDS8449                                    |
| R1, R2                                                                             |     2 | 1kΩ ±5% resistors (0603)                                                                |
| R113, R114, R115, R117, R118, R122, R125, R126, R127, R129, R130, R134, R162, R166 |    14 | 0Ω ±5% resistors (0603)                                                                 |
| R116, R128                                                                         |     2 | 0.015Ω ±1%, 0.5W sense resistors (1206) Panasonic ERJ-8BWFR015V IRC LRF1206LF-01-R015-F |
| R119, R120, R121, R131, R132, R133, R146, R147, R161, R165                         |     0 | Not installed, resistors (0603)                                                         |
| R123                                                                               |     1 | 22.1kΩ ±1% resistor (0603)                                                              |
| R124                                                                               |     1 | 1Ω ±5% resistor (0603)                                                                  |

│

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                 |
|---------------|-------|-----------------------------|
| R135          |     1 | 14kΩ ±1% resistor (0603)    |
| R136          |     1 | 13.7kΩ ±1% resistor (0603)  |
| R137          |     1 | 100kΩ ±1% resistor (0603)   |
| R156, R157    |     2 | 51.1kΩ ±5% resistors (0603) |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes, Inc.                           | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX16932 when contacting these component suppliers.

Evaluates: MAX16932, MAX16933

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| U1            |     1 | Automotive dual buck (28 TQFN-EP*) Maxim MAX16932ATIR/V+ |
| -             |     6 | Shunts                                                   |
| -             |     1 | PCB: MAX16932 EVKIT                                      |

│

Figure 1. MAX16932 EV Kit Schematic

<!-- image -->

Figure 2. MAX16932 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX16932 EV Kit PCB Layout-Component Side

<!-- image -->

│

Figure 4. MAX16932 EV Kit PCB Layout-Layer 2

<!-- image -->

Figure 5. MAX16932 EV Kit PCB Layout-Layer 3

<!-- image -->

Figure 6. MAX16932 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX16932 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16932EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX16932 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSlied. 0a[im ,nteJrated reserves the riJht to chanJe the circXitr\ and sSeci¿cations withoXt notice at an\ time.

│

Evaluates: MAX16932, MAX16933