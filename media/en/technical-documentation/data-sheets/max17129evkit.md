<!-- lastmod 2022-08-03 -->
<!-- image -->

- S 3V to 26V Input Range
- S Drives Six Strings of 10 WLEDs
- S Full-Scale LED Current Adjustable from 10mA to 45mA
- S Adjustable Switching Frequency of 500kHz or 1MHz
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                      |
|----------------|-------|--------------------------------------------------|
| D2-D61         |    60 | 3.5V, 20mA white LEDs                            |
| FSEL           |     0 | Not installed, test point                        |
| L1             |     1 | 10 F H, 1.2A inductor Sumida CR6D09HPNP-100MC    |
| JU1-JU7        |     7 | 3-pin headers                                    |
| JU8-JU15, JU17 |     9 | 2-pin headers                                    |
| JU16           |     0 | Not installed, 2-pin header- shorted by PC trace |
| R1             |     1 | 500k I multiturn potentiometer                   |
| R2             |     1 | 39k I Q 5% resistor (0603)                       |
| R3             |     1 | 10k I Q 5% resistor (0603)                       |
| R4             |     1 | 300k I Q 5% resistor (0603)                      |
| R5             |     1 | 10 I Q 5% resistor (0603)                        |
| R6-R11         |     0 | Not installed, resistors (0603)                  |
| U1             |     1 | White LED driver (16 TQFN EP) Maxim MAX17129ETE+ |
| -              |    16 | Shunts                                           |
| -              |     1 | PCB: MAX17129 EVALUATION KIT+                    |

## Component Suppliers

| SUPPLIER                                    | PHONE        | WEBSITE                     |
|---------------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc.      | 770-436-1300 | www.murata-northamerica.com |
| Sumida Corp.                                | 847-545-6700 | www.sumida.com              |
| Toshiba America Electronic Components, Inc. | 949-623-2900 | www.toshiba.com/taec        |

Note: Indicate that you are using the MAX17129 when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX17129 Evaluation Kit

## Evaluates: MAX17129/MAX17149

## General Description

The MAX17129 evaluation kit (EV kit) provides a proven design to evaluate the MAX17129 high-efficiency driver for  white  light-emitting  diodes  (WLEDs).  The  EV  kit utilizes  a  step-up  DC-DC  converter  to  generate  the voltage required to drive up to six strings of 10 surfacemount WLEDs. The EV kit uses a 3V to 26V input supply and can be configured to provide an adjustable 10mA to 45mA full-scale LED current.

Installed  on  the  EV  kit  is  the  MAX17129ETE+.  Contact the  factory  for  free  samples  of  the  pin-compatible MAX17149ETE+.

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C1            |     1 | 4.7 F F Q 10%, 50V X7R ceramic capacitor (1210) Murata GRM32ER71H475K |
| C2, C8-C19    |     0 | Not installed, ceramic capacitors (0603)                              |
| C3            |     1 | 0.1 F F Q 10%, 50V X5R ceramic capacitor (0603) Murata GRM188R61H104K |
| C4            |     1 | 1 F F Q 10%, 16V X5R ceramic capacitor (0603) Murata GRM188R61C105K   |
| C5            |     1 | 2.2 F F Q 10%, 50V X7R ceramic capacitor (1210) Murata GRM32ER72A225K |
| C6, C7        |     2 | 1 F F Q 10%, 50V X7R ceramic capacitors (0805)                        |
| C20           |     0 | Not installed, ceramic capacitor (0805)                               |
| D1            |     1 | 2A, 40V Schottky diode (M flat) Toshiba CMS11                         |

## Features

## Procedure

## MAX17129 Evaluation Kit

## Evaluates: MAX17129/MAX17149

## Quick Start

- 1)  Verify that all jumpers are in their default positions, as shown in Table 1.

## Required Equipment

- MAX17129	EV	kit
- 3 V to 26V DC power supply (VIN)
- 2)  Connect  the  positive  terminal  of  the  power  supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad on the EV kit.
- 3)  Set the VIN power supply to 12V and enable its output.

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 4)  Verify that the six strings of WLEDs are turned on.

