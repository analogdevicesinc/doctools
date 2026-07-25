<!-- lastmod 2022-08-03 -->
## General Description

The MAX8901 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that includes two circuits demonstrating the MAX8901A and the MAX8901B white LED (WLED) step-up DCDC converters. Both circuits share a central WLED string and each circuit is selected by on-board jumper positions. The MAX8901B circuit includes a pushbutton circuit  to  provide  single-wire  serial-pulse dimming control for the MAX8901B IC. To evaluate the MAX8901A dimming control, an externally applied PWM signal is required. Both evaluation circuits operate from an input voltage of 2.6V to 5.5V and deliver up to 25mA (MAX8901A) or 24.75mA (MAX8901B) of regulated output current to drive from 2 to 6 seriesconnected WLEDs.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8901EVKIT+ | EV Kit |

+Denotes lead-free and RoHS-compliant.

| DESIGNATION     |   QTY | DESCRIPTION                                                                                       |
|-----------------|-------|---------------------------------------------------------------------------------------------------|
| C1, C5, C9, C10 |     4 | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K or equivalent                      |
| C2              |     1 | 1µF ±10%, 25V X5R ceramic capacitor (0603) TDK C1608X5R1E105M Murata GRM188R61E105K or equivalent |
| C3, C7, C12     |     3 | 0.022µF ±10%, 10V X5R ceramic capacitors (0402) Murata GRM155R61A223K or equivalent               |
| C4, C8          |     0 | Not installed, capacitors (0603)                                                                  |
| C6              |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H104K or equivalent                     |
| C11, C13, C14   |     3 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K or equivalent                    |
| D1, D8          |     2 | 40V, 500mA Schottky diodes (SOD323) Central Semiconductor CMDSH05-4, lead free                    |
| D2-D7           |     6 | White LEDs Nichia NSCW215T                                                                        |

<!-- image -->

## Features

- ♦ Two Fully Assembled Circuits with Shared WLEDs
- ♦ Drives from 2 to 6 WLEDs
- ♦ Direct PWM (MAX8901A) or Single-Wire Serial Dimming Control (MAX8901B)
- ♦ On-Board Pushbutton for Single-Wire Serial Dimming Control (MAX8901B)
- ♦ Constant-Current Regulation for Uniform WLED Illumination
- ♦ High 87% WLED Efficiency
- ♦ 2.6V to 5.5V Input Range
- ♦ Input Overvoltage Lockout Protection (6.2V min)
- ♦ 25V (typ) Maximum Output with Overvoltage Protection
- ♦ Additional Input (VEXT\_) for Powering WLEDs from a Separate Supply
- ♦ Small, Low-Profile Components
- ♦ Lead-Free and RoHS-Compliant
- ♦ Fully Assembled and Tested

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                 |
|---------------|-------|---------------------------------------------------------------------------------------------|
| JU1, JU2, JU4 |     3 | 3-pin headers Sullins PEC36SAAN (36-pin strip, cut to size as needed) Digi-Key S1012E-02-ND |
| JU3, JU5      |     2 | 2-pin headers Sullins PEC36SAAN (36-pin strip, cut to size as needed) Digi-Key S1012E-02-ND |
| JU6, JU7, JU8 |     0 | Not installed, PCB connections- shorted (0402)                                              |
| L1, L2        |     2 | 22µH, 470mA inductors TOKO 1069AS-220M                                                      |
| R1, R4        |     0 | Not installed, resistors-PCB short (0402)                                                   |
| R2, R5, R6    |     3 | 100k Ω ±1% resistors (0402)                                                                 |
| R3            |     1 | 20 Ω ±1% resistor (0402)                                                                    |
| R7, R8        |     2 | 10k Ω ±1% resistors (0402)                                                                  |
| R9            |     1 | 221k Ω ±1% resistor (0402)                                                                  |
| S1            |     1 | Momentary pushbutton switch Panasonic EVQ-PHP03T                                            |
| U1            |     1 | Maxim WLED step-up converter MAX8901BETA+ (8-pin TDFN, 2mm x 2mm)                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX8901 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| U2            |     1 | Maxim WLED step-up converter MAX8901AETA+ (8-pin TDFN, 2mm x 2mm)                |
| U3            |     1 | Maxim low-dropout linear regulator MAX8875EUK25+ (5-pin SOT23)                   |
| U4            |     1 | 74HC series monostable multivibrator Texas Instruments CD74HC123PW or equivalent |
| -             |     5 | Shunts, 2 position                                                               |

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- One variable DC power supply capable of supplying 2.6V to 5.5V at 500mA.
- For MAX8901A dimming-control evaluation: One logiclevel PWM signal generator with variable duty cycle at a frequency between 30kHz and 100kHz is required.

