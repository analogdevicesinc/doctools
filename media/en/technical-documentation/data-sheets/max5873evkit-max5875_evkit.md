<!-- lastmod 2022-08-05 -->
## MAX5873/MAX5874/MAX5875 Evaluation Kits

## General Description

The  MAX5873/MAX5874/MAX5875  evaluation  kits  (EV kits)  are  fully  assembled  and  tested  circuit  boards  that contain  all  the  components  necessary  to  evaluate  the performance of the MAX5873 (12-bit), MAX5874 (14-bit), and  MAX5875  (16-bit)  dual  digital-to-analog  converters (DACs). The  200Msps  DACs  integrate  a  1.20V  voltage reference  and  provide  a  differential  current  output.  The EV  kits  operate  with  parallel  CMOS-compatible  digital data  inputs,  a  single-ended  clock  input,  and  require  a 3.3V/1.8V  dual-output  power  supply  for  simple  board operation.  Each  EV  kit  also  contains  an  external  1.25V reference voltage that can be used to drive the input reference voltage pin of the DAC.

## Part Selection Table

| PART NUMBER   |   BITS |   SPEED (Msps) |
|---------------|--------|----------------|
| MAX5873EGK+D  |     12 |            200 |
| MAX5874EGK+D  |     14 |            200 |
| MAX5875EGK+D  |     16 |            200 |

## Common Component List

| DESIGNATION         |   QTY | DESCRIPTION                                                                                   |
|---------------------|-------|-----------------------------------------------------------------------------------------------|
| C1, C2, C4-C14, C37 |    14 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K or Taiyo Yuden LMK105BJ104KV |
| C3                  |     1 | 1µF ±10%, 6.3V X5R ceramic capacitor (0402) Samsung CL05A105KQ5NNNC                           |
| C15-C19             |     5 | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K                                |
| C20-C24             |     5 | 10µF ±10%, 10V tantalum capacitors (A) AVX TAJA106K010R or Kemet T494A106K010AS               |
| C25-C29             |     5 | 47µF ±10%, 6.3V tantalum capacitors (B) AVX TAJB476K006R or Kemet T494B476K006AS              |

## Evaluate: MAX5873/MAX5874/ MAX5875

## Features

- Fast Evaluation and Performance Testing
- CMOS-Compatible Inputs
- SMA Coaxial Connectors for Clock Input and Analog Outputs
- On-Board External 1.25V Reference Voltage
- 50Ω Matched Clock Input and Analog Output Signal Lines
- Single-Ended-to-Differential Clock Signal Conversion Circuitry
- Differential Current to Single-Ended Voltage Output Conversion Circuitry
- Full-Scale Current Output Configured for 20mA
- Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE*   | IC PACKAGE   |
|---------------|---------------|--------------|
| MAX5873EVKIT# | 0°C to +70°C  | 68 QFN-EP†   |
| MAX5874EVKIT# | 0°C to +70°C  | 68 QFN-EP†   |
| MAX5875EVKIT# | 0°C to +70°C  | 68 QFN-EP†   |

*EV kit PC board temperature range only.

†EP = Exposed paddle.

#Denotes the RoHS-compliant device.

| DESIGNATION                |   QTY | DESCRIPTION                                      |
|----------------------------|-------|--------------------------------------------------|
| C30-C36                    |     0 | Not installed, ceramic capacitors (0603)         |
| CLK, OUTPUTI, OUTPUTQ      |     3 | SMAPC-mount vertical connectors                  |
| J1, J2                     |     2 | 2 x 20-pin surface-mount headers (0.1in)         |
| JU1, JU2, JU3              |     3 | 3-pin headers                                    |
| JU4, JU5                   |     2 | 2-pin headers                                    |
| L1-L5                      |     5 | Ferrite bead cores (0805) Fair-Rite 2508051217Z0 |
| OUTIP, OUTIN, OUTQP, OUTQN |     0 | Not installed, SMAconnectors                     |
| R1, R2, R4, R5             |     4 | 49.9Ω ±0.1% resistors (0603) ERA-3AEB49R9V       |
| R3, R6                     |     2 | 100Ω ±1% resistors (0603)                        |
| R7                         |     1 | 2kΩ ±1% resistor (0603)                          |
| R8, R9                     |     2 | 24.9Ω ±1% resistors (0603)                       |