## Table 1. Jumper Descriptions (JU1-JU15, JU17)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                            |
|----------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects WLED string D2-D11 to the FB1 pin of the device.                                                                                                              |
| JU1      | 2-3              | Connects the FB1 pin of the device to GND, which disables WLED string D2-D11.                                                                                          |
| JU1      | Open             | User-supplied WLED string can be connected to the FB1 PCB pad on the EV kit.                                                                                           |
| JU2      | 1-2*             | Connects WLED string D12-D21 to the FB2 pin of the device.                                                                                                             |
| JU2      | 2-3              | Connects the FB2 pin of the device to GND, which disables WLED string D12-D21.                                                                                         |
| JU2      | Open             | User-supplied WLED string can be connected to the FB2 PCB pad on the EV kit.                                                                                           |
| JU3      | 1-2*             | Connects WLED string D22-D31 to the FB3 pin of the device.                                                                                                             |
| JU3      | 2-3              | Connects the FB3 pin of the device to GND, which disables WLED string D22-D31.                                                                                         |
| JU3      | Open             | User-supplied WLED string can be connected to the FB3 PCB pad on the EV kit.                                                                                           |
| JU4      | 1-2*             | Connects WLED string D32-D41 to the FB4 of the device.                                                                                                                 |
| JU4      | 2-3              | Connects the FB4 pin of the device to GND, which disables WLED string D32-D41.                                                                                         |
|          | Open             | User-supplied WLED string can be connected to the FB4 PCB pad on the EV kit.                                                                                           |
| JU5      | 1-2*             | Connects WLED string D42-D51 to the FB5 of the device.                                                                                                                 |
| JU5      | 2-3              | Connects the FB5 pin of the device to GND, which disables WLED string D42-D51.                                                                                         |
|          | Open             | User-supplied WLED string can be connected to the FB5 PCB pad on the EV kit.                                                                                           |
|          | 1-2*             | Connects WLED string D52-D61 to the FB6 of the device.                                                                                                                 |
| JU6      | 2-3              | Connects the FB6 pin of the device to GND, which disables WLED string D52-D61.                                                                                         |
| JU6      | Open             | User-supplied WLED string can be connected to the FB6 PCB pad on the EV kit.                                                                                           |
| JU7      | 1-2              | Connects the FSEL pin of the device to VCC, which sets the switching frequency to 500kHz.                                                                              |
| JU7      | 2-3*             | Connects the FSEL pin of the device to GND, which sets the switching frequency to 1MHz.                                                                                |
| JU8      | 1-2*             | Connects the EN pin of the device through a pullup resistor to VIN to enable the device.                                                                               |
| JU8      | Open             | Allows the user to externally drive EN.                                                                                                                                |
| JU9      | 1-2*             | Connects the output voltage of the device to the six strings of WLEDs.                                                                                                 |
| JU9      | Open             | Disconnects the output voltage of the device from the six strings of WLEDs D2-D61.                                                                                     |
| JU10     | 1-2              | Removes WLEDs D59, D60, and D61 from the string of WLEDs going to the FB6 pin of the device. When installing the MAX17149, the shunt is only allowed in this position. |
| JU10     | Open*            | Connects WLEDs D59, D60, and D61 to the string of WLEDs going to the FB6 pin of the device.                                                                            |
| JU11     | 1-2              | Removes WLEDs D49, D50, and D51 from the string of WLEDs going to the FB5 pin of the device.                                                                           |
| JU12     | Open*            | Connects WLEDs D49, D50, and D51 to the string of WLEDs going to the FB5 pin of the                                                                                    |
| JU12     |                  | device.                                                                                                                                                                |
|          | 1-2              | Removes WLEDs D39, D40, and D41 from the string of WLEDs going to the FB4 pin of the device. When installing the MAX17149, the shunt is only allowed in this position. |
|          | Open*            | Connects WLEDs D39, D40, and D41 to the string of WLEDs going to the FB4 pin of the device.                                                                            |
| JU13     | 1-2              | Removes WLEDs D29, D30, and D31 from the string of WLEDs going to the FB3 pin of the device. When installing the MAX17149, the shunt is only allowed in this position. |
| JU13     | Open*            | Connects WLEDs D29, D30, and D31 to the string of WLEDs going to the FB3 pin of the device.                                                                            |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17129 Evaluation Kit

## Evaluates: MAX17129/MAX17149