## MAX8901B Evaluation Procedure

The MAX8901 EV kit is fully assembled and tested and is  configured for the MAX8901B evaluation circuit by default. Follow the steps below to verify operation of the MAX8901B circuit. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  a  shunt  is  installed  across  pins  1-3  of jumper JU4 to enable the pushbutton circuit.
- 2) Verify that a shunt is installed on jumper JU5 to connect the pulse-generating circuit to the MAX8901B IC.
- 3) Verify that a shunt is installed from pins 1-3 of jumpers JU1 and JU2 to configure the WLED string for the MAX8901B circuit.
- 4) Preset the power-supply voltage between 2.6V and 5.5V.
- 5) Turn the power supply off. Do not turn on the power supply until all connections are completed.
- 6) Connect the positive terminal of the power supply to the VINB pad located on the EV kit. Connect the negative terminal of the power supply to the GNDB pad located on the EV kit. Note that that the GNDA and GNDB pads are isolated from each other.
- 7) Turn on the power supply. Verify that the WLEDs are brightly lit.
- 8) Dim the WLEDs in 0.75mA steps by repeatedly pressing pushbutton S1. Verify that the WLEDs dim and return to full brightness on the 33rd button press. See Table 1 for ILED steps.
- 9) Verify that the WLEDs turn off by removing the shunt from jumper JU5.

## Component Suppliers

| SUPPLIER                    | PHONE        | WEBSITE                    |
|-----------------------------|--------------|----------------------------|
| Central Semiconductor Corp. | 631-435-1110 | www.centralsemi.com        |
| Digi-Key Corp.              | 800-344-4539 | www.digikey.com            |
| Murata Mfg. Co., Ltd.       | 770-436-1300 | www.murata.com             |
| Nichia Corp.                | 248-349-9800 | www.nichia.com             |
| Panasonic Corp.             | 800-211-7262 | www.panasonic.com          |
| Sullins Electronics Corp.   | 760-744-0125 | www.sullinselectronics.com |
| TDK Corp.                   | 888-835-6646 | www.component.tdk.com      |
| Texas Instruments Inc.      | 972-644-5580 | www.ti.com                 |
| TOKO                        | 408-432-8281 | www.toko.com               |

Note: Indicate that you are using the MAX8901A/MAX8901B when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. MAX8901B WLED Current Steps

|   S1 PUSHBUTTON PRESS* |   I LED (mA) | PUSHBUTTON   |   I LED (mA) |
|------------------------|--------------|--------------|--------------|
|                      0 |        24.75 | 17           |        12.00 |
|                      1 |        24.00 | 18           |        11.25 |
|                      2 |        23.25 | 19           |        10.50 |
|                      3 |        22.50 | 20           |         9.75 |
|                      4 |        21.75 | 21           |         9.00 |
|                      5 |        21.00 | 22           |         8.25 |
|                      6 |        20.25 | 23           |         7.50 |
|                      7 |        19.50 | 24           |         6.75 |
|                      8 |        18.75 | 25           |         6.00 |
|                      9 |        18.00 | 26           |         5.25 |
|                     10 |        17.25 | 27           |         4.50 |
|                     11 |        16.50 | 28           |         3.75 |
|                     12 |        15.75 | 29           |         3.00 |
|                     13 |        15.00 | 30           |         2.25 |
|                     14 |        14.25 | 31           |         1.50 |
|                     15 |        13.50 | 32           |         0.75 |
|                     16 |        12.75 | 33**         |        24.75 |

