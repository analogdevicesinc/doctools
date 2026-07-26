<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX5858A evaluation kit (EV kit) is a fully assembled and tested circuit board that contains all the components necessary for evaluating the MAX5858A. The MAX5858A is  a  dual,10-bit, 300Msps digital-to-analog converter (DAC) with 4x/2x/1x-configurable interpolation filters. The MAX5858A also features a phase-locked-loop (PLL) clock multiplier that generates and distributes all internally synchronized high-speed clock signals required by the input data latches, interpolation filters, and DAC cores. The EV kit requires CMOS-compatible data and clock inputs, and three separate 3V power supplies. The EV kit can also evaluate the MAX5858 (no PLL) and the 8-bit MAX5856A (with PLL).

| DESIGNATION                |   QTY | DESCRIPTION                                                                           |
|----------------------------|-------|---------------------------------------------------------------------------------------|
| C1, C2, C9, C10, C15, C16  |     6 | 10µF ± 20%, 6.3V tantalum capacitors (1206) Panasonic ECS-T0JY106R AVX TAJA106M006RNJ |
| C3, C4, C11, C12, C17, C18 |     6 | 1µF ± 10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K                       |
| C5, C22, C24, C25, C28     |     5 | 0.1µF ± 10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K                     |
| C6, C7, C8, C19            |     4 | 0.1µF ± 10%, 6.3V X5R ceramic capacitors (0201) TDK C0603X5R0J104K                    |
| C13, C14                   |     2 | 0.1µF ± 10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K                     |
| C21, C23                   |     2 | 5pF ± 0.25pF, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H050C                    |

## Features

- ♦ Allows Fast Evaluation and Performance Testing
- ♦ 3V and 2V CMOS Logic-Level-Compatible Inputs
- ♦ Also Evaluates MAX5858/MAX5856A (with IC Replacement)
- ♦ Configurable, Integrated 4x or 2x Interpolation Filters
- ♦ Interleaved Data Mode
- ♦ On-Board Differential to Single-Ended Output Conversion Circuitry
- ♦ SMA Coaxial Connectors for Clock Inputs and DAC Outputs
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX5858AEVKIT | EV Kit |

## Component List

| DESIGNATION                     |   QTY | DESCRIPTION                                                      |
|---------------------------------|-------|------------------------------------------------------------------|
| C29                             |     1 | 100pF ± 10%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H101K |
| CLK1, CLKIN, CLKOUT, OUTA, OUTB |     5 | Edge-mount SMA connectors                                        |
| J1                              |     1 | 21 x 2-pin header                                                |
| JU1-JU11                        |    11 | 2-pin headers                                                    |
| L1, L2, L3                      |     3 | 91 Ω at 100MHz ferrite beads (1806) Panasonic EXC-ML45A910H      |
| R1, R6                          |     0 | Not installed, resistors (0603)                                  |
| R2, R3, R4, R27                 |     4 | 1k Ω ± 5% resistors (0603)                                       |
| R5, R16, R18-R21, R23           |     7 | 49.9 Ω ± 1% resistors (0603)                                     |
| R17, R22                        |     2 | 100 Ω ± 1% resistors (0603)                                      |
| R24, R25                        |     2 | 24.9 Ω ± 1% resistors (0603)                                     |
| R26, R29, R30                   |     3 | 10k Ω ± 5% resistors (0603)                                      |
| R28                             |     1 | 4.12k Ω ± 1% resistor (0603)                                     |
| R31                             |     1 | 1.91k Ω ± 1% resistor (0805)                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX5858A Evaluation Kit

## Component List (continued)

| DESIGNATION    |   QTY | DESCRIPTION                               |
|----------------|-------|-------------------------------------------|
| T1, T3, T5, T6 |     4 | Transformers Mini-Circuits ADTL1-12+      |
| T2, T4         |     2 | Transformers Mini-Circuits ADTT1-1+       |
| U1             |     1 | 10-bit DAC (48 TQFP-EP) Maxim MAX5858AECM |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                       |
|---------------|-------|---------------------------------------------------------------------------------------------------|
| U2            |     1 | Quadruple bus buffer gate with three-state outputs (14 TSSOP-PW) Texas Instruments SN74ALVC125PWR |
| None          |    11 | Shunts (JU1, JU10, JU11 any one pin), (JU2-JU9 pins 1-2)                                          |
| None          |     1 | PCB: MAX5858A EVALUATION KIT                                                                      |