## Table 1. Jumper Descriptions (JU1-JU15, JU17) (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                            |
|----------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU14     | 1-2              | Removes WLEDs D19, D20, and D21 from the string of WLEDs going to the FB2 pin of the device. When installing the MAX17149, the shunt is only allowed in this position. |
| JU14     | Open*            | Connects WLEDs D19, D20, and D21 to the string of WLEDs going to the FB2 pin of the device.                                                                            |
| JU15     | 1-2              | Removes WLEDs D9, D10, and D11 from the string of WLEDs going to the FB1 pin of the device. When installing the MAX17149, the shunt is only allowed in this position.  |
| JU15     | Open*            | Connects WLEDs D9, D10, and D11 to the string of WLEDs going to the FB1 pin of the device.                                                                             |
| JU17     | 1-2              | Connects the IN pin and VCC pin of the device together. The voltage applied at the VIN PCB pad of the EV kit must be between 3V to 5.5V.                               |
| JU17     | Open*            | Disconnects the IN pin and VCC pin of the device together. The voltage applied at the VIN PCB pad of the EV kit must be between 6V to 26V.                             |

* Default position.

## Detailed Description of Hardware

The  MAX17129  EV  kit  operates  on  a  3V  to  26V  wideinput voltage range and provides an adjustable 10mA to 45mA full-scale LED current. The EV kit utilizes a step-up DC-DC  converter  to  generate  the  voltage  required  to drive up to six strings of 10 surface-mount WLEDs.

## Input Supply

When jumper JU17 doesn't have a shunt installed,  the input supply range is 6V to 26V at the VIN PCB pad on the  EV  kit.  If  JU17  is  installed,  the  input  supply  range changes to 3V to 5.5V.

## White LED String Configuration

As configured, the EV kit is assembled with six strings of 10 WLEDs. Each string has an associated 3-pin header (JU1-JU6) and feedback pin (FB1-FB6). The function of the 3-pin jumpers is summarized in Table 1. To evaluate the EV kit with off-board WLED strings, see the Off-Board White LED String Configuration section.

## Off-Board White LED String Configuration

The  EV  kit  can  also  be  used  to  drive  off-board  WLED strings.  To  evaluate  external  WLED strings, reconfigure shunts from jumpers JU1-JU6 (see Table 1). Removing the  shunt  completely  disconnects  the  on-board  WLED strings between the output and feedback pins, allowing for  the  connection  of  external  WLED  strings.  For  each external  WLED  string,  connect  the  cathode  terminal of  the  string  to  the  corresponding  feedback  PCB  pad (FB1-FB6) on the EV kit and connect the anode terminal of the string to the VOUT PCB pad on the EV kit. Once the external WLED strings are connected between the VOUT PCB  pad  and  the  FB\_  pins,  the  EV  kit  can  be  evaluated in the same manner as the on-board WLED strings. Evaluating more than 10 WLEDs per string could require component changes. Refer to the MAX17129/MAX17149 IC data sheet for component selections.

<!-- image -->

## Enable (EN)

The  device  is  in  normal  operation  when  a  shunt  is installed  on  jumper JU8, which drives the EN pin high. To  place  the  device  into  shutdown,  remove  the  shunt from JU8.

## Brightness Control (BRT)

To  control  the  brightness  of  the  WLEDs,  apply  a  PWM signal between 0.1kHz and 25kHz on the BRT PCB pad on the EV kit.

## LED String Capacitance

In some LCD panel applications, a 0.1 F F (typ) capacitor (CLED)  is  placed  in  parallel  with  each  WLED  string  to improve ESD immunity. As such, the EV kit provides a capacitor footprint across each WLED string for optional CLED.

## Full-Scale LED Current-Adjustment (ISET)

The EV kit uses resistors R1 and R2 to set the full-scale LED current (ILED\_FS). The resistance from the ISET pin of  the  device  to  GND  controls  the  full-scale  current  in each WLED string according to the following equation:

<!-- formula-not-decoded -->

where  R1  is  a  500k I potentiometer  and  R2  is  a  39k I resistor.

## Switching-Frequency Selection (FSEL)

The  EV  kit  can  operate  from  1MHz  or  500kHz  using jumper JU7. Place a shunt on JU7 in the 1-2 position and the switching frequency set to 500kHz. When JU7 is the 2-3 position, 1MHz switching frequency is achieved.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17129 Evaluation Kit

## Evaluates: MAX17129/MAX17149

<!-- image -->

Figure 1. MAX17129 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17129 Evaluation Kit

## Evaluates: MAX17129/MAX17149

Figure 2. MAX17129 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3. MAX17129 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17129 Evaluation Kit

## Evaluates: MAX17129/MAX17149

Figure 4. MAX17129 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17129EVKIT+ | EV Kit |

+ Denotes lead(Pb)-free and RoHS compliant.

## MAX17129 Evaluation Kit

## Evaluates: MAX17129/MAX17149

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8