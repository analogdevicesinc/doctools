<!-- lastmod 2022-08-02 -->
## MAX17233 Evaluation Kit

## General Description

The MAX17233 evaluation kit (EV kit) is a fully assembled and  tested  application  circuit  board  for  the  MAX17233 high-voltage, dual synchronous step-down controller. The EV kit is set up to provide 5V and 3.3V from an input voltage ranging from 6V to 36V. Each buck rail can deliver up to 5A load current. The EV kit's switching frequency is set at 2.2MHz for both buck converters. Various jumpers are provided to help evaluate features of the MAX17233 IC.

## Features

- Dual, Synchronous Step-Down Controllers Operate at 180° Out-of-Phase to Reduce Switching Noise
- 6V to 36V Wide Input Supply Range
- Buck  Output  Voltage:  5V  and  3.3V  Fixed/Adjustable Between 1V and 10V
- Current-Mode  Controllers  with  Forced-PWM  and Skip Modes
- Resistor-Configurable  Frequency  Between  1MHz and 2.2MHz
- 89% Peak Efficiency @ 6V Input in Skip-Mode
- FSYNC Input and Power-Good Output
- Proven 4-Layer 2oz Copper PCB Layout
- Demonstrates 2800mil x 1300mil Solution Size
- Fully Assembled and Tested

## EV Kit Contents

- MAX17233 EV Kit Board

Ordering Information appears at end of data sheet.

Evaluates: MAX17233, MAX17232

## Quick Start

## Recommended Equipment

- MAX17233 EV kit
- 6V to 36V, 15A power supply
- Two voltmeters
- Two electronic loads capable of sinking 5A each

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to activate the board. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that all jumpers are in their default configurations according to Table 1.
- 2) Connect  the  positive  and  negative  terminals  of  the power supply to the VBAT and PGND banana jacks, respectively.
- 3) Connect  the  positive  terminal  of  the  first  electronic load to the V OUT1  banana jack. Connect the ground terminal of the electronic load to the corresponding PGND banana jack.
- 4) Connect the positive terminal of the second electronic load to the V OUT2  banana jack. Connect the ground terminal of the electronic load to the corresponding PGND banana jack.
- 5) Set the power-supply voltage to 14V.
- 6) Turn on the power supply.
- 7) Enable the electronic loads.
- 8) Verify that V OUT1  is approximately 5V.
- 9) Verify that V OUT2  is approximately 3.3V.

<!-- image -->

## Table 1. Default Jumper Settings

| JUMPER   | DEFAULT SHUNT POSITION   | FUNCTION                                            |
|----------|--------------------------|-----------------------------------------------------|
| JU1, JU2 | 1-2                      | Buck outputs enabled.                               |
| JU6      | 1-2                      | Forced-PWM mode.                                    |
| JU7      | 1-2                      | Switches to EXTVCC. Internal regulator disabled.    |
| JU8, JU9 | Installed                | PGOOD_ pulls up to BIAS when OUT_ is in regulation. |

## Detailed Description of Hardware

The  MAX17233  EV  kit,  which  evaluates  the  MAX17233 high-voltage,  dual  synchronous  step-down  controller,  can supply up to two rails. The EV kit includes two current-mode buck outputs that are fixed to 5V and 3.3V, or configurable from 1V to 10V with external resistor-dividers. The current capability is 5A per rail. Both outputs are current limited and can  be  controlled  independently  through  their  respective enable inputs EN\_.

## Switching Frequency/External Synchronization

The  EV  kit  switching  frequency  can  be  adjusted  from 1MHz to 2.2MHz by changing the FOSC resistor R136. The EV kit can also be synchronized to an external clock by  connecting  the  external  clock  signal  to  the  FSYNC test point and AGND. Refer to the Switching Frequency/ External  Synchronization section  of  the  MAX17233  IC data sheet for more details.

## Enable Control

The EV kit features jumper JU1 to independently control the enable input of V OUT1  and jumper JU2 to control the enable  input  of  V OUT2 .  Connect  the  EN\_  pin  to  V BAT (pins  1-2)  to  enable  V OUT \_.  Connect  the  EN\_  pin  to PGND (pins 2-3) to disable V OUT \_.  See Table 2.

## Mode of Operation

The  EV  kit  features  jumper  JU6  to  configure  the  mode switch-control input (Table 3). Drive FSYNC high (pins 1-2 of JU6) to enable forced-PWM mode. Drive FSYNC low (pins 2-3 of JU6) to enable skip mode under light loads.