## Component Suppliers

| SUPPLIER               | PHONE        | WEBSITE               |
|------------------------|--------------|-----------------------|
| AVX Corporation        | 843-946-0238 | www.avxcorp.com       |
| Mini-Circuits          | 718-934-4500 | www.minicircuits.com  |
| Panasonic Corp.        | 800-344-2112 | www.panasonic.com     |
| TDK Corp.              | 847-803-6100 | www.component.tdk.com |
| Texas Instruments Inc. | 972-644-5580 | www.ti.com            |

Note: Indicate that you are using the MAX5858A when contacting these component suppliers.

## Quick Start (PLL Disabled)

Note: To evaluate PLL-enabled mode, see the Quick Start (PLL Enabled) section.

## Recommended Equipment

- MAX5858A EV kit
- DC power supplies:

Digital 3V, 500mA Analog 3V, 100mA Clock 3V, 200mA

- Two RF signal generators with low phase noise and low jitter for the clock input (e.g., HP 8662A)
- Data generator (e.g., Sony/Tektronix DG2020A)
- Two variable output PODs (e.g., Sony/Tektronix P3420)
- Spectrum analyzer
- Oscilloscope
- Digital voltmeter

## Caution: Do not turn on power supplies or enable signal generators until all connections are completed (Figure 1).

- 1) Verify  that  a  shunt  is  not  installed  on  jumper  JU1 (the CLKIN SMA connector on the EV kit is not used for  evaluating the MAX5858A in PLL disabled mode).
- 2) Verify that a shunt is installed on jumper JU2 (no DC offset  at  single-ended analog outputs OUTA and OUTB).
- 3) Verify  that  a  shunt  is  installed  on  jumper  JU3  (IDE disabled).
- 4) Verify that a shunt is installed on jumper JU4 (PLL disabled).
- 5) Verify that a shunt is installed on jumper JU5 ( REN enabled, internal reference enabled).
- 6) Verify that shunts are installed on jumpers JU6-JU9 (single-ended output mode).
- 7) Verify that no shunts are installed on jumpers JU10 and JU11. (CLKXP and CLKXN are used for evaluating the MAX5858A in PLL disabled mode).
- 8) Connect the RF OUTPUT of the master HP 8662A (data clock) to the clock input on the back side of

## Procedure

The EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5858A Evaluation Kit

Figure 1. Quick Start Setup for PLL Disabled Mode

<!-- image -->

the data generator (Sony/Tektronix DG2020A). (See Figure 1 for the equipment setup connections.)

- 9) Connect the RF OUTPUT of slave HP 8662A (EV kit clock) to the CLKD SMA connector on the EV kit.
- 10) Synchronize master HP 8662A to the slave HP 8662A on the back side by connecting the INT of the master to the EXT of the slave generator.
- 11) Verify  that  the  data  generator  is  programmed for CMOS-level outputs, which transition from 0 to 3V.
- 12) Connect data generator POD A to the first variable output POD (1). Connect output channels CH9

## Table 1. Connector J1

| VARIABLE POD 1    | CH9    | CH8        | CH7       | CH6       | CH5    | CH4    | CH3    | CH2    | CH1   | CH0   |
|-------------------|--------|------------|-----------|-----------|--------|--------|--------|--------|-------|-------|
| MAX5858A PIN NAME | DA9/PD | DA8/ DACEN | DA7/ F2EN | DA6/ F1EN | DA5/G3 | DA4/G2 | DA3/G1 | DA2/G0 | DA1   | DA0   |
| MAX5858A EV KIT   | J1-41  | J1-39      | J1-37     | J1-35     | J1-33  | J1-31  | J1-29  | J1-27  | J1-25 | J1-23 |

## Table 2. Connector J1

