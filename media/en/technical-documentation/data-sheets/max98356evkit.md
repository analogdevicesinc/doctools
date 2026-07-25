<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The  MAX98356  evaluation  kit  (EV  kit)  is  a  fully  assembled and tested PCB that evaluates the MAX98356 PDM digital input Class D power amplifier. The EV kit operates from  a  single  2.5V  to  5.5V  DC  power  supply  and  is capable of delivering 3.2W into a 4 I load.  The  device outputs can be connected directly to a speaker load for filterless applications. However, a filter can be added to ease evaluation.

## MAX98356 Evaluation Kit Evaluates: MAX98356

## Features

- S 2.5V to 5.5V Single-Supply Operation
- S Only a Single External Component (VDD Capacitor) Required in Many Applications
- S PDM Digital Input
- S Five Selectable Gains (3dB, 6dB, 9dB, 12dB, and 15dB)
- S Supported PDM\_CLK Rates of 1.84MHz to 4.32MHz and 5.28MHz to 8.64MHz
- S Audio Channel Select (Left, Right, (Left + Right)/2))
- S Filterless Class D Outputs
- S Optional Class D Output Filters for Ease of Evaluation
- S Low-Power Shutdown Mode
- S Low RF Susceptibility Rejects TDMA Noise from GSM Radios
- S Extensive Click-and-Pop Reduction Circuitry
- S Robust Short-Circuit and Thermal Protection
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Figure 1. Simplified Block Diagram

<!-- image -->

| DESIGNATION                                                     |   QTY | DESCRIPTION                                                                               |
|-----------------------------------------------------------------|-------|-------------------------------------------------------------------------------------------|
| BCLK, LRCLK, MCLK, SDIN, SDOUT, USB5V, XMCLK                    |     0 | Not installed, test points                                                                |
| C1                                                              |     1 | 10 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106K                     |
| C2, C201-C203, C218-C220, C222, C225-C228, C231-C234, C340-C349 |    26 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K                    |
| C3-C9, C12, C13, C302-C306                                      |     0 | Not installed, ceramic capacitors (0402)                                                  |
| C200, C204, C205                                                |     3 | 1 F F Q 10%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105K                        |
| C206, C235, C236                                                |     3 | 0.01 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H103K                   |
| C207, C208, C213, C330                                          |     4 | 1 F F Q 20%, 6.3V X5R ceramic capacitors (0603) Taiyo Yuden JMK107B7105MA                 |
| C209, C210, C312, C313, C328                                    |     5 | 2.2 F F Q 10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J225K                   |
| C212                                                            |     1 | 1000pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K                      |
| C214-C217                                                       |     4 | 33pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H330J                        |
| C221                                                            |     1 | 330pF Q 5% 50V C0G ceramic capacitor (0603) Murata GRM1885C1H331J                         |
| C223, C224                                                      |     2 | 4.7 F F Q 10%, 10V X5R ceramic capacitors (0805) Murata GRM219R61A475K                    |
| C229, C230                                                      |     2 | 4.7 F F Q 10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J475K                   |
| C301                                                            |     1 | 100 F F Q 20%, 6.3V X5R ceramic capacitor (1210) Murata GRM32ER60J107M TDK C3225X5R0J107M |

## MAX98356 Evaluation Kit Evaluates: MAX98356

## Component List