<!-- image -->

## MAX5873/MAX5874/MAX5875 Evaluation Kits

## Common Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                |
|---------------|-------|--------------------------------------------|
| R10-R47       |     0 | Not installed, resistors (0603)            |
| T1, T2, T3    |     3 | 1:1 RF transformers Mini-Circuits ADTL1-12 |
| T4, T5        |     2 | 1:1 RF transformers Coilcraft TTWB3010-1   |
| U1            |     1 | See the EV Kit Specific Component List     |

## EV Kit Specific Component List

| EV KIT PART NUMBER   | DESIGNATION   | DESCRIPTION                                     |
|----------------------|---------------|-------------------------------------------------|
| MAX5873EVKIT#        | U1            | MAX5873EGK (68-pin QFN-EP, 10mm x 10mm x 0.9mm) |
| MAX5874EVKIT#        | U1            | MAX5874EGK (68-pin QFN-EP, 10mm x 10mm x 0.9mm) |
| MAX5875EVKIT#        | U1            | MAX5875EGK (68-pin QFN-EP, 10mm x 10mm x 0.9mm) |

## Quick Start

## Recommended Equipment

- Three 3.3V, 100mA DC power supplies
- Two 1.8V, 100mA DC power supplies
- Two signal generators with low phase noise and low jitter for clock inputs (e.g., Agilent 8644B)
- A dual, 12-bit (MAX5873), 14-bit (MAX5874), or 16-bit (MAX5875) digital pattern generator for data inputs (e.g., DG2020A)
- Spectrum analyzer (e.g., Rohde &amp; Schwartz FSU)
- Voltmeter

The EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not turn  on  power  supplies  or  enable  signal  generators until all connections are completed (Figure 1) .

- 1) Verify that a shunt is installed across pins 1 and 2 of jumper JU1 (dual-port input enabled).
- 2) Verify  that  shunts  are  installed  across  pins  2  and  3 of  jumpers  JU2  (normal  operation),  and  JU3  (offset binary input mode).

Evaluate: MAX5873/MAX5874/

MAX5875

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| U2            |     1 | 1.25V voltage reference (8-pin SO) MAX6161AESA or MAX6161BESA |
| -             |     5 | Shunts (JU1-JU5)                                              |
| -             |     1 | MAX5875 PC board                                              |

## Component Suppliers

| SUPPLIER           | PHONE        | WEBSITE               |
|--------------------|--------------|-----------------------|
| AVX                | 843-946-0238 | www.avxcorp.com       |
| Coilcraft          | 847-639-6400 | www.coilcraft.com     |
| Fair-Rite Products | 845-895-2055 | www.fair-rite.com     |
| IRC                | 361-992-7900 | www.irctt.com         |
| Kemet              | 864-963-6300 | www.kemet.com         |
| Mini-Circuits      | 718-934-4500 | www.minicircuits.com  |
| Taiyo Yuden        | 800-348-2496 | www.t-yuden.com       |
| TDK                | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX5873/MAX5874/ MAX5875 when contacting these manufacturers.

