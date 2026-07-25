<!-- lastmod 2022-08-03 -->
## General Description

The MAX5092 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB) demonstrating the MAX5092B, a low-dropout (LDO) regulator with internal boost preregulator. The EV kit operates from a 4V to 72V input voltage and delivers up to 250mA from a preprogrammed 7V boost preregulator output (BSOUT) and 5V LDO output (VOUT). Both the LDO and the boost preregulator output voltages are programmable using external resistors.

The MAX5092 EV kit features include on-board jumper settings that allow for evaluation of the ENABLE and HOLD functions of the MAX5092, a power-on-reset output ( RESET )  to  indicate  LDO  out-of-regulation  conditions, and a programmable RESET time period.

The MAX5092 EV kit can be configured to demonstrate the MAX5092A (3.3V LDO output) or the MAX5093A/ MAX5093B. To evaluate the MAX5092A, replace the IC with the MAX5092A. To evaluate the MAX5093\_, the addition of an external Schottky diode is required. See the Configuring for the MAX5093\_ section to modify the MAX5092 EV kit for the MAX5093\_.

The EV kit comes fully assembled and tested, is qualified lead-free, and is rated for an operating temperature range of 0°C to +70°C.

Warning: The MAX5092 EV kit is designed to operate with high voltages. Dangerous voltages can be present on this EV kit and on equipment connected to it. Users who power up this EV kit, or the power sources connected to it, must be careful to follow safety procedures appropriate when working with high-voltage electrical equipment.

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| C1            |     1 | 47µF, 80V, 0.7 Ω SMT Al electrolytic capacitor (G) Panasonic EEEFK1K470P         |
| C2, C3        |     2 | 1µF ±10%, 100V X7R ceramic capacitors (1210) Murata GRM32CR72A105K or equivalent |
| C4            |     1 | 22µF, 80V, 1.3 Ω SMT Al electrolytic capacitor (F) Panasonic EEEFK1K220P         |
| C5            |     1 | 0.22µF ±10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C224K or equivalent   |

- ♦ Wide 4V to 72V Input-Voltage Range
- ♦ Preset 5V LDO Output Voltage
- ♦ Preset 7V Boost Preregulator Output Voltage
- ♦ Adjustable LDO Output Voltage from 1.5V to 9V
- ♦ Adjustable Boost Preregulator Output Voltage Up to 11V
- ♦ Jumper-Programmable ENABLE and HOLD Functions
- ♦ Programmable HOLD Time Period
- ♦ Surface-Mount Components
- ♦ Lead-Free Evaluation Kit
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX5092EVKIT+ | EV Kit |

+Denotes lead-free and RoHS-compliant.

Note: To evaluate the MAX5092A, request a MAX5092AATE+ free sample with the MAX5092EVKIT+. To evaluate the MAX5093\_, request a MAX5093AATE+/MAX5093BATE+ free sample with the MAX5092EVKIT+.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| C6            |     1 | 1µF ±10%, 16V X7R ceramic capacitor (0603) TDK 1608X7R1C105K or equivalent                     |
| C7            |     1 | 10µF ±10%, 25V X5R ceramic capacitor (1206) Murata GRM31CR61E106K or equivalent                |
| C8            |     0 | Not installed, ceramic capacitor (0603)                                                        |
| D1            |     0 | Not installed (SMB) Recommended diode: 2A, 100V Schottky diode Diodes Inc. B2100 or equivalent |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

<!-- image -->

Features

## MAX5092 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                            |
|---------------|-------|------------------------------------------------------------------------------------------------------------------------|
| JU1, JU2      |     2 | 3-pin headers 36-pin headers, 0.1 centers (comes in 36-pin strips, cut to fit) Sullins PEC36SAAN Digi-Key S1012E-36-ND |
| L1            |     1 | 4.7µH, 4.8A 18m Ω inductor (9.4mm x 12.95mm x 5.21mm) Coilcraft DO3316P-472ML                                          |
| R1, R4        |     0 | Not installed (0603)                                                                                                   |

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                |
|---------------|-------|--------------------------------------------|
| R2, R5        |     2 | 0 Ω resistors (0603)                       |
| R3            |     1 | 100k Ω ±5% resistor (0603)                 |
| U1            |     1 | MAX5092BATE+ (16-pin, 5mm x 5mm, Thin QFN) |
| -             |     2 | Shunt Sullins STC02SYAN Digi-Key S9000-ND  |
| -             |     1 | PCB: MAX5092 Evaluation Kit+               |