## MAX8901A Evaluation Procedure

The MAX8901 EV kit is fully assembled and tested and is  configured for  the  MAX8901B evaluation circuit by default. Follow the steps below to verify operation of the MAX8901A circuit. Ensure that the power supply to the MAX8901B evaluation circuit is removed. Caution: Do not turn on the power supply until all connections are completed.

- 1) Configure the MAX8901 EV kit for the MAX8901A evaluation circuit by installing a shunt from pins 2-3 on jumpers JU1 and JU2.
- 2) Preset the power-supply voltage between 2.6V and 5.5V.
- 3) Turn the power supply off. Do not turn on the power supply until all connections are completed.
- 4) Connect the positive terminal of the power supply to the VINA pad located on the EV kit. Connect the negative terminal of the power supply to the GNDA pad located on the EV kit. Note that the GNDA and GNDB pads are isolated from each other.
- 5) Preset the PWM signal generator frequency between 30kHz and 100kHz. Set the PWM duty cycle to 100% and the PWM high voltage between 1.5V and VVINA. Turn the PWM signal generator output off.
- 6) Connect the positive lead of the PWM signal generator to the ONA pad. Connect the negative lead of the PWM signal generator to the GNDA pad.
- 7) Turn on the power supply. The WLEDs should not be illuminated.
- 8) Turn on the PWM signal generator output. Verify that the WLEDs are brightly illuminated.
- 9) Decrease the PWM duty cycle to 10%. Verify that the WLEDs dim.
- 10) Set the PWM duty cycle to 0% or turn off the PWM signal generator. Verify that the WLEDs turn off.

<!-- image -->

## Detailed Description

The MAX8901 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the MAX8901\_ white LED (WLED) step-up DC-DC converters. The EV kit includes two MAX8901 evaluation circuits to demonstrate  the  MAX8901A  (PWM  dimming)  and  the MAX8901B  (single-wire  serial  dimming).  The MAX8901A and the MAX8901B circuits share WLEDs to minimize parts count, and either circuit is selectable by jumper configuration. The EV kit is configured for the MAX8901B circuit by default. To configure the EV kit for the MAX8901A circuit, see the MAX8901A Evaluation

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8901 Evaluation Kit

## MAX8901 Evaluation Kit

Circuit section. When correctly configured, each MAX8901 circuit is isolated from each other. Ensure that  VINB and GNDB are used when evaluating the MAX8901B, and that VINA and GNDA are used when evaluating the MAX8901A.

The MAX8901\_ feature an internal soft-start that gradually  illuminates  the  WLEDs to eliminate inrush current during startup, input overvoltage protection (6.5V max) that prevents IC switching when the input voltage becomes too high, WLED overvoltage protection (25V typ) that latches off the IC when a WLED open-circuits, and a shutdown mode that reduces current to 0.01µA (typ). No WLED current is present in shutdown or during an overvoltage condition if the WLED string forward voltage is greater than the input supply voltage.

Table 2. Jumper Configurations

