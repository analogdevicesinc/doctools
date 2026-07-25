<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX5876/MAX5877/MAX5878 Evaluation Kits

## General Description

The MAX5876/MAX5877/MAX5878 evaluation kits (EV kit) are fully assembled and tested printed circuit boards (PCBs) that contain all the components necessary to evaluate the performance of the MAX5876/MAX5877/ MAX5878 digital-to-analog converters (DACs). The MAX5876 (12-bit)/MAX5877 (14-bit)/MAX5878 (16-bit) are 250Msps, dual DACs with interleaved LVDS inputs, integrated 1.2V voltage reference, and differential current outputs. The EV kits operate with LVDS-compatible digital  data inputs, a single-ended clock input, and a 3.3V/1.8V dual power supply for simple board operation. The MAX5876/MAX5877/MAX5878 EV kits also contain an external 1.25V voltage-reference circuit that can be used to drive the MAX5876/MAX5877/MAX5878 input reference voltage pin.

## Part Selection Table

| PART         |   BITS |   SPEED (Msps) |
|--------------|--------|----------------|
| MAX5876EGK+D |     12 |            250 |
| MAX5877EGK+D |     14 |            250 |
| MAX5878EGK+D |     16 |            250 |

| DESIGNATION         |   QTY | DESCRIPTION                                                                                     |
|---------------------|-------|-------------------------------------------------------------------------------------------------|
| C1, C2, C4-C14, C37 |    14 | 0.1µF ± 10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104KT or Taiyo Yuden LMK105BJ104KV |
| C3                  |     1 | 1µF ± 10%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J105K                                 |
| C15-C19             |     5 | 1µF ± 10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105KT                                |
| C20-C24             |     5 | 10µF ± 10%, 10V tantalum capacitors (A) AVX TAJA106K010R or Kemet T494A106K010AS                |
| C25-C29             |     5 | 47µF ± 10%, 6.3V tantalum capacitors (B) AVX TAJB476K006R or Kemet T494B476K006AS               |
| C30-C36             |     0 | Not installed, ceramic capacitors (0603)                                                        |

## Features

- ♦ Fast Evaluation and Performance Testing
- ♦ LVDS-Compatible Inputs
- ♦ SMA Coaxial Connectors for Clock Input and Analog Outputs
- ♦ On-Board External 1.25V Voltage-Reference Circuit
- ♦ 50 Ω Matched Clock Input and Analog Output Signal Lines
- ♦ Single-Ended-to-Differential Clock Signal Conversion Circuitry
- ♦ Differential-Current-to-Single-Ended-Voltage Output Conversion Circuitry
- ♦ Full-Scale Current Output Configured for 20mA
- ♦ Fully Assembled and Tested

## Ordering Information

| PART                            | TEMP RANGE   | IC PACKAGE     |
|---------------------------------|--------------|----------------|
| 0 ° C to +70 ° C                | 68 QFN-EP*   | MAX5876EVKIT # |
| 0 ° C to +70 ° C                | 68 QFN-EP*   | MAX5877EVKIT # |
| MAX5878EVKIT # 0 ° C to +70 ° C | 68           | QFN-EP*        |

# Denotes lead-free and RoHS-compliant EV Kit.

* EP = Exposed paddle.

## Component List

| DESIGNATION                |   QTY | DESCRIPTION                                                                      |
|----------------------------|-------|----------------------------------------------------------------------------------|
| CLK, OUTPUTI, OUTPUTQ      |     3 | SMA PC-mount vertical connectors                                                 |
| J1, J2                     |     2 | 2 x 20-pin surface-mount headers (0.1in)                                         |
| JU1, JU2                   |     2 | 3-pin headers                                                                    |
| JU3, JU4                   |     2 | 2-pin headers                                                                    |
| L1-L5                      |     5 | Ferrite bead cores (0805) Fair-Rite 2508051217Z0                                 |
| OUTIP, OUTIN, OUTQP, OUTQN |     0 | Not installed, SMA PC-mount vertical connectors                                  |
| R1, R2, R4, R5             |     4 | 49.9 Ω ± 0.1% resistors (0603) IRC PFC-W0603RLF-03-49R9-B Panasonic ERA3EHB49R9V |
| R3, R6                     |     2 | 100 Ω ± 1% resistors (0603)                                                      |
| R7                         |     1 | 2k Ω ± 1% resistor (0603)                                                        |
| R8, R9                     |     2 | 24.9 Ω ± 1% resistors (0603)                                                     |
| R10-R14                    |     0 | Not installed, resistors (0603)                                                  |
| R15, R16                   |     2 | 10k Ω ± 5% resistors (0603)                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX5876/MAX5877/MAX5878 Evaluation Kits

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| T1, T2, T3    |     3 | 1:1 RF transformers Mini-Circuits ADTL1-12                    |
| T4, T5        |     2 | 1:1 RF transformers Coilcraft TTWB3010-1                      |
| U1            |     1 | See the EV Kit-Specific Component List                        |
| U2            |     1 | 1.25V voltage reference (8-pin SO) MAX6161AESA or MAX6161BESA |
| None          |     4 | Shunts (JU1-JU4)                                              |
| None          |     1 | PCB: MAX5876/7/8 Evaluation Kit #                             |