- 3) Verify  that  no  shunts  are  installed  across  jumpers JU4 and JU5 (internal reference).
- 4) Install  a  shunt  across  pin  J1-37  (header  J1)  and ground (pin J1-38) (XOR disabled).
- 5) Install  a  shunt  across  pin  J1-33  (header  J1)  and DGND (pin J1-34) to ground the SELIQ pin (recommended for dual-port input operation).
- 6) Synchronize the digital pattern generator (DG2020A) and the spectrum analyzer to the clock signal generator.
- 7) Connect the clock signal generator to the CLK SMA connector on the EV kit.
- 8) Verify that the digital pattern generator is programmed for valid CMOS output voltage levels and offset binary digital outputs.
- 9) Connect the digital pattern generator outputs to the J1  and  J2  input  header  connectors  on  the  EV  kit board. See the Pattern Generator Connection section for proper connection.
- 10)  Connect  the  spectrum  analyzer  to  the  OUTPUTQ SMA connector or to the OUTPUTI SMA connector.

│

Evaluate: MAX5873/MAX5874/

Figure 1. Input Voltage and Current at 90V Input

<!-- image -->

- 11)  Connect a 1.8V, 100mA power supply to the AVDD1 PC board pad. Connect the ground terminal of this supply to AGND.
- 12)  Connect a 3.3V, 100mA power supply to the AVDD2 PC board pad. Connect the ground terminal of this supply to AGND.
- 13)  Connect a 1.8V, 100mA power supply to the DVDD1 PC board pad. Connect the ground terminal of this supply to DGND.
- 14)  Connect a 3.3V, 100mA power supply to the DVDD2 PC board pad. Connect the ground terminal of this supply to DGND.
- 15)  Connect a 3.3V, 100mA power supply to the VDD\_CK PC board pad. Connect the ground terminal of this supply to CLKGND.
- 16)  Turn on all five power supplies.
- 17)  Enable the clock signal generators (HP 8664A) and the digital pattern generator.
- 18)  Set the clock signal generator output power between +8dBm  to  +12dBm  and  the  frequency  (f CLK )  to ≤200MHz.
- 19)  Use the spectrum analyzer to view the DAC output spectrum or view the single-ended output waveforms using an oscilloscope on SMA connectors OUTPUTQ or OUTPUTI.

## Detailed Description

The MAX5873/MAX5874/MAX5875 EV kits are designed to  simplify  the  evaluation  of  the  MAX5873  (12-bit), MAX5874 (14-bit), or  MAX5875 (16-bit),  200Msps,  dual current-output  DACs.  The  DACs  operate  with  CMOScompatible digital data inputs, a single-ended clock input signal, an internal 1.20V reference voltage, 3.3V and 1.8V power supplies.

The  EV  kits  provide  header  connectors  J1  and  J2  to interface with a pattern generator, circuitry that converts the  differential  current  outputs  to  single-ended  voltage signals,  and  circuitry  to  convert  a  user-supplied  singleended clock signal to a differential clock signal. The EV kit circuit also includes an external 1.25V reference voltage source U2 (MAX6161) and a test point connector  that can be used to overdrive the DACs' internal 1.20V bandgap reference. The EV kit board layout separates the circuit power  into  digital,  analog,  and  clock  planes  to  improve dynamic performance.

## Power Supplies

The EV kits can operate from a single 1.8V power supply connected to the DVDD1 and AVDD1 input power pads, and a single 3.3V power supply connected to the DVDD2, AVDD2, and VDD\_CK input power pads for board operation.  However,  five  separate  power  supplies  are  recommended for optimum dynamic performance.

│

## MAX5873/MAX5874/MAX5875 Evaluation Kits

The EV kit PC board layout is divided into three sections: digital, analog, and clock. Using separate power supplies for  each  section  reduces  crosstalk  noise  and  improves the  integrity  of  the  output  signal.  When  using  separate power supplies, connect a 1.8V power supply across the DVDD1 and DGND pads and a 3.3V power supply across DVDD2 and DGND pads (digital). Connect a 1.8V power supply  across  the AVDD1  and AGND  pads  and  a  3.3V power supply across the AVDD2 and AGND pads (analog). Connect a 3.3V power supply across the VDD\_CK and CLKGND pads (clock).

## CMOS Digital Input Data