| JUMPER   | POSITION               | FUNCTION                                                                                                                                                      |
|----------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-3                    | Connects the MAX8901B to the anode side of the WLED string. Ensure that a shunt is installed on pins 1-3 of jumper JU1 to use the MAX8901B circuit.           |
| JU1      | 2-3                    | Connects the MAX8901A to the anode side of the WLED string. Ensure that a shunt is installed on pins 2-3 of jumper JU1 to use the MAX8901A circuit.           |
| JU2      | 1-3                    | Connects the MAX8901B to the cathode side of the WLED string. Ensure that a shunt is installed on pins 1-3 of jumper JU2 to use the MAX8901B circuit.         |
| JU2      | 2-3                    | Connects the MAX8901A to the cathode side of the WLED string. Ensure that a shunt is installed on pins 2-3 of jumper JU2 to use the MAX8901A circuit.         |
| JU3      | Installed              | Shorts out WLEDs D2 and D3 for 4 WLED operation.                                                                                                              |
| JU3      | Removed                | Configures on-board WLED string for 6 WLED operation.                                                                                                         |
| JU4      | 1-3                    | Enables the serial-pulse pushbutton circuit for the MAX8901B.                                                                                                 |
| JU4      | 2-3                    | Disables the serial-pulse pushbutton circuit.                                                                                                                 |
| JU5      | Installed              | Connects the serial-pulse pushbutton circuit to the MAX8901B ON terminal.                                                                                     |
| JU5      | Removed                | Disconnects the serial-pulse pushbutton circuit from the MAX8901B ON terminal.                                                                                |
| JU6      | Installed (PCB short)* | Connects MAX8901_ circuitry to the on-board WLEDs.                                                                                                            |
| JU6      | Removed (open)         | Disconnects MAX8901_ circuitry from on-board WLEDs for evaluation of external WLEDs. See the Using an External Supply for the WLEDs section for more details. |
| JU7      | Installed (PCB short)* | Selects VINB to supply the WLEDs when using the MAX8901B circuit.                                                                                             |
| JU7      | Removed (open)         | Selects VEXTB to supply the WLEDs when using the MAX8901B circuit. See the Using an External Supply for the WLEDs section for more details.                   |
| JU8      | Installed (PCB short)* | Selects VINA to supply the WLEDs when using the MAX8901A circuit.                                                                                             |
| JU8      | Removed (open)         | Selects VEXTA to supply the WLEDs when using the MAX8901A circuit. See the Using an External Supply for the WLEDs section for more details.                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8901B Evaluation Circuit

The MAX8901 EV kit is configured for the MAX8901B circuit by the default jumper configuration. Ensure that a  shunt  is  installed  between  pins  1-3  of  jumpers  JU1 and JU2 to use the MAX8901B circuit. Ensure that the input  power supply is connected between VINB and GNDB pads on the EV kit. Alternatively, the WLEDs can be supplied from a separate power supply using the VEXTB pad. See the Using an External Supply for the WLEDs section for more details. See Table 2 for jumper configurations.

Pushbutton S1 and associated circuitry (Figure 1) provide  the  single-wire  serial-pulse  interface  to  program the MAX8901B WLED current. To enable the pushbutton interface, install  a  shunt  from  pins  1-3  on  jumper JU4. Install  a  shunt  on  jumper  JU5  to  connect  the pushbutton circuit to  the  MAX8901B IC ON terminal.

<!-- image -->

When power is first applied to the MAX8901B, the WLEDs are set to maximum brightness (24.75mA). To dim the WLEDs, repeatedly press S1. Each pulse reduces the WLED current by 1/33 of maximum WLED current, corresponding to 0.75mA/step. On the  33rd  button  press,  the  WLEDs  will  return  to  full brightness. To turn the WLEDs off, remove the shunt from  jumper  JU5  to  pull  ONB  to  GNDB.  If  dimming control is not required, ONB works as a simple on/off control.  Drive  ONB  high  to  enable  the  WLEDs,  or drive ONB low for shutdown.

The serial-pulse dimming-control signal can be supplied by an external pulse generator. To configure the EV kit for external serial-pulse control, remove the shunt on jumper JU5 and apply the external serial-pulse control  signal  to  the  ONB  pad.  Refer  to  the  MAX8901A/ MAX8901B IC data sheet for timing information.

## MAX8901A Evaluation Circuit