## EV Kit-Specific Component List

| EV KIT        | DESIGNATION   | DESCRIPTION                                       |
|---------------|---------------|---------------------------------------------------|
| MAX5876EVKIT# | U1            | MAX5876EGK+D (68-pin QFN-EP, 10mm x 10mm x 0.9mm) |
| MAX5877EVKIT# | U1            | MAX5877EGK+D (68-pin QFN-EP, 10mm x 10mm x 0.9mm) |
| MAX5878EVKIT# | U1            | MAX5878EGK+D (68-pin QFN-EP, 10mm x 10mm x 0.9mm) |

## Quick Start

Recommended equipment:

- Three 3.3V, 100mA DC power supplies
- Two 1.8V, 100mA DC power supplies
- Two signal generators with low phase noise and low jitter for clock input (e.g., HP 8664A)
- One 20-bit LVDS digital pattern generator for data inputs (e.g., HP 81250)
- One spectrum analyzer (e.g., HP 8560E)
- One voltmeter

The MAX5876/MAX5877/MAX5878 EV kits are fully assembled and tested surface-mount boards. Follow the steps below for board operation. Do not turn on power supplies or enable signal generators until all connections are completed (Figure 1):

- 1) Verify that shunts are installed across pins 2 and 3 of  jumpers JU1 (normal operation) and JU2 (offset binary input mode).
- 2) Verify  that  shunts  are  not  installed  across  jumpers JU3 and JU4 (internal reference).
- 3) Synchronize the digital pattern generator with the clock signal generator.
- 4) Connect the clock signal generator to the EV kit CLK SMA connector.
- 5) Verify that the digital pattern generator HP 81250 is programmed for valid LVDS output voltage levels and binary digital output.
- 6) Connect the digital pattern generator output to the J1 and J2 input header connectors on the EV kit board. The input header pins are labeled for proper connection to the digital pattern generator.

## Component Suppliers

| SUPPLIER           | PHONE        | WEBSITE               |
|--------------------|--------------|-----------------------|
| AVX                | 843-946-0238 | www.avxcorp.com       |
| Coilcraft          | 847-639-6400 | www.coilcraft.com     |
| Fair-Rite Products | 845-895-2055 | www.fair-rite.com     |
| IRC                | 361-992-7900 | www.irctt.com         |
| Kemet              | 864-963-6300 | www.kemet.com         |
| Mini-Circuits      | 718-934-4500 | www.minicircuits.com  |
| Panasonic          | 800-344-2112 | www.panasonic.com     |
| Taiyo Yuden        | 800-348-2496 | www.t-yuden.com       |
| TDK                | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX5876/MAX5877/MAX5878 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5876/MAX5877/MAX5878 Evaluation Kits

Figure 1. MAX5876/MAX5877/MAX5878 EV Kit Quick Start Setup

<!-- image -->

- 7) Connect a 1.8V power supply to the AVDD1 PC board pad. Connect the ground terminal of this supply to the AGND pad.
- 8) Connect a 3.3V power supply to the AVDD2 PC board pad. Connect the ground terminal of this supply to the AGND pad.
- 9) Connect a 1.8V power supply to the DVDD1 PC board pad. Connect the ground terminal of this supply to the DGND pad.
- 10) Connect a 3.3V power supply to the DVDD2 PC board pad. Connect the ground terminal of this supply to the DGND pad.
- 11) Connect a 3.3V power supply to the VDD\_CK PC board pad. Connect the ground terminal of this supply to the GND\_CK pad.
- 12) Turn on all five power supplies.
- 13) Enable the clock signal generator and the digital pattern generator.
- 14) Set the clock signal generator output power between +8dBm to +12dBm and the frequency (fCLK) to ≤ 500MHz.
- 15) An LVDS logic-high signal at SELIQP/SELIQN directs data into the I-DAC register. An LVDS logiclow signal at SELIQP/SELIQN directs data into the Q-DAC register. Refer to the LVDS-Compatible Digital  Inputs section in the MAX5876/MAX5877/ MAX5878 IC data sheets for detailed information on the SELIQ function.
- 16) Use the spectrum analyzer to view the MAX5876/ MAX5877/MAX5878 output spectrums or view the single-ended output waveforms by connecting an oscilloscope to OUTPUTQ or OUTPUTI SMA connectors.