## Component Suppliers

| SUPPLIER              | COMPONENTS            | PHONE        | WEBSITE                    |
|-----------------------|-----------------------|--------------|----------------------------|
| Coilcraft, Inc.       | Inductors             | 847-639-6400 | www.coilcraft.com          |
| Digi-Key              | Headers, jumpers      | 800-344-4539 | www.digikey.com            |
| Murata Mfg. Co., Ltd. | Capacitors            | 770-436-1300 | www.murata.com             |
| Panasonic Corp.       | Resistors, capacitors | 714-373-7366 | www.maco.panasonic.co.jp   |
| Sullins Electronics   | Headers, jumpers      | 760-744-0125 | www.sullinselectronics.com |
| TDK Corp.             | Capacitors            | 888-835-6646 | www.component.tdk.com      |

Note: Indicate that you are using the MAX5092A, MAX5092B, MAX5093A, or MAX5093B when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- One variable-DC power supply (further referred to as PS1) capable of supplying up to 72V at 1A
- One adjustable load capable of sinking 250mA at 5V
- Three digital voltmeters (DVMs)
- One ammeter (for optional low-quiescent input current evaluation)

## Procedure

The MAX5092 EV kit is fully assembled and tested. Follow the steps below to verify board operation. See Figure 1 for test setup.

Warning: The MAX5092 EV kit is designed to operate with high voltages. Dangerous voltages can be present on this EV kit and on equipment connected to it. Users who power up this EV kit, or the power sources connected to it, must be careful to follow safety procedures appropriate when working with high-voltage electrical equipment.

- 1) Preset PS1 to +4V. Turn off PS1. Caution: Do not turn on the power supply until all connections are complete.
- 2) Connect the positive terminal of PS1 to the VIN pad located on the EV kit. Connect the negative terminal of PS1 to the GND pad located on the EV kit.
- 3) Connect the positive input of one DVM to the VIN pad located on the EV kit. Connect the negative input of that DVM to the GND pad located on the EV kit. This DVM measures the EV kit input voltage.
- 4) Connect the positive input of the second DVM to the BSOUT pad located on the EV kit. Connect the negative input of that DVM to the GND pad located on the EV kit. This DVM measures the output voltage at the boost converter output.
- 5) Connect the positive input of the third DVM to the VOUT pad located on the EV kit. Connect the negative  input  of  that  DVM  to  the  GND  pad  located  on the EV kit. This DVM measures the output voltage at the LDO output.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 6) Connect dummy load between the VOUT and GND pads located on the EV kit. Adjust the load to 250mA.
- 7) Verify that a shunt is installed on pins 2-3 of jumper JU1 to enable the MAX5092B.
- 8) Verify  that  a  shunt  is  installed  pins  2-3  of  jumper JU2  to  disable  the HOLD function  of  the MAX5092B.
- 9) Turn on PS1 and sweep the input voltage from 4V to 7V to 3.5V as indicated on the input DVM. Verify that  the  BSOUT DVM indicates approximately 7V over the input-voltage range. Verify that the VOUT DVM indicates approximately 5V over the input-voltage range. Note that the MAX5092 still properly regulates the outputs with VIN as low as 3.5V after the IC is started.
- 10) Reduce the dummy load to 10mA.
- 11) Increase PS1 to 7V.
- 12) Warning: Dangerous voltages are present on the EV kit during this step. Sweep the PS1 voltage from 7V to 72V. Verify that the BSOUT DVM voltage follows the input DVM voltage, minus a diode drop,

## MAX5092 Evaluation Kit

- over the input-voltage range. Verify that the VOUT DVM indicates approximately 5V over the input-voltage range .
- 13) Optional procedure to observe the MAX5092 lowquiescent input current (IQ):
- a) Set the PS1 voltage to 14V. The boost converter is not switching.
- b) Turn off PS1. Caution: Do not turn on the power supply until all connections are complete.
- c) Remove the load from VOUT.
- d) Remove all the DVMs to eliminate the DVM contribution to IQ.
- e) Remove the wire between PS1 and the VIN pad on the EV kit.
- f ) Connect the positive terminal of PS1 to the positive terminal of the ammeter. Connect the negative  terminal of this ammeter to the VIN pad located on the EV kit. This ammeter measures IQ.
- g) Turn on PS1. Observe that the ammeter indicates an IQ less than 85µA.

<!-- image -->

Figure 1. MAX5092 EV Kit Test Connections

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5092 Evaluation Kit