The  MAX8901  EV  kit  comes  configured  for  the MAX8901B circuit and requires only simple jumper manipulation to configure the board for MAX8901A evaluation. Ensure that a shunt is installed between pins 2-3 of jumpers JU1 and JU2 to use the MAX8901A circuit  with  on-board WLEDs. Ensure that the input power supply is connected between the VINA and GNDA pads on the EV kit. The WLEDs can also be supplied from a separate power supply by using the VEXTA pad. See the Using an External Supply for the WLEDs section for more details.

<!-- image -->

## MAX8901 Evaluation Kit

When the MAX8901A is enabled by driving ONA high, soft-start is engaged and brings WLED current to maximum brightness. Apply a direct PWM logic-level signal (30kHz min, 500kHz max) to ONA to dim the WLEDs. The MAX8901A converts the PWM signal to DC WLED current proportional to the PWM signal's duty cycle (0% duty cycle corresponds to zero WLED current and 100% duty cycle corresponds to full WLED current). If dimming control is not required, ONA works as a simple on/off control. Drive ONA high to enable the WLEDs, or drive ONA low for shutdown. Resistor R3 programs maximum ILED (see the Programming the MAX8901A WLED Current section for details).

## Input Overvoltage Lockout

When VIN exceeds 6.2V (min), input overvoltage lockout (OVLO) is engaged to protect the MAX8901\_ from high input-voltage conditions. Once input OVLO occurs, the MAX8901\_ stops switching and no WLED current flows, provided the forward voltage of the WLED string is greater than VIN. When VIN then falls below 6V (min), the input OVLO condition is cleared, the IC is enabled, and then enters soft-start.

## WLED Overvoltage Protection

WLED overvoltage protection (OVP) occurs when the WLED output voltage rises above the WLED OVP threshold (25V typ). The WLED OVP circuitry latches off the IC when the WLED OVP threshold is exceeded. After  OVP has occurred, cycle VIN or toggle VON to reenable the IC and enter soft-start.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8901 Evaluation Kit

## Customizing the MAX8901 EV Kit

## Using an External Supply for the WLEDs

The MAX8901 EV kit can be configured to use a separate power source to supply the WLEDs. The MAX8901 IC will remain powered from the respective VIN\_ pad on the EV kit. To use an external power supply for the WLEDs, perform the following procedure for the MAX8901A (MAX8901B) circuit:

- 1) Cut the trace shorting jumper JU8 (JU7).
- 2) Install a 1µF capacitor in the C8 (C4) pads.
- 3) Connect a 13.2V (max) WLED supply from VEXTA (VEXTB) to GNDA (GNDB). The maximum recommended external input voltage is 2.2V per series WLED. For example, the maximum external input voltage to drive a 4-series WLED string is 8.8V.

## Programming the MAX8901A WLED Current

The MAX8901A uses a sense resistor (R3) to program the maximum WLED current for 100% PWM duty cycle. The MAX8901A regulates VR3 to 0.5V (typ) for full-scale output current. Calculate R3 (in ohms) using the following equation:

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

where ILED(MAX) is the maximum WLED current in milliamps. Maximum WLED current is programmed to 25mA using a 20 Ω resistor.

The  MAX8901B  maximum  WLED  current  is  not adjustable.

## Configuring the MAX8901 EV Kit for 4 WLED Operation

The MAX8901 EV kit is easily configured for 4 WLED applications. To configure for 4 WLED operation, install jumper JU3 to short out WLEDs D2 and D3.

## Using Off-Board WLEDs

The MAX8901 EV kit can be configured to supply an off-board WLED string comprising 2 to 6 WLEDs. To supply an off-board WLED string, use the following procedure:

- 1) Cut the trace shorting jumper JU6.
- 2) Connect the anode of the external WLED string to the LED+ pad.
- 3) Connect the cathode of the external WLED string to the LED- pad.

<!-- image -->

## MAX8901 Evaluation Kit

Figure 1. MAX8901 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8901 Evaluation Kit

<!-- image -->

Figure 2. MAX8901 EV Kit Component Placement Guide-Top Silkscreen

Figure 3. MAX8901 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX8901 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8