<!-- image -->

## Detailed Description

The MAX5876/MAX5877/MAX5878 EV kits are designed to  simplify the evaluation of the MAX5876/MAX5877/ MAX5878 dual, 12-bit/14-bit/16-bit, 250Msps, currentoutput DACs. The MAX5876/MAX5877/MAX5878 operate with LVDS-compatible digital data inputs, a differential or single-ended clock input signal, and two power supplies (3.3V and 1.8V). The MAX5876/MAX5877/MAX5878 feature internal 1.2V reference voltage.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5876/MAX5877/MAX5878 Evaluation Kits

The MAX5876/MAX5877/MAX5878 EV kits provide header connectors J1 and J2 to interface with a pattern generator,  circuitry  that  converts  the  differential  current outputs to single-ended voltage signals, and circuitry to convert a user-supplied single-ended clock signal to a differential clock signal. The EV kit circuit also includes an external 1.25V reference source U2 (MAX6161) and a test point connector that can be used to overdrive the MAX5876/MAX5877/MAX5878 internal 1.2V bandgap reference. The EV kit board layout separates the circuit power into digital, analog, and clock planes to improve dynamic performance. The input data PC traces are 100 Ω differential controlled impedance and the analog output PC traces are 50 Ω controlled impedance.

## Power Supplies

The MAX5876/MAX5877/MAX5878 EV kits operate from a single 1.8V power supply connected to the DVDD1 and AVDD1 input power pads, and a single 3.3V power supply connected to the DVDD2, AVDD2, and VDD\_CK input power pads for simple operation. However, five separate power supplies are recommended to optimize dynamic performance. The EV kit PCB layout is divided into three sections: digital, analog, and clock. Using separate power supplies for each section reduces noise and improves the integrity of the analog output signal. When using separate power supplies, connect a 1.8V power supply across the DVDD1 and DGND pads and a 3.3V power supply across DVDD2 and DGND pads (digital). Connect a 1.8V power supply across the AVDD1 and AGND pads and a 3.3V power supply across AVDD2 and AGND pads (analog). Connect a 3.3V power supply across VDD\_CK and GND\_CK pads (clock).

## LVDS Digital Input Data

The MAX5876/MAX5877/MAX5878 EV kits provide two 0.1in, 2 x 20 headers (J1, J2) to interface an LVDS pattern generator to the EV kit. The header data pins are labeled on the PCB with their appropriate LVDS data bit designator. Use the labels on the EV kit board to match the data bits from the pattern generator to the corresponding data pins on headers J1 and J2. The input data is latched on the rising edge of the clock signal.

The MAX5876/MAX5877/MAX5878 SELIQ and XOR functions can also be controlled by applying an LVDS logic signal to the J1 header pins labeled SELIQP, SELIQN, XORP, and XORN. Refer to the LVDS-Compatible Digital Inputs section in the MAX5876/MAX5877/MAX5878 IC data sheets for detailed information on the SELIQ and XOR functions. When using the XOR function, install a 100 Ω resistor at the EV kit R14 PCB pad.

## Clock Signal

The MAX5876/MAX5877/MAX5878 operate with a differential clock input signal. However, the EV kit boards only require an external single-ended clock signal connected to the CLK SMA connector. The EV kits feature circuitry that converts the single-ended clock signal to a differential clock signal. The clock signal can be either a sine or a square wave. A minimum signal power amplitude of +8dBm is recommended to drive the clock input. The MAX5876/MAX5877/MAX5878 accept a clock input frequency in the 2MHz to 500MHz range.

## Two's-Complement/Offset-Binary Input Format

The two's-complement or offset-binary input modes of the MAX5876/MAX5877/MAX5878 are configured with jumper JU2. Apply either a two's-complement or offsetbinary formatted input pattern to connectors J1 and J2. See Table 1 for the jumper JU2 configuration.

