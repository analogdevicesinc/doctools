<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX98355 Evaluation Kit

## Evaluates: MAX98355A/MAX98355B

## General Description

The  MAX98355  evaluation  kit  (EV  kit)  is  a  fully  assembled and tested PCB that evaluates the MAX98355 PCM digital input Class D power amplifier. The EV kit operates from a single 2.5V to 5.5V DC power supply and is capable of delivering 3.2W into a 4 I load. The device outputs can be connected directly to a speaker load for filterless applications. However, a filter can be added to ease evaluation. The MAX98355A accepts standard I 2 S data and the MAX98355B accepts left-justified digital audio data. Both ICs support time-division multiplexed (TDM) data.

Ordering Information appears at end of data sheet.

## Features

- S 2.5V to 5.5V Single-Supply Operation
- S Only a Single External Component (VDD Capacitor) Required in Many Applications
- S I 2 S, Left-Justified, or TDM Input
- S Five Selectable Gains (3db, 6dB, 9dB, 12dB, and 15dB)
- S No MCLK Required
- S Sample Rates of 8kHz to 96kHz
- S Audio Channel Select (Left, Right, or (Left + Right)/2)
- S Filterless Class D Outputs
- S Optional Class D Output Filters for Ease of Evaluation
- S Low-Power Shutdown Mode
- S Low RF Susceptibility Rejects TDMA Noise from GSM Radios
- S Extensive Click-and-Pop Reduction Circuitry
- S Robust Short-Circuit and Thermal Protection
- S Proven PCB Layout
- S Fully Assembled and Tested

Figure 1. Simplified Block Diagram

<!-- image -->

| DESIGNATION                                              |   QTY | DESCRIPTION                                                               |
|----------------------------------------------------------|-------|---------------------------------------------------------------------------|
| BCLK, LRCLK, SDIN, USB5V, XMCLK                          |     0 | Not installed, test points                                                |
| C1                                                       |     1 | 10 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106K     |
| C2, C201, C202, C203, C218, C219, C220, C222, C225-C228, |    16 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K    |
| C3-C9, C73, C74, C75                                     |     0 | Not installed, ceramic capacitors (0402)                                  |
| C200, C204, C205                                         |     3 | 1 F F Q 10%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105K        |
| C206, C235, C236                                         |     3 | 0.01 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H103K   |
| C207, C208, C213                                         |     3 | 1 F F Q 20%, 6.3V X5R ceramic capacitors (0603) Taiyo Yuden JMK107B7105MA |
| C209, C210                                               |     2 | 2.2 F F Q 10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J225K   |
| C212                                                     |     1 | 1000pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K      |
| C214-C217                                                |     4 | 33pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H330J        |
| C221                                                     |     1 | 330pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H331J        |
| C223, C224                                               |     2 | 4.7 F F Q 10%, 10V X5R ceramic capacitors (0805) Murata GRM219R61A475K    |
| C229, C230                                               |     2 | 4.7 F F Q 10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J475K   |
| D200                                                     |     1 | Red LED (0603)                                                            |
| FB1, FB2                                                 |     2 | 0 I Q 5% resistors (0603)                                                 |
| FB200, FB201                                             |     2 | Ferrite beads (0603) Murata BLM18KG331SN1                                 |

## MAX98355 Evaluation Kit

## Evaluates: MAX98355A/MAX98355B

## Component List