| VARIABLE POD 2    | CH11   | CH9   | CH8   | CH7   | CH6   | CH5   | CH4   | CH3   | CH2   | CH1   | CH0   |
|-------------------|--------|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|
| MAX5858A PIN NAME | CW     | DB9   | DB8   | DB7   | DB6   | DB5   | DB4   | DB3   | DB2   | DB1   | DB0   |
| MAX5858A EV KIT   | J1-1   | J1-21 | J1-19 | J1-17 | J1-15 | J1-13 | J1-11 | J1-9  | J1-7  | J1-5  | J1-3  |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- through CH0 of variable output POD 1 to the EV kit connector J1, as indicated in Table 1.
- 13) Connect data generator POD B to the second variable output POD (2). Connect output channels CH9 through CH0 of the variable output POD 2 to EV kit connector J1, as indicated in Table 2.
- 14) Connect the spectrum analyzer to the OUTA or the OUTB SMA connector.
- 15) Connect the 3V, 500mA power supply to DVDD. Connect the ground terminal of this supply to DGND.
- 16) Connect the 3V, 100mA power supply to AVDD. Connect the ground terminal of this supply to AGND.
- 17) Connect the 3V, 200mA power supply to PVDD. Connect the ground terminal of this supply to PGND.
- 18) Turn on all three power supplies.
- 19) With a voltmeter, verify that 1.24V is measured at the REFO pad on the EV kit.
- 20) Enable the signal generators and the data generator. Set both HP 8662As for an output amplitude of 2VP-P and identical frequencies (fCLK) of ≤ 165MHz.
- 21) Adjust the phase of the master HP 8662A RF source, to meet the MAX5858A data timing specifications.
- 22) Use the spectrum analyzer to view the MAX5858A output spectrum, or view the output waveforms using an oscilloscope on the outputs.

## MAX5858A Evaluation Kit

## Detailed Description of Hardware

The MAX5858A EV kit is designed to simplify the evaluation of the MAX5858A 10-bit, dual, 300Msps DAC with PLL. The board contains all circuitry necessary to evaluate the dynamic performance of this high-speed converter, including circuitry to convert the DAC's differential output into a single-ended output.

The EV kit provides PCB connector pads for power supplies AVDDIN, DVDDIN, and PVDDIN. SMA connectors are included for clock functions CLKIN, CLKOUT, CLKD, and DAC outputs OUTA and OUTB connections. The four-layer PCB is a high-speed design that optimizes the dynamic performance of the DAC by separating the analog and digital circuitry, which implements impedance matching for the differential output signal  PCB  traces.  The  PCB  traces  have  been designed for 50 Ω impedance.

## Power Supplies

The EV kit requires separate analog, digital, and PLL power supplies. Connect a 3V power supply to the AVDDIN PCB pad to power the analog portion of the DAC. Connect the second 3V power supply to the DVDDIN PCB pad to power the digital portion of the DAC. Connect the third 3V power supply to the PVDDIN PCB pad to power the PLL portion of the DAC.

## Digital Inputs

The EV kit provides connector J1 for the two 10-bit input data buses. Data bits DA[9:2] of channel A share a dual function for data and control word. The control word is latched by the CW bit (J1-1). The control word is  latched on the falling edge of CW .  Refer  to  the MAX5858A IC data sheet for a detailed description of the control and data word functions. The data word is latched on the rising edge of the CLK output, pin 20 of the MAX5858A.

## DAC Output

The EV kit is designed to provide two pairs of analog outputs. The outputs can be configured for either differential  or  single-ended mode of operation. In singleended mode and with transformer-coupled output and 50 Ω external termination, the MAX5858A delivers a -2dBm output signal. In differential mode, the output amplitude is 1VP-P at both positive and negative DAC outputs. To configure the MAX5858A for differential output operation, remove jumpers JU6-JU9, and measure the outputs at the A+, A-, and B+, B- 2-pin headers. To configure the MAX5858A for single-ended output operation, install shunts on jumpers JU6-JU9, and measure the  outputs  at  the  OUTA  and  OUTB SMA connectors.

## Table 3. DAC Output Mode (Jumpers JU6-JU9)