## Reference Voltage

The MAX5876/MAX5877/MAX5878 require a reference voltage to set the full-scale output current of the DAC. The MAX5876/MAX5877/MAX5878 integrate a stable onchip bandgap reference of 1.2V that is selected by default during initial power-up. An external voltage reference must be connected to test point TP1 when the internal voltage reference is overdriven. The EV kits circuit  also  features  an  on-board,  external  1.25V  voltage reference (U2, MAX6161) that can be used to overdrive the  internal  bandgap reference. U2 has a tighter voltage-output tolerance and is less susceptible to temperature variations. See Table 2 to select the voltage reference source.

## Full-Scale Output Current

The MAX5876/MAX5877/MAX5878 require an external resistor to set the full-scale output current. The MAX5876/MAX5877/MAX5878 EV kits full-scale current are set to 20mA with resistor R7 (2k Ω ). Replace resistor R7 to adjust the full-scale output current. Refer to the Reference Architecture and Operation section in the MAX5876/MAX5877/MAX5878 IC data sheets to select different values for resistor R7.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5876/MAX5877/MAX5878 Evaluation Kits

## Outputs

The dual-output channels of the MAX5876/MAX5877/ MAX5878 are configured for differential current mode to achieve the best dynamic performance. The resistor and transformer networks at the DAC outputs are designed to convert the differential current signals into single-ended voltage signals with a 50 Ω output impedance. When an LVDS logic-high input signal is applied to the SELIQP/SELIQN pins, the data on the input bus (J1 and J2) is loaded into I-DAC and the reconstructed single-ended signal is available at the OUTPUTI SMA connector. When an LVDS logic-low input signal is applied to the SELIQP/SELIQN pins, the data on the input bus is loaded into Q-DAC and the reconstructed single-ended signal is available at the OUTPUTQ SMA connector. When outputs OUTPUTQ and OUTPUTI are terminated with 50 Ω external loads, the full-scale output signal level is equal to -2dBm.

To evaluate the converter's single-ended outputs, remove transformers T1, T2, and install SMA connectors  at  the  OUTIP,  OUTIN, OUTQP, and OUTQN locations. Probe the single-ended signals at the OUTIP and

## Table 1. Jumper JU2 TORB Configuration

| SHUNT POSITION   | TORB PIN CONNECTION                                        | EV KIT FUNCTION                              |
|------------------|------------------------------------------------------------|----------------------------------------------|
| 1-2              | Connected to DVDD2                                         | Two's-complement digital signal input format |
| 2-3              | Connected to DGND                                          | Offset-binary digital signal input format    |
| Not installed    | MAX5876/MAX5877/MAX5878 have an internal pulldown resistor | Offset-binary digital signal input format    |

## Table 2. Reference Voltage

| JUMPER JU3 SHUNT POSITION   | JUMPER JU4 SHUNT POSITION   | REFIO PIN CONNECTION                                              | EV KIT FUNCTION                                                         |
|-----------------------------|-----------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------------|
| Not installed               | Not installed               | Open (REFIO becomes the output of the internal bandgap reference) | Internal 1.2V reference enabled or connect an external reference to TP1 |
| Installed                   | Installed                   | Connected to U2 (MAX6161)                                         | U2 provides a precise 1.25V voltage reference                           |

## Table 3. JUMPER JU1 Power-Down Configuration

| SHUNT POSITION   | PD PIN CONNECTION                                          | EV KIT FUNCTION   |
|------------------|------------------------------------------------------------|-------------------|
| 1-2              | Connected to DVDD2                                         | Power-down mode   |
| 2-3              | Connected to DGND                                          |                   |
| Not installed    | MAX5876/MAX5877/MAX5878 have an internal pulldown resistor | Normal operation  |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

OUTIN SMA connectors for I-DAC. Probe the singleended signals at the OUTQP and OUTQN SMA connectors for Q-DAC. In a single-ended configuration the DAC output signal amplitude is equal to 1VP-P at each of the outputs.

## Power-Down Mode

The MAX5876/MAX5877/MAX5878 EV kits powerdown/normal operation mode can be configured with jumper JU1. See Table 3 for jumper JU1 configuration.

## PCB Layout