| DESIGNATION                        |   QTY | DESCRIPTION                                                                                              |
|------------------------------------|-------|----------------------------------------------------------------------------------------------------------|
| FOUTN, FOUTP, GND, VDD             |     4 | Binding posts                                                                                            |
| FOUTN, FOUTP, GND (x3), VDD, +3.3V |     7 | 20G plated solid copper bus wire, 0.25in U-shaped wire loop                                              |
| GND (x3), OUTN                     |     4 | Black multipurpose test points (63mil drill size)                                                        |
| J1                                 |     1 | USB mini-AB receptacle                                                                                   |
| J200                               |     1 | 20-pin (2 x 10) IDC right- angle, polarized boxed header, 0.1in centers                                  |
| JU1                                |     1 | 5-pin header                                                                                             |
| JU2                                |     1 | 4-pin header                                                                                             |
| JU3                                |     1 | 9-pin (3 x 3) header                                                                                     |
| JU4                                |     1 | 2-pin header                                                                                             |
| JU5                                |     1 | 3-pin header                                                                                             |
| L1, L2                             |     0 | Not installed, 22 F H inductors (6.2mm x 6.3mm)-short (PC trace) TOKO D63CB series part TOKO A916CY-220M |
| L201                               |     1 | 3.3 F H, 1.1A power inductor Sumida CDRH3D16NP-3R3NC                                                     |
| LEDA, LEDB                         |     2 | Green LEDs (0603)                                                                                        |
| OUTP                               |     1 | Red multipurpose test point (63mil drill size)                                                           |
| Q200, Q201, Q202                   |     3 | n-channel enhancement- mode FETs (SOT23) Fairchild BSS138                                                |
| R1, R2                             |     2 | 100k I Q 5% resistors (0603)                                                                             |
| R3                                 |     1 | 226k I Q 1% resistor (0603)                                                                              |
| R4                                 |     1 | 634k I Q 1% resistor (0603)                                                                              |
| R5, R6                             |     0 | Not installed, resistors (0402)                                                                          |
| R7, R8, R9                         |     3 | 0 I Q 5% resistors (0402)                                                                                |
| R10                                |     1 | 2k I Q 1% resistor (0603)                                                                                |
| R200                               |     1 | 27k I Q 5% resistor (0603)                                                                               |
| R201                               |     1 | 100k I Q 5% resistor (0603)                                                                              |
| R203, R204, R207, R210, R217, R220 |     6 | 10k I Q 5% resistors (0603)                                                                              |
| R205, R213                         |     2 | 47k I Q 5% resistors (0603)                                                                              |
| R206                               |     1 | 4.7 I Q 5% resistor (0603)                                                                               |
| R208                               |     1 | 20k I Q 5% resistor (0603)                                                                               |
| R209                               |     0 | Not installed, resistor (0603)                                                                           |
| R211                               |     1 | 8.06k I Q 1% resistor (0603)                                                                             |

| DESIGNATION            |   QTY | DESCRIPTION                                                     |
|------------------------|-------|-----------------------------------------------------------------|
| R212, R219, R233, R234 |     4 | 1k I Q 5% resistors (0603)                                      |
| R218, R221             |     2 | 2.2M I Q 5% resistors (0603)                                    |
| R222                   |     1 | 470 I Q 5% resistor (0603)                                      |
| R223, R224             |     2 | 33 I Q 5% resistors (0603)                                      |
| U1                     |     1 | I 2 S input Class D audio amplifier (9 WLP) Maxim MAX98355AEWL+ |
| U200                   |     1 | XMOS processor (128 TQFP)                                       |
| U201                   |     1 | SPI 1Mb flash memory (8 SO)                                     |
| U202                   |     1 | USB 2.0 transceiver, ULPI (24 QFN)                              |
| U203                   |     1 | 3.3V low-noise linear regulator (5 SOT23) Maxim MAX8887EZK33+T  |
| U204                   |     1 | 1.8V low-noise linear regulator (5 SC70) Maxim MAX8511EXK18+    |
| U205                   |     1 | Voltage detector (5 SOT23)                                      |
| U206                   |     1 | TinyLogic UHS dual buffer (6 SC70) Fairchild NC7WZ07P6X         |

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C3-C7         |     5 | 0.22 F F Q 10%, 6.3V XR5 ceramic capacitors (0402) TDK C1005X5R0J224K |

## MAX98355 Evaluation Kit

## Evaluates: MAX98355A/MAX98355B

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| U208          |     1 | Dual, unbuffered inverter (6 SC70) Fairchild NC7WZU04P6X |
| U209          |     1 | 2-input multiplexer (6 SC70) Fairchild NC7SZ157P6X       |
| U210          |     1 | Dual logic buffer (6 SC70) Fairchild NC7WZ17P6X          |
| U211          |     1 | Microprocessor-reset circuit (3 SC70) Maxim MAX803TEXR+  |
| U212          |     1 | 1A step-down regulator (10 F MAX M ) Maxim MAX1974EUB+   |
| Y1            |     1 | 13MHz clock oscillator (2.5mm x 2.0mm)                   |
| Y200          |     1 | 24.576MHz crystal (6.0mm x 3.3mm)                        |
| Y201          |     1 | 11.2896MHz crystal (6.0mm x 3.3mm)                       |
| -             |     4 | Shunts                                                   |
| -             |     1 | PCB: MAX98355 EVALUATION KIT                             |

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
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX98355 when contacting these component suppliers.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all necessary connections are completed.

- 1)  Verify that shunts are installed as follows:

JU1: Pins 1-5 (12dB gain)

JU2: Pins 1-3 (left audio channel selected)

JU3: Pins 2-3 (I 2 S input from XMOS, MAX98355A only)

