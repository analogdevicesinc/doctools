<!-- lastmod 2022-08-05 -->
## MAX5886/MAX5887/MAX5888 Evaluation Kits

## Evaluate: MAX5886/MAX5887/MAX5888

## General Description

The MAX5886/MAX5887/MAX5888 evaluation kits (EV  kits)  are  fully  assembled  and  tested  circuit  boards that  contain  all  the  components  necessary  to  evaluate the  performance  of  the  MAX5886  (12-bit),  MAX5887 (14-bit), and MAX5888 (16-bit), 500Msps, current-output, digital-to-analog converters (DACs). Each EV kit requires low-voltage differential-signaling (LVDS)-compatible data inputs,  a  single-ended  clock  input,  and  3.3V  power supplies for simple board operation.

## Part Selection Table

| PART          |   RESOLUTION (BITS) |   SPEED (Msps) |
|---------------|---------------------|----------------|
| MAX5886EGK-D+ |                  12 |            500 |
| MAX5887EGK-D+ |                  14 |            500 |
| MAX5888EGK-D+ |                  16 |            500 |

## Common Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                                    |
|--------------------|-------|------------------------------------------------------------------------------------------------|
| C1                 |     0 | Not installed, ceramic capacitor (0603)                                                        |
| C2-C15             |    14 | 0.1μF ±10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104KT or Taiyo Yuden LMK105BJ104KV |
| C16, C28           |     0 | Not installed, ceramic capacitor (0805)                                                        |
| C17, C20, C23      |     3 | 47μF ±10%, 6.3V tantalum capacitors (B) AVX TAJB476K006R or Kemet T494B476K006AS               |
| C18, C21, C24, C26 |     4 | 10μF ±10%, 10V tantalum capacitors (A) AVX TAJA106K010R or Kemet T494A106K010AS                |
| C19, C22, C25, C27 |     4 | 1μF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105KT                                |
| J1, J2             |     2 | 2 x 20-pin surface-mount headers (0.1in)                                                       |
| JU1-JU5            |     5 | 2-pin headers                                                                                  |
| JU6                |     0 | Not installed                                                                                  |
| L1-L4              |     4 | Ferrite bead cores (4532) Würth Elektronik 74279226101                                         |
| R1-R4              |     4 | 100Ω ±0.1% resistors (0603)                                                                    |
| R5                 |     1 | 100Ω ±1% resistor (0603)                                                                       |

## Features

- Quick Dynamic Performance Evaluation
- LVDS-Compatible Data Inputs
- SMA Coaxial Connectors for Clock Input and Analog Output
- 50Ω Matched Clock Input and Analog Output Signal Lines
- Single-Ended to Differential Clock-Signal Conversion Circuitry
- Differential Current Output to Single-Ended Voltage Signal Output Conversion Circuitry
- Full-Scale Current Output Configured for 20mA
- External 1.25V Reference Source Available
- Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX5886EVKIT# | 0°C to +70°C | 68 QFN-EP**  |
| MAX5887EVKIT# | 0°C to +70°C | 68 QFN-EP**  |
| MAX5888EVKIT# | 0°C to +70°C | 68 QFN-EP**  |

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| R6, R8, R9    |     0 | Not installed, resistors (0603)                                     |
| R7            |     1 | 2kΩ ±1% resistor (0603)                                             |
| R10, R11      |     2 | 24.9Ω ±1% resistors (0402)                                          |
| R12, R13      |     2 | 0Ω ±5% resistors (0402)                                             |
| CLK, OUT      |     2 | SMA PC-mount vertical connectors                                    |
| OUTP, OUTN    |     0 | Not installed, scope probe connectors Tektronix 131-4244-00         |
| T1, T3        |     2 | Transformers Mini-Circuits ADTL1-12                                 |
| T2            |     1 | 1:1 balun transformer Coilcraft TTWB3010-1L                         |
| TP1, TP2, TP3 |     3 | PC test points, black                                               |
| TP4           |     1 | PC test point, red                                                  |
| U1            |     1 | See the EV Kit Specific Component List                              |
| U2            |     1 | 1.25V voltage reference (8-pin SO) Maxim MAX6161AESA or MAX6161BESA |
| -             |     5 | Shunts (JU1-JU5)                                                    |
| -             |     1 | MAX5886/MAX5887/MAX5888 EV kit PC board                             |