The MAX5876/MAX5877/MAX5878 EV kits are 4-layer PCB designs optimized for high-speed signals. All high-speed digital signal lines are routed through 100 Ω differential  impedance-matched transmission lines. All analog output traces are routed through 50 Ω impedance-matched transmission lines. The length of these 100 Ω and 50 Ω transmission lines is matched to within 40 mils (1mm) to minimize layout-dependent data skew. The PCB layout separates the digital, analog, and clock sections of the circuit for optimum performance.

## MAX5876/MAX5877/MAX5878 Evaluation Kits

Table 4. MAX5876/MAX5877/MAX5878 EV Kit Board Connector Guide

| EV KIT CONNECTOR PIN   | MAX5878 INPUT   | MAX5877 INPUT   | MAX5876 INPUT   |
|------------------------|-----------------|-----------------|-----------------|
| J1-39                  | XORN            | XORN            | XORN            |
| J1-37                  | XORP            | XORP            | XORP            |
| J1-35                  | SELIQP          | SELIQP          | SELIQP          |
| J1-33                  | SELIQN          | SELIQN          | SELIQN          |
| J1-31                  | B15P (MSB)      | B13P (MSB)      | B11P (MSB)      |
| J1-29                  | B15N (MSB)      | B13N (MSB)      | B11N (MSB)      |
| J1-27                  | B14P            | B12P            | B10P            |
| J1-25                  | B14N            | B12N            | B10N            |
| J1-23                  | B13P            | B11P            | B9P             |
| J1-21                  | B13N            | B11N            | B9N             |
| J1-19                  | B12P            | B10P            | B8P             |
| J1-17                  | B12N            | B10N            | B8N             |
| J1-15                  | B11P            | B9P             | B7P             |
| J1-13                  | B11N            | B9N             | B7N             |
| J1-11                  | B10P            | B8P             | B6P             |
| J1-9                   | B10N            | B8N             | B6N             |
| J1-7                   | B9P             | B7P             | B5P             |
| J1-5                   | B9N             | B7N             | B5N             |
| J1-3                   | B8P             | B6P             | B4P             |
| J1-1                   | B8N             | B6N             | B4N             |
| J2-39                  | B7P             | B5P             | B3P             |
| J2-37                  | B7N             | B5N             | B3N             |
| J2-35                  | B6P             | B4P             | B2P             |
| J2-33                  | B6N             | B4N             | B2N             |
| J2-31                  | B5P             | B3P             | B1P             |
| J2-29                  | B5N             | B3N             | B1N             |
| J2-27                  | B4P             | B2P             | B0P (LSB)       |
| J2-25                  | B4N             | B2N             | B0N (LSB)       |
| J2-23                  | B3P             | B1P             | N.C.            |
| J2-21                  | B3N             | B1N             | N.C.            |
| J2-19                  | B2P             | B0P (LSB)       | N.C.            |
| J2-17                  | B2N             | B0N (LSB)       | N.C.            |
| J2-15                  | B1P             | N.C.            | N.C.            |
| J2-13                  | B1N             | N.C.            | N.C.            |
| J2-11                  | B0P (LSB)       | N.C.            | N.C.            |
| J2-9                   | B0N (LSB)       | N.C.            | N.C.            |

N.C. = No connection.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5876/MAX5877/MAX5878 Evaluation Kits

<!-- image -->

Figure 2a. MAX5876 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5876/MAX5877/MAX5878 Evaluation Kits

Figure 2b. MAX5877 EV Kit Schematic

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5876/MAX5877/MAX5878 Evaluation Kits

<!-- image -->

Figure 2c. MAX5878 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5876/MAX5877/MAX5878 Evaluation Kits

Figure 3. MAX5876/MAX5877/MAX5878 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5876/MAX5877/MAX5878 Evaluation Kits

<!-- image -->

Figure 4. MAX5876/MAX5877/MAX5878 EV Kit PCB Layout-Component Side (Layer 1)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5876/MAX5877/MAX5878 Evaluation Kits

Figure 5. MAX5876/MAX5877/MAX5878 EV Kit PCB Layout-Ground Planes (Layer 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5876/MAX5877/MAX5878 Evaluation Kits

<!-- image -->

Figure 6. MAX5876/MAX5877/MAX5878 EV Kit PCB Layout-Power Planes (Layer 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5876/MAX5877/MAX5878 Evaluation Kits

Figure 7. MAX5876/MAX5877/MAX5878 EV Kit PCB Layout-Solder Side (Layer 4)

<!-- image -->

## Revision History

All pages changed at Rev 1.

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

14

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600