| SHUNT POSITION   | DAC OUTPUT MODE   | ANALOG OUTPUT LOCATIONS         |
|------------------|-------------------|---------------------------------|
| Installed        | Single-ended mode | OUTA and OUTB SMA connectors    |
| Not installed    | Differential mode | A+, A- and B+, B- 2-pin headers |

## Table 4. Interleaved Data Mode (Jumper JU3)

| SHUNT POSITION   | MAX5858A IDE PIN           | INTERLEAVED DATA MODE   |
|------------------|----------------------------|-------------------------|
| Not installed    | Connected to DVDD with R26 | Enabled                 |
| Installed        | Connected to DGND          | Disabled                |

## Table 5. Reference Voltage Option (Jumper JU5)

| SHUNT POSITION   | MAX5858A REN PIN           | REFERENCE VOLTAGE OPTION   |
|------------------|----------------------------|----------------------------|
| Not installed    | Connected to AVDD with R30 | External reference         |
| Installed        | Connected to AGND          | Internal reference         |

Table 3 lists the jumper configuration for the DAC output mode selection.

## Output DC Offset

The EV kit features an option to add a DC offset to the analog output signals. To add a DC offset, remove jumper JU2 and connect an appropriate DC source across jumper JU2. The DC source has to be able to sink  at  least  40mA  of  DC  current.  The  DC  offset  must be within 0 to 1.25V.

## Interleaved Data Mode

The MAX5858A, MAX5858, and MAX5856A feature an interleaved data mode that multiplexes the data inputs of both channels through port A. This feature allows the user to reduce the bit width of the input data bus. In interleaved data mode, channel B data is latched on the falling edge of the clock (CLK), and channel A data is  latched  on  the  following  rising  edge  of  the  clock (CLK). Jumper JU3 sets the interleaved data mode option. Table 4 lists the jumper selection.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5858A Evaluation Kit

## Table 6. MAX5856A Data Bits DA7 Through DA0 on the EV Kit

| MAX5856A PIN NAME   | DA7/PD   | DA6/ DACEN   | DA5/ F2EN   | DA4/ F1EN   | DA3/G3   | DA2/G2   | DA1/G1   | DA0/G0   | SHORT TO DGND   | SHORT TO DGND   |
|---------------------|----------|--------------|-------------|-------------|----------|----------|----------|----------|-----------------|-----------------|
| MAX5858A EV KIT     | J1-41    | J1-39        | J1-37       | J1-35       | J1-33    | J1-31    | J1-29    | J1-27    | J1-25           | J1-23           |

## Table 7. MAX5856A Data Bits DB7 Through DB0 on the EV Kit

| MAX5856A PIN NAME   | DB7   | DB6   | DB5   | DB4   | DB3   | DB2   | DB1   | DB0   | SHORT TO DGND   | SHORT TO DGND   | CW   |
|---------------------|-------|-------|-------|-------|-------|-------|-------|-------|-----------------|-----------------|------|
| MAX5858A EV KIT     | J1-21 | J1-19 | J1-17 | J1-15 | J1-13 | J1-11 | J1-9  | J1-7  | J1-5            | J1-3            | J1-1 |

## Table 8. PLL Clock Multiplier (Jumper JU4) for MAX5858A and MAX5856A

| SHUNT POSITION   | PLLEN PIN                  | PLL CLOCK MULTIPLIER   |
|------------------|----------------------------|------------------------|
| Not installed    | Connected to PVDD with R29 | Enabled                |
| Installed        | Connected to PGND          | Disabled               |

## Table 9. Input Clock Selection

| CLOCK MODE   | JUMPER SETTINGS                                                                                 |
|--------------|-------------------------------------------------------------------------------------------------|
| CLKIN mode   | MAX5858A or MAX5856A PLL enabled; JU1, JU10, and JU11 installed; JU4 not installed              |
| CLKD mode    | MAX5858 or MAX5858A, or MAX5856A PLL disabled; JU1, JU10, and JU11 not installed; JU4 installed |

## Reference Voltage Options

The EV kit supports both internal and external reference configurations. The internal reference voltage can be accessed at the REFO pad. The EV kit also accepts an external reference voltage at the REFO pad to set the full-scale analog-output signal level. Jumper JU5 selects the reference voltage options for the EV kit. Table 5 lists the jumper selection.