<!-- image -->

## MAX5886/MAX5887/MAX5888 Evaluation Kits

## EV Kit Specific Component List

| DESIGNATION   | DESIGNATION   | DESCRIPTION                                  |
|---------------|---------------|----------------------------------------------|
| MAX5886EVKIT  | U1            | MAX5886EGK-D (68 QFN-EP 10mm x 10mm x 0.9mm) |
| MAX5887EVKIT  | U1            | MAX5887EGK-D (68 QFN-EP 10mm x 10mm x 0.9mm) |
| MAX5888EVKIT  | U1            | MAX5888EGK-D (68 QFN-EP 10mm x 10mm x 0.9mm) |

## Quick Start

## Recommended Equipment

- Three 3.3VDC, 1A power supplies
- RF signal generator with low phase noise and low jitter for clock input (e.g., HP/Agilent 8644B)
- 12-bit (MAX5886EVKIT), 14-bit (MAX5887EVKIT), or 16-bit (MAX5888EVKIT) digital pattern generator for LVDS data inputs (e.g., Agilent 81250)
- Spectrum analyzer (e.g., Rohde &amp; Schwartz FSU)
- Voltmeter

These  EV  kits  are  fully  assembled  and  tested  surfacemount boards. Follow the steps below for board operation. Do not enable signal generators until all connections are completed:

- 1) Verify  that  no  shunts  are  installed  across  jumpers JU1, JU2 (DAC uses the 1.2V internal voltage refer -ence), and JU3 (DAC in normal operation mode).
- 2) Verify that a shunt is installed across jumper JU4.
- 3) Verify that no shunt is installed across jumper JU5.
- 4) Synchronize  the  digital  pattern  generator  (Agilent 81250)  to  the  clock  signal  generator  (HP/Agilent 8644B).
- 5) Connect the clock signal generator to the CLK SMA connectors on the EV kit.
- 6) Verify that the digital pattern generator is programmed for LVDS outputs.

## Evaluate: MAX5886/MAX5887/MAX5888

## Component Suppliers

| SUPPLIER         | PHONE        | WEBSITE               |
|------------------|--------------|-----------------------|
| AVX              | 843-946-0238 | www.avxcorp.com       |
| Coilcraft        | 847-639-6400 | www.coilcraft.com     |
| Kemet            | 864-963-6300 | www.kemet.com         |
| Mini-Circuits    | 718-934-4500 | www.minicircuits.com  |
| Panasonic        | 714-373-7366 | www.panasonic.com     |
| Taiyo Yuden      | 800-348-2496 | www.t-yuden.com       |
| TDK              | 847-803-6100 | www.component.tdk.com |
| Würth Elektronik | +49 7942 945 | www.we-online.com     |

Note: Indicate that you are using the MAX5886/MAX5887/MAX5888 when contacting these component suppliers.

- 7) Connect  the  digital  pattern  generator  output  to  the input  header  connectors  J1  and  J2  on  the  EV  kit board. The input header pins are labeled for proper connection  with  the  digital  pattern  generator  (i.e., connect  the  positive  rail  of  bit  0  to  the  header  pin labeled B0P and complementary negative rail to the header pin labeled B0N, etc.).
- 8) Connect  the  spectrum  analyzer  to  the  OUT  SMA connector.
- 9) Connect the ground terminal of a 3.3V power supply to  GND\_CK.  Next,  connect  the  positive  terminal  of this supply to VDD\_CK.
- 10)  Connect the ground terminal of a 3.3V power supply to DGND. Next, connect the positive terminal of this supply to DVDD.
- 11)  Connect the ground terminal of a 3.3V power supply to AGND. Next, connect the positive terminal of this supply to AVDD.
- 12)  Turn on the three power supplies.
- 13)  With a voltmeter, verify that 1.2V is measured at the VREF PC board pad on the EV kit.
- 14)  Enable  the  clock  signal  generator  and  the  digital pattern  generator.  Set  the  clock  signal  generator output power to +10dBm and the frequency (f CLK ) to less than or equal to 500MHz.
- 15) Use  the  spectrum  analyzer  to  view  the EV  kit output spectrum or view the output waveform using an oscilloscope.

## MAX5886/MAX5887/MAX5888 Evaluation Kits