| DESIGNATION                                           |   QTY | DESCRIPTION                                                                            |
|-------------------------------------------------------|-------|----------------------------------------------------------------------------------------|
| C320                                                  |     1 | 0.001 F F Q 10%, 50V X7R ceramic capacitor (0402) Murata GRP155R71H102K                |
| C321, C327                                            |     2 | 22 F F Q 10%, 6.3V X5R ceramic capacitors (1206) Murata GRM31CR60J226K                 |
| C324                                                  |     1 | 10 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106K                  |
| C325                                                  |     1 | 0.47 F F Q 10%, 6.3V X5R ceramic capacitor (0402) Murata GRM155R60J474K                |
| C331                                                  |     1 | 470pF Q 10%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H471J TDK C1005C0G1H471J |
| C332                                                  |     1 | 150 F F, 4V SP capacitor (7.3mm x 4.3mm x 1.9mm) Panasonic EEFSX0G151ER                |
| CE                                                    |     1 | Red test point                                                                         |
| D200                                                  |     1 | Red LED (0603)                                                                         |
| FB1, FB2                                              |     2 | 0 I Q 5% resistors (0603)                                                              |
| FB200, FB201                                          |     2 | Ferrite beads (0603) Murata BLM18KG331SN1                                              |
| FOUTN, FOUTP, GND (x4), +3.3V, VDD, +5V               |     9 | 20G plated, solid copper 0.25in U-shaped wire loops                                    |
| FOUTN, FOUTP, GND, +5V                                |     4 | Binding posts                                                                          |
| FPGA1.2V, FPGA1.8V, FPGA3.3V, OUTP, PDM_CLK, PDM_DATA |     6 | Red multipurpose test points (63 mil drill size)                                       |
| J1                                                    |     1 | USB mini-AB receptacle                                                                 |
| J200                                                  |     1 | 20-pin (2 x 10) IDC right-angle, polarized boxed header, 0.1in centers                 |
| J300                                                  |     1 | 14-pin JTAG connector                                                                  |
| J301                                                  |     1 | 16-pin (2 x 8) straight header, 0.1in centers                                          |
| JU1                                                   |     1 | 5-pin header                                                                           |
| JU2                                                   |     1 | 4-pin header                                                                           |
| JU3                                                   |     1 | 6-pin (3 x 2) header                                                                   |
| JU4, JU8                                              |     2 | 2-pin headers                                                                          |

| DESIGNATION                              |   QTY | DESCRIPTION                                                                                              |
|------------------------------------------|-------|----------------------------------------------------------------------------------------------------------|
| JU5                                      |     1 | 3-pin header                                                                                             |
| JU6                                      |     1 | 15-pin (3 x 15) header                                                                                   |
| LEDA, LEDB                               |     2 | Green LEDs (0603)                                                                                        |
| L1, L2                                   |     0 | Not installed, 22 F H inductors (6.2mm x 6.3mm)-short (PC trace) TOKO D63CB series part TOKO A916CY-220M |
| L201                                     |     1 | 3.3 F H, 1.1A power inductor Sumida CDRH3D16NP-3R3NC                                                     |
| L300                                     |     1 | 3.3 F H , 57m I , 1.3A inductor (5mm x 5mm x 2 mm) Sumida CDRH4D18ENP-3R3N                               |
| L301                                     |     1 | 2.2 F H , 36m I , 3A inductor (6mm x 6mm x 1.8 mm) Sumida CDRH5D16NP-2R2N                                |
| OUTN                                     |     1 | Black multipurpose test point, 63 mil drill size                                                         |
| P1                                       |     1 | R/A power jack, (2.1mm ID, 5.5mm OD)                                                                     |
| Q200, Q201, Q202                         |     3 | n-channel enhancement-mode FETs (SOT23) Fairchild BSS138                                                 |
| R1, R2, R201, R334-R341                  |    11 | 100k I Q 5% resistors (0603)                                                                             |
| R3                                       |     1 | 174k I Q 1% resistor (0603)                                                                              |
| R4                                       |     1 | 634k I Q 1% resistor (0603)                                                                              |
| R5, R6                                   |     0 | Not installed, resistors (0402)                                                                          |
| R10                                      |     1 | 2k I Q 1% resistor (0603)                                                                                |
| R36, R37, R300-R304, R324-R332, R333     |    17 | 0 I Q 5% resistors (0402)                                                                                |
| R200                                     |     1 | 27k I Q 5% resistor (0603)                                                                               |
| R203, R204, R207, R210, R217, R220, R322 |     7 | 10k I Q 5% resistors (0603)                                                                              |
| R205, R213                               |     2 | 47k I Q 5% resistors (0603)                                                                              |
| R206, R310-R312, R323                    |     5 | 4.7 I Q 5% resistors (0603)                                                                              |
| R208                                     |     1 | 20k I Q 5% resistor (0603)                                                                               |
| R209                                     |     0 | Not installed resistor (0603)                                                                            |
| R211                                     |     1 | 8.06k I Q 1% resistor (0603)                                                                             |
| R212, R219, R233, R234                   |     4 | 1k I Q 5% resistors (0603)                                                                               |

## MAX98356 Evaluation Kit