## Evaluating the MAX5858

The EV kit also evaluates the pin-compatible MAX5858. Refer to the MAX5858 IC data sheet for more details on the MAX5858 functions. To evaluate the MAX5858, replace U1 with the MAX5858 and install a shunt on jumper JU4.

<!-- image -->

## Evaluating the MAX5856A

The EV kit also evaluates the MAX5856A. Refer to the MAX5856A IC data sheet for more details on the MAX5856A functions. To evaluate the MAX5856A, the following component changes on the EV kit are necessary:

- Replace U1 with the MAX5856A.
- Install a shunt on J1-3 and J1-4.
- Install a shunt on J1-5 and J1-6.
- Install a shunt on J1-23 and J1-24.
- Install a shunt on J1-25 and J1-26.
- See Tables 6 and 7 for  the  data  bits  of  the MAX5856A, with respect to header J1 on the EV kit.

## PLL Clock Multiplier (MAX5858A and MAX5856A only)

The MAX5858A (10 bit) and MAX5856A (8 bit) feature a PLL clock multiplier that generates and distributes all internally synchronized high-speed clock signals required by the input data latches, interpolation filters, and DAC cores. Jumper JU4 sets the PLL clock multiplier options. Table 8 lists the jumper selection.

## Clock

The EV kit features two input clock options: a singleended input clock applied to CLKIN or a differential clock applied to CLKD. When evaluating the MAX5858A or the MAX5856A, CLKIN is used in PLL enabled mode, and CLKD is used in PLL disabled mode. The clock signal applied to the CLKIN SMA input connector has to meet CMOS logic-level requirements. When evaluating the MAX5858, only the CLKD SMA input connector is used. Jumpers JU1, JU4, JU10, and JU11 set the input clock mode for the MAX5858A. Table 9 lists the jumper configurations.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5858A Evaluation Kit

## Table 10. Connector J1

| VARIABLE POD 1    | CH9    | CH8        | CH7       | CH6       | CH5    | CH4    | CH3    | CH2    | CH1           | CH0           |
|-------------------|--------|------------|-----------|-----------|--------|--------|--------|--------|---------------|---------------|
| MAX5858A PIN NAME | DA9/PD | DA8/ DACEN | DA7/ F2EN | DA6/ F1EN | DA5/G3 | DA4/G2 | DA3/G1 | DA2/G0 | DA1           | DA0           |
| MAX5856A PIN NAME | DA7/PD | DA6/ DACEN | DA5/ F2EN | DA4/ F1EN | DA3/G3 | DA2/G2 | DA1/G1 | DA0/G0 | Short to DGND | Short to DGND |
| MAX5858A EV KIT   | J1-41  | J1-39      | J1-37     | J1-35     | J1-33  | J1-31  | J1-29  | J1-27  | J1-25         | J1-23         |

## Table 11. Connector J1

| VARIABLE POD 2    | CH11   | CH9   | CH8   | CH7   | CH6   | CH5   | CH4   | CH3   | CH2   | CH1           | CH0           |
|-------------------|--------|-------|-------|-------|-------|-------|-------|-------|-------|---------------|---------------|
| MAX5858A PIN NAME | CW     | DB9   | DB8   | DB7   | DB6   | DB5   | DB4   | DB3   | DB2   | DB1           | DB0           |
| MAX5856A PIN NAME | CW     | DB7   | DB6   | DB5   | DB4   | DB3   | DB2   | DB1   | DB0   | Short to DGND | Short to DGND |
| MAX5858A EV KIT   | J1-1   | J1-21 | J1-19 | J1-17 | J1-15 | J1-13 | J1-11 | J1-9  | J1-7  | J1-5          | J1-3          |

## Quick Start (PLL Enabled)

## Recommended Equipment

- DC power supplies:

Digital 3V, 500mA

Analog 3V, 100mA

Clock 3V, 200mA