## EXTVCC Switchover Comparator

The internal linear regulator can be bypassed by connecting an external supply (3.1V to 5.2V) or the output of one of the buck converters to EXTVCC. BIAS internally switches to  EXTVCC  and  the  internal  linear  regulator  turns  off. If  V EXTVCC   drops  below  V TH,EXTVCC   =  3.1V(min),  the internal  regulator  enables  and  switches  back  to  BIAS. See Table 4.

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

* Default configuration.

## Buck Output Monitoring (PGOOD\_)

The  EV  kit  provides  two  power-good  output  test  points (PGOOD1 and PGOOD2) to monitor the status of the two buck  outputs  (OUT1  and  OUT2).  Each  PGOOD\_  goes high (high impedance) when the corresponding regulator output voltage is in regulation. Each PGOOD\_ goes low when  the  corresponding  regula  tor  output  voltage  drops below 15% (typ) or rises above 10% (typ) of its nominal regulated voltage. PGOOD\_ asserts low during soft-start

## MAX17233 Evaluation Kit

and  in  shutdown.  PGOOD\_  becomes  high  impedance when OUT\_ is in regulation. To obtain a logic signal, pull up PGOOD\_ to BIAS by installing shunts on JU8 and JU9.

## Setting the Output Voltage in Buck Converters

To  externally  adjust  the  output  voltage  OUT1  between  1V and 10V, remove R122. Connect a resistive divider from the output OUT1 to FB1 to AGND. Place appropriate resistors in positions R119 and R120 according to the following equation:

<!-- formula-not-decoded -->

where V FB1  = 1V (typ).

To  externally  adjust  the  output  voltage  OUT2  between 1V  and  10V,  remove  R134.  Connect  a  resistive  divider from the output OUT2 to FB2 to AGND. Place appropriate resistors  in  positions  R131  and  R132  according  to  the following equation:

<!-- formula-not-decoded -->

where V FB2  = 1V (typ).

## Evaluating the MAX17232 on the MAX17233 EV Kit

The  MAX17233  EV  kit  can  be  modified  to  operate  the MAX17232.  The  MAX17232  operates  at  a  switching frequency  of  400kHz,  which  requires  a  change  in  the following components:

- 1)  Replace U1 with the MAX17232 IC.
- 2)  Replace R136 (R FOSC ) with 80.6kΩ to achieve 400kHz switching frequency.
- 3)  Replace the buck inductors (L7, L8) with a 6.8µH 7A inductor.

Contact  Technical  Support  at www.maximintegrated. com/support for any further questions.

## Component Suppliers

| SUPPLIER                               | WEBSITE               |
|----------------------------------------|-----------------------|
| NXP                                    | www.nxp.com           |
| Fairchild Semiconductor                | www.fairchildsemi.com |
| IRC, Inc.                              | www.irctt.com         |
| Murata Electronics North America, Inc. | www.murata.com        |
| Panasonic Corp.                        | www.panasonic.com     |
| TDK Corp.                              | www.component.tdk.com |
| Vishay                                 | www.vishay.com        |

Note:

Indicate that you are using the MAX17233 when contacting these component suppliers.

## Component Information, PCB Layout, and Schematic

See the following links for component information, PCB layout diagrams, and schematic.