## Evaluates: MAX98356

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                    |
|---------------|-------|----------------------------------------------------------------|
| R218, R221    |     2 | 2.2M I Q 5% resistors (0603)                                   |
| R222          |     1 | 470 I Q 5% resistor (0603)                                     |
| R223, R224    |     2 | 33 I Q 5% resistors (0603)                                     |
| R308          |     1 | 330 I Q 5% resistor (0603)                                     |
| R313          |     1 | 100 I Q 5% resistor (0402)                                     |
| R314          |     1 | 10 I Q 5% resistor (0402)                                      |
| R316, R318    |     0 | Not installed, resistors- short (PC trace) (1206)              |
| R317          |     1 | 0 I Q 5% resistor (0603)                                       |
| R342          |     1 | 39.2k I Q 1% resistor (0603)                                   |
| SW300         |     1 | 8-position DIP switch (SMD)                                    |
| U1            |     1 | I 2 S input Class D audio amplifier (9 WLP) Maxim MAX98356EWL+ |
| U200          |     1 | XMOS Processor (128 TQFP)                                      |
| U201          |     1 | SPI 1Mb flash memory (8 SO)                                    |
| U202          |     1 | USB 2.0 ULPI transceiver (24 QFN)                              |
| U203          |     1 | 3.3V low-noise linear regulator (5 SOT23) Maxim MAX8887EZK33+T |
| U204, U305    |     2 | 1.8V low-noise linear regulators (5 SC70) Maxim MAX8511EXK18+  |
| U205          |     1 | Voltage detector (5 SOT23)                                     |
| U206          |     1 | TinyLogic UHS dual buffer (6 SC70) Fairchild NC7WZ07P6X        |
| U208          |     1 | Dual unbuffered inverter (6 SC70) Fairchild NC7WZU04P6X        |
| U209          |     1 | 2-input multiplexer (6 SC70) Fairchild NC7SZ157P6X             |
| U210          |     1 | Dual logic buffer (6 SC70) Fairchild NC7WZ17P6X                |
| U211          |     1 | Microprocessor-reset circuit (3 SC70) Maxim MAX803TEXR+        |
| U212          |     1 | 1A step-down regulator ( F MAX M ) Maxim MAX1974EUB+           |

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| U300          |     1 | 324-pin Spartan 6 FPGA (15mm x 15mm, 0.8mm pitch)             |
| U301          |     1 | 1.8V, 16MB flash (48 TSOP)                                    |
| U304          |     1 | 1.2V, 1A step-down regulator (10 TDFN-EP*) Maxim MAX1556AETB+ |
| U306          |     1 | 3.3V, 3A step-down regulator (16 QSOP) Maxim MAX1831EEE       |
| U307-U309     |     3 | 4V reset circuits (3 SOT23) Maxim MAX809JEUR+T                |

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C3-C7         |     5 | 0.22 F F Q 10%, 6.3V XR5 ceramic capacitors (0402) TDK C1005X5R0J224K |

## MAX98356 Evaluation Kit Evaluates: MAX98356

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                            |
|---------------|-------|----------------------------------------|
| Y1            |     1 | 13MHz clock oscillator (2.5mm x 2.0mm) |
| Y200          |     1 | 24.576MHz crystal (6.0mm x 3.3mm)      |
| Y201          |     1 | 11.2896MHz crystal (6.0mm x 3.3mm)     |
| -             |     5 | Shunts                                 |
| -             |     1 | PCB: MAX98356 EVALUATION KIT           |

## Optional Components

| DESIGNATION   |   QTY | DESCRIPTION                                           |
|---------------|-------|-------------------------------------------------------|
| L1, L2        |     2 | 22 F H, 1A inductors (6.2mm x 6.3mm) TOKO A916CY-220M |
| R5, R6        |     2 | 22 I Q 5% resistors (0402)                            |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX98356 when contacting these component suppliers.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Quick Start

## Recommended Equipment

- MAX98356 EV kit
- 5V, 5A DC power supply
- USB audio source (from  computer  through  an  audio media player such as itunes or Windows Media player)
- USB cable (included in the EV kit box)
- 4 I to 8 I speaker

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all necessary connections are completed.

- 1)  Verify that shunts are installed as follows:

JU1: Pins 1-5 (12dB gain)

JU2: Pins 1-3 (left audio channel selected)

JU3: Pins 2-3 (PDM from the FPGA to the IC)

JU4: Installed (VDDIO supplied from on-board power supply)

JU5: Pins 2-3 (device in shutdown mode)

JU6: Pins 2-3 (I 2 S from XMOS IC to Xilinx M FPGA)