The EV kits provide two 0.1in 2 x 20 headers (J1 and J2) to  interface  a  dual  CMOS  pattern  generator  to  the  EV kit.  The  header  data  pins  are  labeled  on  the  PC  board for  channel A  (J1)  and  channel  B  (J2).  See  Table  5  for appropriate  connections.  Use  the  labels  on  the  EV  kit board to match the data bits from the pattern generator to the corresponding data pins on headers J1 and J2. The input data is latched on the rising edge of the clock signal.

The  DAC  SELIQ  and  XOR  functions  can  also  be  controlled  by  applying a high or low logic signal to the corresponding  J1  header  pins.  Refer  to  the CMOS  DAC Inputs section in the MAX5873, MAX5874, or MAX5875 DAC data sheet for detailed information on the SELIQ and XOR functions.

## Table 1. TORB Configuration (Jumper JU3)

| SHUNT POSITION   | TORB PIN CONNECTION                       | EV KIT FUNCTION                              |
|------------------|-------------------------------------------|----------------------------------------------|
| 1-2              | Connected to DVDD2                        | Two's-complement digital signal input format |
| 2-3              | Connected to DGND                         | Offset binary digital signal input format    |
| Not Installed    | The DAC has an internal pulldown resistor | Offset binary digital signal input format    |

## Table 2. DORI Configuration Mode (Jumper JU1)

| SHUNT LOCATION   | DORI PIN CONNECTION                       | EV KIT FUNCTION                      |
|------------------|-------------------------------------------|--------------------------------------|
| 1-2              | Connected to DVDD2                        | Dual-port (parallel) input mode      |
| 2-3              | Connected to DGND                         | Single-port (interleaved) input mode |
| Not Installed    | The DAC has an internal pulldown resistor | Single-port (interleaved) input mode |

│

## Evaluate: MAX5873/MAX5874/ MAX5875

## Clock Signal

Each DAC operates with a differential clock input signal. However,  the  EV  kit  board  only  requires  an  external single-ended  clock  signal  connected  to  the  CLK  SMA connector. The EV kit features circuitry that converts the single-ended clock signal to a differential clock signal. The clock signal can be either a sine or a square wave. A minimum signal power amplitude of +8dBm is recommended to drive the clock input.

## Two's-Complement/Offset Binary Input Format

The  DAC's  two's-complement  or  offset  binary  input modes can be configured with jumper JU3. Apply either a two's-complement or offset binary formatted input code to  connectors  J1  and  J2.  See  Table  1  for  jumper  JU3 configuration.

## Dual-Port (Parallel)/Single-Port (Interleaved) Input Mode

The DAC's dual- or single-port input modes can be configured with jumper JU1. In dual-port input mode the digital input signal is captured on both input ports. In interleavedport input mode the digital input signals are captured on channel B input port. A control signal on SELIQ indicates when I- or Q-channel data is available. See Table 2 for jumper JU1 configuration.

## MAX5873/MAX5874/MAX5875 Evaluation Kits

## Reference Voltage

The DAC requires a reference voltage to set the full-scale output  current.  The  DAC  IC  integrates  a  stable  1.20V on-chip  bandgap  reference  that  is  selected  by  default during  initial  power-up.  An  external  voltage  reference must  be  connected  to  test  point  TP1  when  the  internal voltage  reference  is  overdriven.  The  EV  kit  circuit  also features  an  on-board  external  1.25V  reference  voltage (U2, MAX6161) that can be used to overdrive the internal bandgap reference. U2 has a tighter voltage output tolerance  and  is  less  susceptible  to  temperature  variations. See Table 3 to select the voltage reference source.

## Full-Scale Output Current

The  DAC  requires  an  external  resistor  to  set  the  fullscale  output current. The EV kit full-scale current is set to  20mA  by  resistor  R7  (2kΩ).  Replace  resistor  R7  to adjust the full-scale output current. Refer to the Reference Architecture and Operation section in the respective DAC data sheet to select different values for resistor R7.

## Outputs