- MAX17233 EV BOM
- MAX17233 EV PCB Layout
- MAX17233 EV Schematic
- MAX17233 EV Minimal Component Schematic

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17233EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX17233, MAX17232

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses aUe iPSOieG. 0a[iP ,QteJUateG UeVeUveV the UiJht to chaQJe the ciUcXitU\ aQG VSeci¿catioQV withoXt Qotice at aQ\ tiPe.

Evaluates: MAX17233, MAX17232

## MAX17233EVKIT#: Rev A

| Item Component Description                                      |   Qty | Reference Designators            | Manufacturer         | Part Number         |
|-----------------------------------------------------------------|-------|----------------------------------|----------------------|---------------------|
| 0001 63MIL DRILL SIZE test point (BLK)                          |     1 | AGND                             | Keystone Electronics | 5011                |
| 0002 63MIL DRILL SIZE test points (RED)                         |     3 | FSYNC, PGOOD1 TEST, PGOOD2 TEST  | Keystone Electronics | 5010                |
| 0003 0.1uF±10%, 50V X7R ceramic capacitors (0603)               |     5 | C1, C2, C3, C75, C83             | Murata               | GRM188R71H104K      |
| 0004 47uF ±20%, 16V X7R ceramic capacitors (2220)               |     4 | C76, C77, C84, C85               | TDK                  | CGA9N3X7R1C476M     |
| 0005 4700pF ± 10% 50V X7R ceramic capacitors (0402)             |     2 | C78, C86                         | Murata               | GRM155R71H472K      |
| 0006 22pF ± 5% 50V C0G ceramic capacitor (0402)                 |     1 | C79                              | Murata               | GRM1555C1H220J      |
| 0007 6.8uF ± 10%, 16V X7R ceramic capacitor (1206)              |     1 | C81                              | TDK                  | C3216X7R1C685K      |
| 0008 2.2uF ± 10%, 10V X7R ceramic capacitor (0603)              |     1 | C82                              | Murata               | GRM188R71A225K      |
| 0009 33pF ± 5% 50V C0G ceramic capacitor (0402)                 |     1 | C87                              | Murata               | GRM1555C1H330J      |
| 0010 47uF, 50V ±20% aluminum electrolytic capacitor (8.0x6.2mm) |     1 | C88                              | Panasonic            | EEEFK1H470P         |
| 0011 4.7uF±10%, 50V X7R ceramic capacitors (1210)               |     6 | C90-C93, C97, C116               | Murata               | GCM32ER71H475KA55L  |
| 0012 200mA, 30V Schottky diodes (SOT23)                         |     2 | D20, D21                         | Fairchild            | BAT54               |
| 0013 5A, 40V Schottky Diodes (SOD-128)                          |     2 | D22, D23                         | NXP                  | PMEG4050EP          |
| 0014 3-pin headers (CUT TO FIT)                                 |     3 | JU1, JU2, JU6                    | SULLINS              | PEC36SAAN           |
| 0015 4-pin header (CUT TO FIT)                                  |     1 | JU7                              | SULLINS              | PEC36SAAN           |
| 0016 2-pin headers (CUT TO FIT)                                 |     2 | JU8, JU9                         | SULLINS              | PEC36SAAN           |
| 0017 2.2uH 12A power inductors                                  |     2 | L7, L8                           | Vishay               | IHLP4040DZER2R2M01  |
| 0018 40V, 7.6A N-channel MOSFETs (8-SOIC)                       |     4 | Q13-Q16                          | Fairchild            | FDMC8015L           |
| 0019 JACKs, BANNANA, UNINSULATED, PANEL MOUNT                   |     6 | PGND (3x), VBAT, VOUT1, VOUT2    | JOHNSON              | 108-0740-001        |
| 0020 1k Ω  5% resistors (0603)                                 |     2 | R1, R2                           | Any                  | Any                 |
| 0021 0 Ω  5% resistors (0603)                                  |     8 | R113-R115, R122, R125-R127, R134 | Any                  | Any                 |
| 0022 0.012 Ω , ±1%, 1W sense resistors (2010)                   |     2 | R116, R128                       | IRC                  | LRF2010LF-01-R012-F |
| 0023 22.1k Ω  1% resistor (0603)                               |     1 | R123                             | Any                  | Any                 |
| 0024 1 Ω ±5%, resistor (0603)                                   |     1 | R124                             | Any                  | Any                 |
| 0025 14k Ω  1% resistor (0603)                                 |     1 | R135                             | Any                  | Any                 |
| 0026 13.7k Ω 1% resistor (0603)                                 |     1 | R136                             | Any                  | Any                 |
| 0027 100k Ω  1% resistor (0603)                                |     1 | R137                             | Any                  | Any                 |
| 0028 51.1k Ω  %resistors (0603)                               |     2 | R156, R157                       | Any                  | Any                 |
| 0029 Dual Buck (28-pinTQFN 5x5x0.8mm)                           |     1 | U1                               | Maxim                | MAX17233ETIR+       |
| Not Installed Capacitors (0603)                                 |     0 | C4, C5, C102, C103               |                      |                     |
| Not Installed Capacitors (2220)                                 |     0 | C117, C118                       |                      |                     |
| Not Installed Resistors (0603)                                  |     0 | R119, R120, R131, R132           |                      |                     |
| 0030 Shunts                                                     |     6 | See Jumper Table                 | Kycon                | SX1100-B            |
| 0031 PC board: MAX17233 EV KIT                                  |     1 | 2 oz Cu                          | Network PCB          | MAX17233 EV KIT     |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->