JU8: Installed (VDD supplied by voltage at the +5V PCB pad)

- 2)  Set the power-supply output to 5V. Disable the power supply.
- 3)  Connect  the  power-supply  ground  terminal  to  the GND  binding  post  and  the  power-supply  positive terminal to the +5V binding post on the EV kit.
- 4)  Connect the speaker across the OUTP and OUTN test points.
- 5)  Enable the power-supply output.
- 6)  Change the shunt on JU5 to pins 1-2 (device enabled for normal operation).
- 7)  With  the  audio  source  disabled,  connect  the  USB audio source to J1 on the EV kit.
- 8)  Enable the audio source.
- 9)  Verify  that  the  speakers  are  playing  the  audio  source signal.

Xilnx is a registered trademark and registered service mark of Xilinx, Inc.

## MAX98356 Evaluation Kit Evaluates: MAX98356

## Detailed Description of Hardware

## Filterless Output

The MAX98356 EV kit's filterless outputs (OUTP, OUTN) can be connected directly to a speaker load without any filtering. Use the OUTP and OUTN test points to connect the speaker directly to the device output.

## Filtered Output

Audio  analyzers  typically  cannot  accept  the  Class  D amplifier's pulse-width modulated (PWM) signals at their inputs.  Therefore,  the  EV  kit  features  optional  lowpass filters at the outputs to ease evaluation. As shipped, the EV kit's lowpass filter RC components are unpopulated and L1/L2 are shorted on the PCB.

To  use  the  filtered  output  posts  (FOUTP,  FOUTN), remove  the  shorts  on  L1-L2  and  install  components L1/L2, C3-C7, and R5/R6 (provided separately with the EV kit). Use the output posts to connect the filtered outputs to the audio analyzer. The default lowpass filters at the EV kit output are optimized for an 4 I speaker.

## Jumper Selection Selectable Gain (GAIN)

The  EV  kit  features  a  5-pin  jumper  JU1  to  control  the device's  five  programmable  gain  settings.  See  Table  1 for gain-control configuration.

## Table 1. JU1 Jumper Selection (GAIN)

| SHUNT POSITION   | GAIN PIN                                    |   GAIN (dB) RELATIVE TO A 2.1dBV REFERENCE LEVEL |
|------------------|---------------------------------------------|--------------------------------------------------|
| 1-2              | Connected to VDD through 100k I resistor R1 |                                                3 |
| 1-3              | Connected to VDD                            |                                                6 |
| 1-4              | Connected to GND through 100k I resistor R2 |                                               15 |
| 1-5*             | Connected to GND                            |                                               12 |
| Not installed    | Unconnected                                 |                                                9 |

## SD\_MODE Input

The  EV  kit  features  a  4-pin  jumper  (JU2)  to  control  the audio  channel  that  is  sent  to  the  amplifier  output  and  a 3-pin jumper (JU5) to enable/disable the IC. JU2 is used to select the stereo input (left channel, right channel, or the average of the left/right channels). JU5 must be set to pins 1-2 for normal operation. See Table 2 for shunt positions. Note: The (Left + right)/2 mode is only supported for the lower PDM\_CLK range (1.84MHz to 4.32MHz).

## Shutdown Mode

The device features a low-power shutdown mode that is activated by setting jumper JU5 to pins 2-3. To exit shutdown mode, set JU5 to pins 1-2 and select the desired stereo input channel using jumper JU2. See Table 2 for shunt positions.

## Table 2. JU2 Jumper Selection ( SD\_MODE )

| SHUNT POSITION   | SHUNT POSITION   | SD_MODE PIN                                     | DEVICE OPERATION             |
|------------------|------------------|-------------------------------------------------|------------------------------|
| JU2              | JU5              | SD_MODE PIN                                     | DEVICE OPERATION             |
| 1-2              | 1-2*             | Connected to VDDIO through R3 (226k I resistor) | Right audio channel selected |
| 1-3*             | 1-2*             | Connected to VDDIO                              | Left audio channel selected  |
| 1-4              | 1-2*             | Connected to VDDIO through R4 (634k I resistor) | Mono mix (left + right)/2    |
| X                | 2-3              | Connected to GND                                | Shutdown                     |

* Default position.

X = Don't care.

## Table 3. JU5 Jumper Selection