The dual-output channels of each DAC are configured for differential current mode to achieve the best dynamic performance. The resistor and transformer networks at the DAC outputs are designed to convert the differential current signals into single-ended voltage signals with a 50Ω

## Evaluate: MAX5873/MAX5874/ MAX5875

impedance. In dual-port mode, data at pins A\_ are loaded into  Q-DAC  and  the  reconstructed  single-ended  signal is  available  at  OUTPUTQ  SMA  connector.  Data  at  pins B\_ are loaded into I-DAC and the reconstructed singleended  signal  is  available  at  OUTPUTI  SMA  connector. When outputs OUTPUTQ and OUTPUTI are terminated with 50Ω external loads, the full-scale output signal level is equal to -2dBm.

To evaluate the converter's single-ended outputs, remove transformers  T1  and  T2.  Then  probe  the  single-ended signals at the OUTIP and OUTIN SMA connectors (must be installed)  for  the  I-DAC.  Probe  the  single-ended  signals at the OUTQP and OUTQN SMA connectors (must be installed) for the Q-DAC. In single-ended configuration the DAC output signal amplitude is equal to 1V P-P  at each of the outputs.

## Power-Down Mode

The DAC's EV kit power-down mode can be configured with  jumper  JU2.  Install  a  shunt  across  pins  1  and  2 of  jumper  JU2  to  power  down  the  EV  kit  circuit.  Install a  shunt  across  pins  2  and  3  of  jumper  JU2  for  normal operation. Removing the shunt from jumper JU2 will also place the circuit in normal operation mode, as the DAC IC contains an internal pulldown resistor at the PD pin. See Table 4 for jumper JU2 configuration.

Table 3. Reference Voltage (Jumpers JU4 and JU5)

| SHUNT LOCATION ON JUMPER JU4   | SHUNT LOCATION ON JUMPER JU5   | REFIO PIN CONNECTION                                              | EV KIT FUNCTION                                                          |
|--------------------------------|--------------------------------|-------------------------------------------------------------------|--------------------------------------------------------------------------|
| Not Installed                  | Not Installed                  | Open (REFIO becomes the output of the internal bandgap reference) | Internal 1.20V reference enabled or connect an external reference to TP1 |
| Installed                      | Installed                      | Connected to U2 (MAX6161)                                         | U2 provides a precision 1.25V voltage reference                          |

Note:

Installing JU5 without JU4 is NOT allowed.

## Table 4. Power-Down Configuration (Jumper JU2)

| SHUNT LOCATION   | PD PIN CONNECTION                         | EV KIT FUNCTION   |
|------------------|-------------------------------------------|-------------------|
| 1-2              | Connected to DVDD2                        | Power-down        |
| 2-3              | Connected to DGND                         | Normal operation  |
| Not Installed    | The DAC has an internal pulldown resistor | Normal operation  |

│

## MAX5873/MAX5874/MAX5875 Evaluation Kits

## Pattern Generator Connection

The  MAX5873,  MAX5874,  and  MAX5875  EV  kits  are assembled using the same PC board. The input data connectors J1 and J2 are labeled on the PC board silk screen to  accommodate  connecting  a  16-bit  pattern  generator to  the  MAX5875 EV kit. The silk screen input bit labels DO NOT match the input bit pins on the 12-bit MAX5873 and the 14-bit MAX5874 DACs. Use the connector guide (Table 5) to match the pattern generator digital output to the EV kit board connectors J1 and J2 when evaluating the MAX5873 or the MAX5874.

## PC Board Layout

The MAX5873/MAX5874/MAX5875 EV kit is a four-layer PC  board  design  optimized  for  high-speed  signals.  All high-speed  signal  lines  are  routed  through  50Ω  imped -ance-matched  transmission  lines.  The  length  of  these 50Ω transmission lines is matched to within 40 mils (1mm) to minimize layout-dependent data skew. The PC board layout separates the digital, analog, and clock sections of the circuit for optimum performance.