## Detailed Description

The MAX5092 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB demonstrating the  MAX5092B LDO with internal boost preregulator IC. The EV kit operates from a 4V to 72V input voltage and delivers up to 250mA from a preprogrammed 7V boost preregulator output (BSOUT) and 5V LDO output (VOUT).

VOUT can deliver up to 250mA total output current. The voltage maintained at BSOUT depends upon the input voltage and the programmed BSOUT regulation voltage. When (VBSOUT - VOUT) is less than the boost disable threshold (2.5V typ), VBSOUT is boosted to its programmed regulation voltage. As VVIN increases above  the  BSOUT  regulation  voltage,  causing (VBST\_OUT - VOUT) to be greater than the boost disable threshold, VBSOUT follows VVIN, minus a diode drop.

Both the LDO and boost preregulator output voltages can be programmed using external resistors. The boost output voltage (VBSOUT) is adjustable up to 11V by selecting resistors R1 and R2. The LDO output voltage (VVOUT) is adjustable from 1.5V to 9V by selecting resistors  R4  and  R5.  See  the Evaluating  Other  Output Voltages section for more details. If it is desired to program VBSOUT to voltages up to 12V, use the MAX5093\_ IC.  See  the Configuring for the MAX5093\_ section for more details.

The MAX5092\_/MAX5093\_ feature an internal voltage regulator that is used to supply all internal low-voltage blocks within the IC. An output on the EV kit (VL) is provided to monitor the internal regulator voltage. VVL regulates to 5.5V when VBSOUT is above 5.5V. VVL tracks the voltage at BSOUT when VBSOUT is below 5.5V. VL is not intended to supply an external load.

The MAX5092 EV kit utilizes two jumpers (JU1 and JU2) to control the ENABLE and HOLD functions of the MAX5092 IC. See Table 1 for jumper descriptions. Shunt pins 2-3 of jumper JU1 to enable the MAX5092. Shunt pins 1-2 of jumper JU1 to disable the MAX5092. Shunt pins 1-2 of jumper JU2 to enable HOLD mode. Shunt pins 2-3 of jumper JU2 to disable HOLD mode. Enabling HOLD prevents the IC from shutting down if EN is brought low. The ENABLE function is also controlled by an external voltage source by connecting the external source to the ENABLE pad on the EV kit. When controlling ENABLE from an external source, ensure the shunt on jumper JU1 is removed. Refer to the MAX5092A/

## Table 1. JU1 and JU2 Jumper Positions

| JUMPER   | POSITION   | FUNCTION                        |
|----------|------------|---------------------------------|
| JU1      | 1-2        | Sets ENABLE low (disables IC)   |
| JU1      | 2-3        | Sets ENABLE high (enables IC)   |
| JU2      | 1-2        | Sets HOLD low (enables HOLD )   |
| JU2      | 2-3        | Sets HOLD high (disables HOLD ) |

MAX5092B/MAX5093A/MAX5093B data sheet for a more detailed description of the ENABLE and HOLD timing functions.

The MAX5092 contains a power-on-reset output ( RESET )  that  indicates  when  the  LDO  output  voltage (VVOUT) is out of regulation. If VVOUT falls below 90% of  the  programmed regulation threshold, V RESET pulls low after a short timeout period. Once VVOUT rises above 92% of the programmed regulation threshold, V RESET goes high after the user-programmable timeout period. Capacitor C5 sets the RESET timeout period. See the Adjusting the RESET Timeout Period section for more details.

The MAX5092A IC (3.3V LDO output) can be used with this  EV  kit.  Refer  to  the  MAX5092/MAX5093 IC data sheet for operation. The MAX5092 EV kit can be configured for the MAX5093\_ IC using an external Schottky diode. Use the MAX5093\_ for higher boost voltage applications up to 12V or to lower package power dissipation. See the Configuring for the MAX5093\_ to modify the MAX5092 EV kit for use with the MAX5093\_.

## Customizing the MAX5092 EV Kit

## Evaluating Other Output Voltages

## Setting the Boost Output Voltage (VBSOUT)

The MAX5092\_/MAX5093\_ feature Dual Mode™ operation  for  regulating  the  boost-converter  output  voltage. These devices operate in either preset output-voltage mode or adjustable output-voltage mode. In preset mode, internal trimmed feedback resistors set VBSOUT to  a  fixed  7V.  The  default  EV  kit  is  configured  for  the BSOUT preset mode by directly connecting BSFB to SGND (Figure 2). In adjustable output mode, VBSOUT can be programmed up to 11V for the MAX5092\_ (or up to 12V for the MAX5093\_) by selecting resistors R1 and R2. Note that the current drawn by these resistors adds to the quiescent current and the shutdown current of  the  IC.  Use  the  adjustable output mode only if VBSOUT is required to be significantly different than the

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