## Detailed Description

The MAX5886/MAX5887/MAX5888 EV kits are designed to  simplify  the  evaluation  of  the  MAX5886  (12-bit), MAX5887  (14-bit), or MAX5888  (16-bit),  500Msps, current-output DACs. The DACs require LVDS-compatible data  inputs,  differential  clock  input  signals,  a  1.2V reference  voltage,  and  3.3V  power  supplies  for  simple board operation.

The  EV  kits  provide  header  connectors  to  easily  interface with an LVDS pattern generator, circuitry to convert the differential current outputs to a single-ended voltage signal,  and  circuitry  to  convert  a  user-supplied  singleended clock signal to a differential clock signal required by the DAC. The EV kit circuit includes different options for  supplying  a  reference  voltage  to  the  DAC.  The  EV kit  circuit  can  operate  with  a  single  3.3V  power  supply, but also supports the use of three separate 3.3V power supplies  by  dividing  the  circuit grounds  into  digital, analog,  and  digital  clock  ground  planes  that  improve dynamic  performance.  The  three  ground  planes  are connected together on the back of the PC board.

## Power Supplies

The EV kits can operate from a single 3.3V power supply connected  to  the  VDD\_CK,  DVDD,  AVDD  input  power pads and their respective ground pads for simple board operation. However, three separate 3.3V power supplies are  recommended  for  optimum  dynamic  performance. The EV kit PC board layout is divided into three sections: digital, analog, and clock. Using separate power supplies for  each  section  reduces  crosstalk  and  improves  the output signal integrity. When using separate power supplies, connect each power supply across the DVDD and DGND PC board pads (digital), across the VDD\_CK and GND\_CK PC board pads (clock), and across the AVDD and AGND PC board pads (analog) on the EV kit.

## LVDS Input Data

These EV kits provide two 0.1in 2 x 20 header connectors (J1 and J2) to allow interface of a 12-bit, 14-bit, or 16-bit LVDS pattern generator. The header data pins are labeled on  the  board  with  the  appropriate  data  bit  designation. Use the labels on the EV kit to match the data bits from the  LVDS  pattern  generator  to  the  corresponding  data pins  on  J1  and  J2.  The  positive  rail  of  a  bit  is  labeled BxP (positive) and the complementary rail is labeled BxN (negative) where x is the bit number.

## Evaluate: MAX5886/MAX5887/MAX5888

## Clock Signal

The  DAC  requires  a  differential  clock  input  signal  with minimal jitter. The EV kit circuit provides single-ended to differential  conversion  circuitry.  The  user  must  supply  a single-ended clock signal at the CLK SMA connector.

The clock signal can be either a sine wave or a square wave.  For  a  sine  wave,  2V P-P (+10dBm)  amplitude  is recommended  and  for  a  square  wave  greater  than  a 0.5V P-P  signal is recommended.

## Reference Voltage Options

The DAC requires a reference voltage to set the full-scale analog  signal  voltage  output.  The  EV  kit  features  three ways to provide a reference voltage to the DAC: internal, on-board external, and user-supplied external reference.

Verify  that  no  shunt  is  connected  across  jumper  JU1  to use the internal 1.2V bandgap reference. The reference voltage can be measured at the VREF pad on the EV kit. The internal reference can be overdriven by an external reference to enhance accuracy and drift performance or for  gain  control.  The  EV  kit  circuit  is  designed  with  an on-board 1.25V temperature-stable external voltage refer -ence source U2 (MAX6161) that can be used to overdrive the internal reference provided by the DAC. Install shunts across jumpers JU1 and JU2 to use the on-board external reference. The user can also supply an external voltage reference in the range of 0.125V to 1.25V by connecting a voltage source to the VREF pad and removing the shunts across jumpers JU1 and JU2. See Table 1 to configure the shunts across jumpers JU1 and JU2 and select the source of the reference voltage.

## Table 1. Reference Voltage Selection

| JU1 AND JU2 SHUNT POSITIONS   | VOLTAGE REFERENCE MODE                                            |
|-------------------------------|-------------------------------------------------------------------|
| Installed                     | External 1.25V reference (U2) connected to REFIO pin              |
| Not installed                 | DAC internal 1.2V bandgap reference                               |
| Not installed                 | User-supplied voltage reference at the VREF pad (0.125V to 1.25V) |

