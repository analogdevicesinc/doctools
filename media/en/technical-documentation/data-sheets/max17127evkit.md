<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX17127 Evaluation Kit

## General Description

## Features

The MAX17127 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that evaluates the highefficiency MAX17127 white LED (WLED) driver. The EV kit  utilizes  a  step-up  DC-DC  converter  to  generate  the voltage required to drive up to six strings of 10 surfacemount WLEDs. The EV kit uses a 5V to 26V input power supply and can be configured to provide an adjustable 10mA to 30mA full-scale LED current.

- S 5V to 26V Input Range
- S WLED Drives Up to 30mA/String
- S Drives Six Strings of 10 WLEDs
- S Full-Scale LED Current Adjustable from 10mA to 30mA
- S 1MHz PWM Switching Frequency Adjustable from 250kHz to 1MHz (Component Change Required)
- S All Components &lt; 1mm Height
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17127EVKIT+ | EV Kit |

## Component List

| DESIGNATION         |   QTY | DESCRIPTION                                                                                   |
|---------------------|-------|-----------------------------------------------------------------------------------------------|
| C1                  |     1 | 0.1 F F Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K TDK C1608X7R1H104K      |
| C2-C8, C10-C16, C24 |     0 | Not installed, ceramic capacitors (0603)                                                      |
| C9                  |     1 | 510pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H511J AVX 06035A511JA12A         |
| C17                 |     1 | 1 F F Q 10%, 10V X7R ceramic capacitor (0603) Taiyo Yuden LMK107BJ105KA Murata GRM188R71A105K |
| C18, C22, C23       |     0 | Not installed, ceramic capacitors (1206)                                                      |
| C19, C21            |     2 | 2.2 F F Q 20%, 50V X7R ceramic capacitors (1206) Murata GRM31CR71H225K                        |
| C20                 |     1 | 4.7 F F Q 10%, 25V X5R ceramic capacitor (1206) Murata GRM319R61E475K                         |

| DESIGNATION                |   QTY | DESCRIPTION                                                              |
|----------------------------|-------|--------------------------------------------------------------------------|
| D1                         |     1 | 0.7A, 60V Schottky diode (US Flat) Toshiba CUS04                         |
| D2-D61                     |    60 | White LEDs Nichia NSSW008CT-P1 OPTEK OVSRWACR6                           |
| JU1, JU6, JU8-JU12         |     7 | 3-pin headers                                                            |
| JU2                        |     0 | Not installed, 2-pin header- short PC trace                              |
| JU7                        |     0 | Not installed, 3-pin header (pins 2-3-short PC trace)                    |
| JU4, JU13-JU19, JU20, JU21 |    10 | 2-pin headers                                                            |
| L1                         |     1 | 10 F H, 1.2A power inductor Sumida CR6D09HPNP-100MC TDK VLP6810T-100M1R2 |
| R1, R8, R10                |     3 | 100k I Q 5% resistors (0603)                                             |
| R2                         |     1 | 1M I Q 5% resistor (0603)                                                |
| R3                         |     1 | 0 I Q 5% resistor (0603)                                                 |
| R4                         |     1 | 10k I Q 5% resistor (0603)                                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX17127 Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                            |
|---------------|-------|----------------------------------------|
| R5            |     1 | 82.5k I Q 1% resistor (0603)           |
| R6            |     1 | 2.21M I Q 1% resistor (0603)           |
| R7            |     1 | 71.5k I Q 1% resistor (0603)           |
| R11           |     0 | Not installed, resistor (0603)         |
| R12           |     0 | Not installed, multiturn potentiometer |
| R14           |     2 | 500k I multiturn potentiometer         |

| DESIGNATION   |   QTY | DESCRIPTION                                             |
|---------------|-------|---------------------------------------------------------|
| U1            |     1 | Six-string WLED driver (20 TQFN-EP*) Maxim MAX17127ETP+ |
| -             |    17 | Shunts                                                  |
| -             |     1 | PCB: MAX17127 EVALUATION KIT+                           |

## Component Suppliers

| SUPPLIER                                    | PHONE        | WEBSITE                     |
|---------------------------------------------|--------------|-----------------------------|
| AVX Corporation                             | 843-946-0238 | www.avxcorp.com             |
| Murata Electronics North America, Inc.      | 770-436-1300 | www.murata-northamerica.com |
| Nichia Corp.                                | 248-352-6575 | www.nichia.com              |
| OPTEK Technologies                          | 972-323-2200 | www.optekinc.com            |
| Sumida Corp.                                | 847-545-6700 | www.sumida.com              |
| Taiyo Yuden                                 | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                                   | 847-803-6100 | www.component.tdk.com       |
| Toshiba America Electronic Components, Inc. | 949-623-2900 | www.toshiba.com/taec        |

Note: Indicate that you are using the MAX17127 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX17127 EV kit
- 5V to 26V power supply (VIN)

## Table 1. Default Shunt Positions

| JUMPER                           | SHUNT POSITION   |
|----------------------------------|------------------|
| JU1, JU6, JU8-JU12               | 1-2              |
| JU4, JU14, JU15, JU17-JU20, JU21 | Not installed    |
| JU13, JU16                       | Installed        |

## Detailed Description of Hardware

The MAX17127 evaluation kit (EV kit) operates on a 5V to  26V  wide-input  voltage  range  and  provides  adjustable  10mA  to  30mA  full-scale  LED  current.  The  EV  kit utilizes  a  step-up  DC-DC  converter  to  generate  the voltage required to drive up to six strings of 10 surfacemount WLEDs.