JU4: Installed (VDDIO supplied from on-board power supply

JU5: Pins 2-3 (device in shutdown mode)

- 2)  Set the power-supply output to 5V. Disable the power supply.
- 3)  Connect  the  power-supply  ground  terminal  to  the GND PCB pad and the power-supply positive terminal to the VDD PCB pad on the EV kit.
- 4)  Connect the speaker across the OUTP and OUTN test points.
- 5)  Enable the power-supply output.
- 6)  With  the  audio  source  disabled,  connect  the  USB audio source to J1 on the EV kit. Change the shunt on JU5 to pins 1-2 (device enabled for normal operation).
- 7)  Enable the audio source.
- 8)  Verify that the speakers are playing the audio source signal.

## Table 1. JU1 Jumper Selection (GAIN)

| SHUNT POSITION   | GAIN PIN                                    |   GAIN (dB) RELATIVE TO A 2.1dBV REFERENCE LEVEL |
|------------------|---------------------------------------------|--------------------------------------------------|
| 1-2              | Connected to VDD through 100k I resistor R1 |                                                3 |
| 1-3              | Connected to VDD                            |                                                6 |
| 1-4              | Connected to GND through 100k I resistor R2 |                                               15 |
| 1-5*             | Connected to GND                            |                                               12 |
| Not installed    | Unconnected                                 |                                                9 |

Windows is a registered trademark and registered service mark of Microsoft Corp.

## MAX98355 Evaluation Kit

## Evaluates: MAX98355A/MAX98355B

## Quick Start

## Recommended Equipment

- MAX98355	EV	kit
- 2.5V	to	5.5V,	2A	DC	power	supply
- USB	audio	source	(from	computer	through	an	audio media  player  such  as  iTunes M or  Windows M Media Player)
- USB	cable	(included	in	the	EV	kit	box)
- 4 I to 8 I speaker

## Detailed Description of Hardware

## Filterless Output

The MAX98355 EV kit's filterless outputs (OUTP, OUTN) can be connected directly to a speaker load without any filtering. Use the OUTP and OUTN test points to connect the speaker directly to the device output.

## Filtered Output

Audio  analyzers  typically  cannot  accept  the  Class  D amplifier's pulse-width modulated (PWM) signals at their inputs.  Therefore,  the  EV  kit  features  optional  lowpass filters at the outputs to ease evaluation. As shipped, the EV kit's lowpass filter RC components are unpopulated and L1, L2 are shorted on the PCB.

To use the filtered output posts (FOUTP, FOUTN), remove the shorts on L1 and L2 and install components L1, L2, C3-C7, and R5, R6 (provided separately with the EV kit). Use the output posts to connect the filtered  outputs  to the audio analyzer. The default lowpass filters at the EV kit output are optimized for a 4 I speaker.

## Jumper Selection Selectable Gain (GAIN)

The EV kit features a 5-pin jumper (JU1) to control the device's  five  programmable  gain  settings.  See  Table  1 for gain-control configuration.

## SD\_MODE Input

The  EV  kit  features  a  4-pin  jumper  (JU2)  to  control  the audio  channel  that  is  sent  to  the  amplifier  output  and  a 3-pin jumper (JU5) to enable/disable the IC. JU2 is used to select the stereo input (left channel, right channel, or the average of the left/right channels). JU5 must be set to pins 1-2 for normal operation. See Table 2 for shunt positions.

## Shutdown Mode

The device features a low-power shutdown mode that is activated by setting jumper JU5 to pins 2-3. To exit shutdown mode, set JU5 to pins 1-2 and select the desired stereo input channel using jumper JU2. See Table 3 for shunt positions.

## MAX98355 Evaluation Kit

## Evaluates: MAX98355A/MAX98355B

## External/Internal VDDIO (+3.3V)

On the EV kit, a logic voltage from a control interface is needed for proper selection of the stereo input channel through SD\_MODE .  This  voltage  can  be  applied  externally at the +3.3V PCB pad or it can be provided from on-board circuitry. See Table 4 for shunt positions.

If  the  USB  cable  is  disconnected  (such  as  when  the XMOS chip is not in use), the on-board circuitry to generate the +3.3V is not available. In this case, remove the shunt from jumper JU4 and supply an external voltage at the +3.3V PCB pad. Logic voltages other than +3.3V can be used on the EV kit. If other logic voltages are used, resistors R3 and R4 must be adjusted. See the SD\_MODE and  Shutdown  Operation section  in  the  MAX98355A/ MAX98355B IC data sheet for more information.

## Driving I 2 S Directly