## MAX5886/MAX5887/MAX5888 Evaluation Kits

## Table 2. Power-Down (Jumper JU3)

| SHUNT         | FUNCTION         |
|---------------|------------------|
| Installed     | Power-down mode  |
| Not installed | Normal operation |

## Full-Scale Output Current

The DAC requires an external resistor to set the full-scale output current. The EV kit full-scale current is set to 20mA with  resistor  R7.  Replace  resistor  R7  to  adjust  the  fullscale output current. Refer to the Reference Architecture and  Operation section  in  the  DAC  data  sheet  to  select different values for R7.

## Analog Output

The DAC complementary current outputs are terminated into 50Ω resistance to generate differential voltage signals with  amplitudes  of  1V P-P   differential.  The  positive  and negative rails of the differential signal can be sampled at the OUTP and OUTN probe pads. The differential signal is  converted into a 50Ω singled-ended signal with balun transformer T2 and can be sampled at the OUT SMA con -nector. A  shunt  on  jumper  JU4  connects  the  center  tap of transformer T2 to AGND, thus enhancing the dynamic performance of the DAC. The single-ended output signal after the transformer generates a -3dBm full-scale output power  when  terminated  into  50Ω. A  shunt  on  jumper JU4 should always be installed for optimum dynamic performance.

## Power-Down

The DAC can be powered down or powered up by configuring jumper JU3. In power-down mode, the total power dissipation of the DAC is reduced to less than 1mW. See Table 2 for jumper JU3 configuration.

## Evaluate: MAX5886/MAX5887/MAX5888

Table 3. Segment-Shuffling Mode (Jumper JU5)

| SHUNT         | SEL0 PIN                                                | SEGMENT-SHUFFLING MODE   |
|---------------|---------------------------------------------------------|--------------------------|
| Installed     | Connected to DVDD                                       | Enabled                  |
| Not installed | Connected to DGND through an internal pulldown resistor | Disabled                 |

## Segment Shuffling

The segment-shuffling function on the DAC can improve the high-frequency spurious-free dynamic range (SFDR) at the cost of an increase in the DAC's noise floor. The EV kits provide jumper JU5, which allows the user to enable or disable this function. See Table 3 to configure jumper JU5.

## Board Layout

The  EV  kit  boards  are  a  four-layer  board  design  optimized  for  high-speed  signals.  All  high-speed  signal lines are routed through 50Ω  impedance-matched transmission  lines.  The  length  of  these  50Ω  transmis -sion lines is matched to within 40 mils (1mm) to minimize layout-dependent data skew. The board layout separates the analog, digital, and digital clock sections of the circuit for optimum performance.

Figure 1. MAX5886 EV Kit Schematic

<!-- image -->

Figure 2. MAX5887 EV Kit Schematic

<!-- image -->

## Evaluate: MAX5886/MAX5887/MAX5888 MAX5886/MAX5887/MAX5888 Evaluation Kits

Figure 3. MAX5888 EV Kit Schematic

<!-- image -->

## MAX5886/MAX5887/MAX5888 Evaluation Kits

Figure 4. MAX5886/MAX5887/MAX5888 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 6. MAX5886/MAX5887/MAX5888 EV Kit PC Board Layout-Ground Planes

<!-- image -->

## Evaluate: MAX5886/MAX5887/MAX5888

Figure 5. MAX5886/MAX5887/MAX5888 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 7. MAX5886/MAX5887/MAX5888 EV Kit PC Board Layout-Power Planes

<!-- image -->

## MAX5886/MAX5887/MAX5888 Evaluation Kits

Figure 8. MAX5886/MAX5887/MAX5888 EV Kit PC Board Layout-Solder Side

<!-- image -->

## Evaluate: MAX5886/MAX5887/MAX5888

Figure 9. MAX5886/MAX5887/MAX5888 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## MAX5886/MAX5887/MAX5888 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                        | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 6/06            | Intial Release                                                                                                                                                     | -               |
|                 1 | 1/21            | Updated MAX5886, MAX5887, and MAX5888 to ROHS compliance with exemption in Ordering Information Table, Updated Common Component List and Component Supplier Tables | 1-2             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluate: MAX5886/MAX5887/MAX5888