## Evaluate: MAX5873/MAX5874/ MAX5875

## Table 5. MAX5873, MAX5874, MAX5875 EV Kit Board Connector Guide

| EV KIT CONNECTOR PIN   | MAX5875 INPUT   | MAX5874 INPUT   | MAX5873 INPUT   |
|------------------------|-----------------|-----------------|-----------------|
| J1-37                  | XOR             | XOR             | XOR             |
| J1-33                  | SELIQ           | SELIQ           | SELIQ           |
| J2-9                   | A0 (LSB)        | N.C.            | N.C.            |
| J2-11                  | A1              | N.C.            | N.C.            |
| J2-13                  | A2              | A0 (LSB)        | N.C.            |
| J2-15                  | A3              | A1              | N.C.            |
| J2-17                  | A4              | A2              | A0 (LSB)        |
| J2-19                  | A5              | A3              | A1              |
| J2-21                  | A6              | A4              | A2              |
| J2-23                  | A7              | A5              | A3              |
| J2-25                  | A8              | A6              | A4              |
| J2-27                  | A9              | A7              | A5              |
| J2-29                  | A10             | A8              | A6              |
| J2-31                  | A11             | A9              | A7              |
| J2-33                  | A12             | A10             | A8              |
| J2-35                  | A13             | A11             | A9              |
| J2-37                  | A14             | A12             | A10             |
| J2-39                  | A15 (MSB)       | A13 (MSB)       | A11 (MSB)       |
| J1-1                   | B0 (LSB)        | N.C.            | N.C.            |
| J1-3                   | B1              | N.C.            | N.C.            |
| J1-5                   | B2              | B0 (LSB)        | N.C.            |
| J1-7                   | B3              | B1              | N.C.            |
| J1-9                   | B4              | B2              | B0 (LSB)        |
| J1-11                  | B5              | B3              | B1              |
| J1-13                  | B6              | B4              | B2              |
| J1-15                  | B7              | B5              | B3              |
| J1-17                  | B8              | B6              | B4              |
| J1-19                  | B9              | B7              | B5              |
| J1-21                  | B10             | B8              | B6              |
| J1-23                  | B11             | B9              | B7              |
| J1-25                  | B12             | B10             | B8              |
| J1-27                  | B13             | B11             | B9              |
| J1-29                  | B14             | B12             | B10             |
| J1-31                  | B15 (MSB)       | B13 (MSB)       | B11 (MSB)       |

N.C. = No connection.

│

Figure 2. MAX5875 EV Kit Schematic

<!-- image -->

Figure 3. MAX5874 EV Kit Schematic

<!-- image -->

Figure 4. MAX5873 EV Kit Schematic

<!-- image -->

Evaluate: MAX5873/MAX5874/

Figure 5. MAX5873/MAX5874/MAX5875 EV Kit Component Placement Guide-Component Side

<!-- image -->

│

Figure 6. MAX5873/MAX5874/MAX5875 EV Kit PC Board Layout-Component Side (Layer 1)

<!-- image -->

Figure 7. MAX5873/MAX5874/MAX5875 EV Kit PC Board Layout-Ground Planes (Layer 2)

<!-- image -->

Figure 8. MAX5873/MAX5874/MAX5875 EV Kit PC Board Layout-Power Planes (Layer 3)

<!-- image -->

Figure 9. MAX5873/MAX5874/MAX5875 EV Kit PC Board Layout-Solder Side (Layer 4)

<!-- image -->

│

## MAX5873/MAX5874/MAX5875 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 3/05            | Initial release                                                                                                            | -               |
|                 1 | 6/06            | The existing MAX5875 EV Kit Data Sheet is modified so that it can also be used with the MAX5873 EV Kit and MAX5874 EV Kit. | 1-14            |
|                 2 | 1/21            | Updated Ordering Information table, Common Component List table, EV Kit Specific Component List table                      | 1, 2            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluate: MAX5873/MAX5874/

MAX5875