- Pulse generator for the clock inputs (e.g., HP 8131A)
- Data generator (e.g., Sony/Tektronix DG2020A)
- Two variable-output PODs (e.g., Sony/Tektronix P3420)
- Spectrum analyzer
- Oscilloscope
- Digital voltmeter
- 3) Verify  that  a  shunt  is  installed  on  jumper  JU3  (IDE disabled).
- 4) Verify  that  a  shunt  is  not  installed  on  jumper  JU4 (PLL enabled).
- 5) Verify that a shunt is installed on jumper JU5 ( REN enabled, internal reference enabled).
- 6) Verify that shunts are installed on jumpers JU6-JU9 (single-ended output mode).

Figure 2. Quick Start Setup for PLL Enabled Mode

<!-- image -->

## Procedure

Caution: Do not turn on power supplies or enable signal generators until all connections are completed (Figure 2).

- 1) Verify that a shunt is installed on jumper JU1. (CLKIN SMA connector on the EV kit is used for evaluating the MAX5858A in PLL enabled mode).
- 2) Verify  that  a  shunt  is  installed  on  jumper  JU2  (no DC offset at the single-ended analog outputs OUTA and OUTB).

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5858A Evaluation Kit

- 7) Verify  that  shunts  are  installed  on  jumpers  JU10 and JU11 (CLKXP and CLKXN are not used for evaluating the MAX5858A in PLL enabled mode).
- 14) Connect the 3V, 500mA power supply to DVDD. Connect the ground terminal of this supply to DGND.
- 8) Connect the TRIG OUTPUT (clock synchronize signal) of the HP 8131A to the clock input on the back side of the data generator (Sony/Tektronix DG2020A). See Figure 2 for the equipment setup connections.
- 9) Connect the OUTPUT signal of the HP 8131A to the CLKIN SMA connector on the EV kit.
- 10) Verify  that  both  the  pulse  generator  and  the  data generator are programmed for CMOS level outputs, which transition from 0 to 3V.
- 11) Connect data generator POD A to the first variable output POD (1). Connect output channels CH9 through CH0 of the variable output POD 1 to the MAX5858A EV kit connector J1, as indicated in Table 10.
- 12) Connect data generator POD B to the second variable output POD (2). Connect output channels CH9 through CH0 of the variable output POD 2 to the MAX5858A EV kit connector J1, as indicated in Table 11.
- 13) Connect the spectrum analyzer to the OUTA or the OUTB SMA connector.
- 15) Connect the 3V, 100mA power supply to AVDD. Connect the ground terminal of this supply to AGND.
- 16) Connect the 3V, 200mA power supply to PVDD. Connect the ground terminal of this supply to PGND.
- 17) Turn on all three power supplies.
- 18) With a voltmeter, verify that 1.24V is measured at the REFO pad on the EV kit.
- 19) Enable the pulse generator and the data generator. For 1x interpolation, set the HP 8131A output for a square wave with a frequency (fCLK) of ≤ 165MHz. For 2x interpolation, set the HP 8131A output for a square wave with a frequency (fCLK) of ≤ 150MHz. For 4x interpolation, set the HP 8131A output for a square wave with a frequency (fCLK) of ≤ 75MHz.
- 20) Adjust the delay between the HP 8131A TRIG OUTPUT and signal OUTPUT to meet the MAX5858A data timing specifications.
- 21) Use the spectrum analyzer to view the MAX5858A output spectrum, or view the output waveforms using an oscilloscope on the outputs.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5858A Evaluation Kit

Figure 3. MAX5858A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5858A Evaluation Kit

Figure 4. MAX5858A EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5858A Evaluation Kit

Figure 5. MAX5858A EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX5858A Evaluation Kit

Figure 6. MAX5858A EV Kit PCB Layout (Inner Layer 2)-Ground Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5858A Evaluation Kit

Figure 7. MAX5858A EV Kit PCB Layout (Inner Layer 3)-Power Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX5858A Evaluation Kit

Figure 8. MAX5858A EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5858A Evaluation Kit

Figure 9. MAX5858A EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5858A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                           | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------|-----------------|
|                 0 | 12/03           | Initial release                                                       | -               |
|                 1 | 2/11            | Corrected terminologies for differential and single-ended modes       | 2, 4, 6         |
|                 2 | 5/11            | Updated capacitor transformers vendor in Component List and Component | 1, 2            |