<!-- image -->

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1) On the EV kit, verify that the shunts are installed, as shown in Table 1.
- 2) Connect  the  positive  terminal  of  the  VIN  power supply to the VIN pad. Connect the ground terminal of the VIN power supply to the PGND pad.
- 3) Set the VIN power supply to 12V and enable its output.
- 4) Verify that the six strings of WLEDs are on.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17127 Evaluation Kit

## White LED String Configuration

As configured, the EV kit is assembled with six strings of 10 WLEDs. Each string has an associated 3-pin header (JU1,  JU8-JU12)  and  feedback  pin  (FB1-FB6).  The function of the 3-pin jumpers is summarized in Table 2. To evaluate the EV kit with off-board WLED strings, see the Off-Board WLED String Configuration section.

## Off-Board WLED String Configuration

The  EV  kit  can  also  be  used  to  drive  off-board  WLED strings.  To  evaluate  external  WLED  strings,  reconfigure shunts  from  jumpers  JU1  and  JU8-JU12.  See  Table  2 for  jumpers  JU1  and  JU8-JU12  configuration  and  Table 3  for  jumper  JU13  configuration.  Removing  these  jumpers  effectively  disconnects  the  on-board  WLED  strings between  the  output  and  feedback  pins,  allowing  the connection  of  external  WLED  strings.  For  each  external WLED string, connect the cathode terminal of the string to the corresponding feedback pad (FB1-FB6) and connect the anode terminal of the string to the VOUT pad. Once the external WLED strings are connected between the VOUT pad and the FB1-FB6 pins, the EV kit can be evaluated in the same manner as the on-board WLED strings. Evaluating more  than  10  WLEDs  per  string  may  require  component  changes.  Refer  to  the  MAX17127  IC  data  sheet  for component selections.

## Enable (EN)

The EV kit features 2-pin jumper JU16 to control the activelow shutdown input. Drive EN high to place the device in normal operation. If the JU16 shunt is removed, an internal 200k I (typ) pulldown resistor places the device in disabled mode. See Table 4 for shunt positions.

## Table 2. Jumper Function (JU1, JU8-JU12)

| SHUNT POSITION   | FB_ PIN                             | STRING_                       |
|------------------|-------------------------------------|-------------------------------|
| 1-2*             | Connected to cathode of WLED string | Enabled                       |
| 2-3              | Connected to AGND                   | Disabled                      |
| Not installed    | Connect to an external WLED string  | On-board WLED string not used |

* Default position.

## Table 3. Jumper Function (JU13)

| SHUNT POSITION   | VOUT                                         |
|------------------|----------------------------------------------|
| Installed*       | Connected to anodes of on-board WLED strings |
| Not installed    | Connect to anodes of off-board WLED strings  |

<!-- image -->

## Brightness Control by PWM Signal Input (PWM)

The  EV  kit  features  2-pin  jumper  JU20  to  implement brightness  control  through  the  PWM  signal  input.  See Table 5 for shunt positions.

## LED String Capacitance

In  some LCD panel applications, a 0.1 F F (typ) capacitor (CLED) is placed in parallel with each LED string to improve ESD immunity. As such, the EV kit provides a footprint across each LED string for optional CLED.

## Full-Scale LED Current Adjustment (ISET)

The EV kit features 3-pin jumper JU6, along with R8 and R14,  to  set  the  full-scale  LED  current.  The  resistance from ISET to AGND controls the full-scale current in each LED string according to the following equation:

<!-- formula-not-decoded -->

where R8 is a 100k I resistor and R14 is a 500k I potentiometer. See Table 6 for jumper JU6 settings.

## Switching-Frequency Selection (FSLCT)

The EV kit is configured to operate at 1MHz, but provides the option to set the switching frequency of the step-up DC-DC converter from 250kHz to 1MHz. The switching frequency is set by adjusting the resistance from FSLCT to AGND according to the following equation:

<!-- formula-not-decoded -->

Changing the switching frequency might require different  converter  components  (refer  to  the  MAX17127  IC data sheet for proper component selections).

## Table 4. Jumper Function (JU16)

| SHUNT POSITION   | EN PIN                       | MAX17127   |
|------------------|------------------------------|------------|
| Installed*       | Connected to VDDIO           | Enabled    |
| Not installed    | Internally connected to AGND | Disabled   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX17127 Evaluation Kit

Table 5. Jumper Function (JU20)

| SHUNT POSITION   | PWM PIN                                               | PWM DUTY CYCLE OF LED CURRENT         |
|------------------|-------------------------------------------------------|---------------------------------------|
| Installed        | Connected to AGND                                     | Zero                                  |
| Not installed*   | Connected to VDDIO through R2                         | Maximum (100%)                        |
| Not installed    | Connect to an exter- nal PWM signal (0.1kHz to 25kHz) | Follows the signal applied at PWM pad |

* Default position.

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 6. Jumper Function (JU6)

| SHUNT POSITION   | ISET PIN                             | I LED(MAX)                   |
|------------------|--------------------------------------|------------------------------|
| 1-2*             | Connected to AGND through R8 and R14 | Adjustable from 10mA to 30mA |
| 2-3              | Connected to AGND                    | 0.3mA (typ)                  |

* Default position.

<!-- image -->

## MAX17127 Evaluation Kit

<!-- image -->

Figure 1. MAX17127 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX17127 Evaluation Kit

Figure 2. MAX17127 EV Kit Component Placement Guide-Component Side

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17127 Evaluation Kit

<!-- image -->

Figure 3. MAX17127 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX17127 Evaluation Kit

Figure 4. MAX17127 EV Kit PCB Layout-Solder Side

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17127 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9