| SHUNT POSITION   | VDDIO VOLTAGE                  | DEVICE OPERATION                                    |
|------------------|--------------------------------|-----------------------------------------------------|
| 1-2*             | Supplied through the +3.3V pad | Normal (input channel selected through JU2 setting) |
| 2-3              | Connected to GND               | Shutdown                                            |

## Table 4. JU4 Jumper Selection

| SHUNT POSITION   | LOGIC VOLTAGE (VDDIO)                                        |
|------------------|--------------------------------------------------------------|
| Installed*       | 3.3V supplied from the on-board power supply                 |
| Not installed    | User-supplied external power supply applied at the +3.3V pad |

## MAX98356 Evaluation Kit Evaluates: MAX98356

## External/Internal VDDIO (+3.3V)

On the EV kit, a logic voltage from a control interface is needed for proper selection of the stereo input channel through SD\_MODE .  This  voltage  can  be  applied  externally at the +3.3V PCB pad, or it can be provided from on-board circuitry. See Table 4 for shunt positions.

Logic voltages other than +3.3V can be used on the EV kit. See the SD\_MODE and Shutdown Operation section in the MAX98356 IC data sheet for more information.

## External/Internal Input Supply (VDD)

The device can accept an input supply from 2.5V to 5.5V. This  voltage  can  be  applied  externally  at  the  VDD  and GND PCB pads or provided from the main +5V on-board input required for the FPGA power supplies. See Table 5 for shunt positions.

## FPGA

## FPGA RESET Input (SW301)

The Xilinx FPGA can be reset by toggling switch SW301. The FPGA is in a reset state when the button is pushed and  returns  to  normal  operation  when  the  button  is released. The FPGA may need to be reset when switching between sample rates or bit depths.

## Table 5. JU8 Jumper Selection

| SHUNT POSITION   | INPUT VOLTAGE (VDD)                                            |
|------------------|----------------------------------------------------------------|
| Installed*       | VDD supplied from the on-board power supply at the +5V net     |
| Not installed    | User-supplied external power supply applied at the VDD PCB pad |

## Table 6. JU3 Jumper Selection (Max98356 Digital Audio Interface)

| SWITCH POSITION   | PDM_CLK/ PDM_DATA                     | DEVICE OPERATION                                                                                                                              |
|-------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| 2-3*              | IC input connected to the FPGA output | Xilinx FPGA provides PDM input data to the IC.                                                                                                |
| Not installed     | Unconnected                           | Use this configuration when connecting an external PDMsource to the IC. Connect the external PDM_CLK/PDM_DATA to column 2 and GNDto column 1. |

## OSR Select Input (SW300-2)

SW300-2 can toggle the oversampling ratio that is used by the Xilinx FPGA to generate the PDM data. Toggle the switch to the on position for OSR = 128x or toggle the switch to the off position for OSR = 64x. Sample rates can be changed dynamically, but to avoid click/pop it is necessary to activate SD\_MODE low (shutdown mode) during the transition. See Table 11 for SW300-2 configuration.

## Signal Monitoring (J301)

J301  is  provided  for  monitoring  the  FPGA  signals  or jumping them to another board for evaluation. See Table 10 for J301 pinout.

## Table 7. JU6 Jumper Selection (Xilinx FPGA Digital Audio Interface)

| SWITCH POSITION   | MCLK/BCLK/ LRCLK/SDIN                   | DEVICE OPERATION                                                                                                                                         |
|-------------------|-----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2-3*              | FPGA input connected to the XMOS output | XMOS IC provides I 2 S input data to the Xilinx FPGA.                                                                                                    |
| Not installed     | Pulled to GND through R334              | Use this configuration when connecting an external I 2 S source to the FPGA. Connect the external MCLK/BCLK/ LRCLK/SDIN to column 2 and GND to column 1. |

* Default position.

## Table 8. SW301 Input Selection

| SWITCH POSITION   | U300-C17 INPUT             | OPERATION        |
|-------------------|----------------------------|------------------|
| On                | Connected to +3.3V         | FPGA reset       |
| Off*              | Pulled to GND through R334 | Normal operation |

## Table 9. SW300-2 Input Selection

| SWITCH POSITION   | U300-C18 INPUT             |   OSR |
|-------------------|----------------------------|-------|
| On                | Connected to +3.3V         |   128 |
| Off*              | Pulled to GND through R335 |    64 |