preset 7V. If VBSOUT is programmed greater than (VOUT + VBST\_DIS), larger ripple is observed on BSOUT. The reason is that as VBSOUT rises above (VOUT + VBST\_DIS), the boost converter is disabled, causing VBSOUT to fall. As VBSOUT falls to (VOUT + VBST\_EN), the boost converter turns back on and VBSOUT rises. For the lowest VBSOUT ripple, program VBSOUT within the boost disable threshold.

To program VBSOUT for other voltages, use the following procedure:

- 1) Select a R2 resistance of 499k Ω or lower.
- 2) Calculate R1 using the following equation:

<!-- formula-not-decoded -->

where VBSOUT is the desired output voltage for BSOUT.

- 3) Remove the short located at R2.
- 4) Install resistors R1 and R2.

See Figure 2 for the MAX5092 EV kit schematic.

## Setting the LDO Output Voltage (VOUT)

LDO output-voltage regulation also features Dual Mode operation. In preset mode, VVOUT regulates to 3.3V (MAX5092A/MAX5093A) or 5V (MAX5092B/MAX5093B) by internal trimmed feedback resistors. The default EV kit  VOUT regulation mode is configured for the preset mode by directly connecting SET to SGND (Figure 2). VVOUT can also be adjusted from 1.5V to 9V for the MAX5092\_ (or from 1.5V to 10V for the MAX5093\_) by selecting resistors R4 and R5. Note that the current drawn by these resistors adds to the quiescent current of  the  LDO. Use the adjustable output mode only if VVOUT is required to be significantly different than the preset voltage. To program VVOUT for other voltages, use the following procedure:

- 1) Select an R5 resistance of 100k Ω or lower.
- 2) Calculate R4 using the following equation:

<!-- formula-not-decoded -->

where VVOUT is the desired output voltage for VOUT.

- 3) Remove the short located at R5.
- 4) Install resistors R4 and R5.

See Figure 2 for the MAX5092 EV kit schematic.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5092 Evaluation Kit

## Adjusting the RESET Timeout Period

The MAX5092 EV kit contains an open-drain power-on reset output ( RESET ) that indicates when the LDO output (VOUT) is out of regulation. When VVOUT rises above 92% of the regulation threshold, V RESET goes high after a user-programmable timeout period. This time period is programmable by selecting the capacitance of capacitor C5 (Figure 2). For a chosen RESET active timeout period (tRESET\_HIGH) in seconds, calculate the required C5 value in farads as:

<!-- formula-not-decoded -->

The RESET active timeout period is set for approximately 136ms by C5 in the default EV kit configuration.

## Configuring for the MAX5093\_

The MAX5092 EV kit can be configured to demonstrate the MAX5093\_. The MAX5093\_ requires an external switching diode (D1) connected between LX and BSOUT (Figure 2). Proper selection of an external diode can offer a lower forward-voltage drop and a higher reverse-voltage handling capability. Since the high-switching frequency of the IC demands a highspeed rectifier, Schottky diodes are recommended for most applications because of their fast recovery time and low forward-voltage drop. Ensure that the diode's peak current rating is greater than or equal to the peak inductor current. Additionally, the diode reverse breakdown voltage must be greater than VBSOUT.

To configure the MAX5092 EV kit for use with the MAX5093\_, perform the following procedure:

- 1) Replace the MAX5092B IC with the MAX5093\_ IC.
- 2) Install  Schottky diode D1. See the Component List for recommended diode.
- 3) Configure the BSOUT and VOUT voltages as discussed in the Evaluating Other Output Voltages section.

## MAX5092 Evaluation Kit

Figure 2. MAX5092B EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3. MAX5092EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

## MAX5092 Evaluation Kit

Figure 4. MAX5092 EV Kit PCB Layout-Solder Side Top

<!-- image -->

Figure 5. MAX5092 EV Kit PCB Layout-AGND Inner Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5092 Evaluation Kit

Figure 6. MAX5092 EV Kit PCB Layout-PGND Inner Layer 3

<!-- image -->

Figure 7. MAX5092 EV Kit PCB Layout-Solder Side Bottom

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8