The EV kit provides an on-board XMOS chip to generate the I 2 S signal from the USB audio source. To utilize the XMOS chip, all positions of jumper JU3 must be set betweens pins 2-3. To bypass the XMOS and drive the digital  audio  interface  directly,  remove  the  shunts  from JU3 and apply signals at the BCLK, LRCLK, and SDIN test  points  or  between  JU3  pins  1-2  at  the  appropriate  locations  (pin  1  is  signal  ground).  The  XMOS  chip is  configured  for  I 2 S  output  so  it  cannot  be  used  with the  MAX98355B  (left-justified  data).  To  evaluate  the MAX98355B  with  left-justified  data  or  the  MAX98355A/ MAX98355B with TDM data, use the external data input option  by  removing  the  shunts  from  JU3  pins  2-3  and drive the digital audio interface directly.

## Table 2. JU2 and JU5 Jumper Selection ( SD\_MODE )

| SHUNT POSITION   | SHUNT POSITION   |                                                 | DEVICE OPERATION             |
|------------------|------------------|-------------------------------------------------|------------------------------|
| JU2              | JU5              | SD_MODE PIN                                     |                              |
| 1-2              | 1-2*             | Connected to VDDIO through R3 (226k I resistor) | Right audio channel selected |
| 1-3*             | 1-2*             | Connected to VDDIO                              | Left audio channel selected  |
| 1-4              | 1-2*             | Connected to VDDIO through R4 (634k I resistor) | Mono mix (left + right)/2    |
| X                | 2-3              | Connected to GND                                | Shutdown                     |

*Default position.

X = Don't care.

Table 3. JU3 Jumper Selection (Digital Audio Interface)

| SHUNT POSITION   | BCLK, LRCLK, DIN   | DEVICE OPERATION                                                                                                                                                                            |
|------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2-3*             | Connected to XMOS  | XMOS IC provides I 2 S input data to the MAX98355A.                                                                                                                                         |
| Not installed    | Unconnected        | Use this configuration when connecting an external digital audio source to the MAX98355A or when evaluating the MAX98355B. Connect external BCLK/LRCLK/DIN to column 2 and GND to column 1. |

*Default position.

## Table 4. JU4 Jumper Selection (VDDIO)

| SHUNT POSITION   | LOGIC VOLTAGE (VDDIO)                                             |
|------------------|-------------------------------------------------------------------|
| Installed*       | 3.3V supplied from on-board power supply.                         |
| Not installed    | User-supplied external power supply applied at the +3.3V PCB pad. |

*Default position.

## MAX98355 Evaluation Kit

## Evaluates: MAX98355A/MAX98355B

Figure 2a. MAX98355 EV Kit Schematic (Sheet 1 of 6)

<!-- image -->

## MAX98355 Evaluation Kit

## Evaluates: MAX98355A/MAX98355B

Figure 2b. MAX98355 EV Kit Schematic (Sheet 2 of 6)

<!-- image -->

## MAX98355 Evaluation Kit

## Evaluates: MAX98355A/MAX98355B

Figure 2c. MAX98355 EV Kit Schematic (Sheet 3 of 6)

<!-- image -->

## MAX98355 Evaluation Kit

## Evaluates: MAX98355A/MAX98355B

Figure 2d. MAX98355 EV Kit Schematic (Sheet 4 of 6)

<!-- image -->

## MAX98355 Evaluation Kit

## Evaluates: MAX98355A/MAX98355B

Figure 2e. MAX98355 EV Kit Schematic (Sheet 5 of 6)

<!-- image -->

## MAX98355 Evaluation Kit

## Evaluates: MAX98355A/MAX98355B

Figure 2f. MAX98355 EV Kit Schematic (Sheet 6 of 6)

<!-- image -->

## Evalutes: MAX9835

/

M

A

X

9

8

3

5

B

Figure 3. MAX98355 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX98355 EV Kit PCB Layout-Component Side

<!-- image -->

## MAX9835 Evalution Kit

## Evalutes: MAX9835

/

M

A

X

9

8

3

5

B

Figure 5. MAX98355 EV Kit PCB Layout-Layer 2

<!-- image -->

Figure 6. MAX98355 EV Kit PCB Layout-Layer 3

<!-- image -->

## MAX9835 Evalution Kit

## Evalutes: MAX9835

/

M

A

X

9

8

3

5

B

Figure 7. MAX98355 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 8. MAX98355 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## MAX9835 Evalution Kit

## MAX98355 Evaluation Kit

## Evaluates: MAX98355A/MAX98355B

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX98355EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX98355 Evaluation Kit

## Evaluates: MAX98355A/MAX98355B

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.