## MAX98356 Evaluation Kit Evaluates: MAX98356

## Driving I 2 S Directly

The EV kit provides an on-board XMOS chip to generate the I 2 S signal from the USB audio source. To utilize the XMOS chip, all positions of jumper JU6 must be set betweens pins 2-3. To bypass the XMOS and drive I 2 S directly  to  the  FPGA,  remove  the  shunts  from  JU6  and apply signals at the MCLK, BCLK, LRCLK, and SDIN test points or between JU6 pins 1-2 at the appropriate locations (pin 1 is signal ground). See Table 11 for a list of clock modes supported by the FPGA; note that the USB must be disconnected.

## Driving PDM Directly

The device provides an on-board FPGA to convert the I 2 S signal to PDM. To utilize the FPGA, all positions of jumper JU3 must be set betweens pins 2-3. To bypass the FPGA and  drive  PDM  directly,  remove  the  shunts  from  JU3 and apply signals at the PDM\_CLK and PDM\_DATA test points, or between JU3 pins 1-2 at the appropriate locations (pin 1 is signal ground).

## Table 10. J301 Pin Description

| PIN                        | SIGNAL      |
|----------------------------|-------------|
| 1                          | PDM clock   |
| 3                          | PDM data    |
| 5                          | N.C.        |
| 7                          | MCLK        |
| 9                          | BCLK        |
| 11                         | SDIN        |
| 13                         | LRCLK       |
| 15                         | U301 CF pin |
| 2, 4, 6, 8, 10, 12, 14, 16 | GND         |

## Table 11. Clock Modes Supported by the FPGA

|   MCLK (MHz) |   LRCLK (kHz) |   BCLK (MHz) |   OSR |   PDM CLOCK (MHz) |
|--------------|---------------|--------------|-------|-------------------|
|        8.192 |            32 |        2.048 |    64 |             2.048 |
|       12.288 |            48 |        3.072 |    64 |             3.072 |
|        8.192 |            32 |        2.048 |   128 |             4.096 |
|      11.2896 |          44.1 |       2.8224 |   128 |            5.6448 |
|       12.288 |            48 |        3.072 |   128 |             6.144 |
|       16.384 |            64 |        4.096 |   128 |             8.192 |

## MAX98356 Evaluation Kit Evaluates: MAX98356

Figure 2a. MAX98356 EV Kit Schematic (Sheet 1 of 8)

<!-- image -->

## MAX98356 Evaluation Kit Evaluates: MAX98356

Figure 2b. MAX98356 EV Kit Schematic (Sheet 2 of 8)

<!-- image -->

## MAX98356 Evaluation Kit Evaluates: MAX98356

Figure 2c. MAX98356 EV Kit Schematic (Sheet 3 of 8)

<!-- image -->

## MAX98356 Evaluation Kit Evaluates: MAX98356

Figure 2d. MAX98356 EV Kit Schematic (Sheet 4 of 8)

<!-- image -->

## MAX98356 Evaluation Kit Evaluates: MAX98356

Figure 2e. MAX98356 EV Kit Schematic (Sheet 5 of 8)

<!-- image -->

## MAX98356 Evaluation Kit

## Evaluates: MAX98356

Figure 2f. MAX98356 EV Kit Schematic (Sheet 6 of 8)

<!-- image -->

## MAX98356 Evaluation Kit Evaluates: MAX98356

Figure 2g. MAX98356 EV Kit Schematic (Sheet 7 of 8)

<!-- image -->

## MAX98356 Evaluation Kit Evaluates: MAX98356

Figure 2h. MAX98356 EV Kit Schematic (Sheet 8 of 8)

<!-- image -->

## MAX98356 Evaluation Kit

## Evaluates: MAX98356

Figure 3. MAX98356 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX98356 EV Kit PCB Layout-Component Side

<!-- image -->

## MAX98356 Evaluation Kit

## Evaluates: MAX98356

Figure 5. MAX98356 EV Kit PCB Layout-Layer 2

<!-- image -->

Figure 6. MAX98356 EV Kit PCB Layout-Layer 3

<!-- image -->

## MAX98356 Evaluation Kit

## Evaluates: MAX98356

Figure 7. MAX98356 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 8. MAX98356 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX98356EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX98356 Evaluation Kit Evaluates: MAX98356

## MAX98356 Evaluation Kit Evaluates: MAX98356

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/12            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.