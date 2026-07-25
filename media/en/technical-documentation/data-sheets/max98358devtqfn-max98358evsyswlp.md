<!-- lastmod 2022-10-10 -->
## MAX98358 Evaluation System

## General Description

The MAX98358 development board (DEV board) is a fully assembled and tested PCB that evaluates the MAX98358 PDM digital input Class D power amplifier. The MAX98358 evaluation system (EV SYS) operates from a single 2.5V to  5.5V  DC  power  supply  and  is  capable  of  delivering 3.2W  into  a  4Ω  load.  The  device  outputs  can  be  con -nected directly to a speaker load for filterless applications. However, a filter can be added to ease evaluation.

The  EV  SYS  includes  the  DEV  board,  PDM  Generator board (PDM GEN) and the Maxim Audio Interface board (AUDINT board). The AUDINT board provides an easy-touse USB audio to I 2 S converter. The I 2 S data is fed into the PDM generator board that uses an FPGA to convert the I 2 S data stream into a PDM data stream. This allows for  any  computer  to  become a digital  audio  source  that can be used to evaluate the device. The AUDINT board can also be used to power the part.

## Simplified Block Diagram

<!-- image -->

<!-- image -->

## Features

- 2.5V to 5.5V Single-Supply Operation
- Only a Single External Component (VDD Capacitor) Required in Many Applications
- PDM Digital Input
- Five Selectable Gains (3dB, 6dB, 9dB, 12dB, and 15dB)
- Audio Channel Select (Left, Right, Mono Mix)
- Filterless Operation
- Optional Class D Output Filters for Ease of Evaluation
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX98358

## MAX98358 Evaluation System

## Quick Start

## Recommended Equipment

-  MAX98358 EV system
- 2.5V to 5.5V, 2A DC power supply
- USB audio source (from computer through an audio media  player  such  as  iTunes M or  Windows  Media M player)
- 4Ω to 8Ω speaker

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

## Audio interface board:

- 1) Connect USB cables to USB1 and USB2 on the AUDINT board.
- 2) Set DVDD and VIO to 3.3V on their respective jumpers.
- 3) Set the I 2 S slider to the connected position.

## PDM generator board:

- 4) Set the jumper on JU300 to position 2-3 and connect 5V to 5V\_TP loop.
- 5) Apply I 2 S stream to JU6 header.
- If the Audio Interface Board is being used, then use the jumpers on JU6. Set the jumpers to connect the XMOS to FPGA pins (position 2-3) for each I 2 S signal.
- If I 2 S data is provided by another means then apply the signal to the column labeled FPGA and the corresponding ground pin is applied to the column labeled GND (position 2-1).
- 6) Upon power-up, the MAXPDMGEN1 board draws roughly 20mA for 5-10 seconds while the on-board FPGA is being programmed. Once the FPGA is programmed and starts to output valid PDM data the supply current drawn by the MAXPDMGEN1 board is roughly 50mA. If the current never increases, then the FPGA has not been programmed.
- 7) Make sure that SW300 and SW301 are in the connected position to route the PDM signals to the J2 header.

iTunes is a registered trademark of Apple Inc.

Windows Media is registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX98358

- 8) PDM CLK and data signals should be present on the PDMINCLK and PDMINDAT test points on the MAX98358 DEV board.
- 9) To toggle the PDM clock rate between 3.072MHz and 6.144MHz toggle SW302 labeled OSR\_SEL. Position 1-2 is 3.072MHz and position 2-3 is the 6.144MHz.

## MAX98358 DEV board:

10)  Verify that shunts are installed as follows:

- JU2: Pins 1-3 (selects left channel)
- JU4: Pins 1-2 (power routed from the AUDINT board)
- JU5: Pins 1-5 (12dB gain)
- JU6: Pins 2-3 (power routed from the VIN binding post and test point)
- SW1: Position 1-2 (part is on)
- 11)  Set the power supply output to 5V. Disable the power supply.
- 12)  Connect the power supply ground terminal to the GND binding post and the power supply positive terminal to the VIN binding post on the DEV board.
- 13)  With the audio source disabled, connect the USB audio source to J1 on the DEV board.
- 14)  Connect the speaker across the OUTP and OUTN test points.
- 15)  Enable the power supply output.
- 16)  Enable the audio source.
- 17)  Verify that the speakers are playing the audio source signal.

## Detailed Description of Hardware

The  MAX98358  EV  system  is  designed  to  allow  a thorough evaluation of the MAX98358 PDM digital input Class D power amplifier. The DEV board can be used by itself as a stand-alone evaluation board and driven directly by audio test equipment. The DEV board can also be used in  conjunction  with  the  AUDINT  board,  and  PDM  GEN board to create an evaluation system. The AUDINT board provides an easy-to-use USB audio to I 2 S converter. The I 2 S data is fed to the PDM generator board that uses an FPGA to convert  the  I 2 S  data  stream  into  a  PDM  data stream. This allows for any computer to become a digital audio source that can be used to evaluate the device.

The AUDINT board has DC regulators that can be used to  power  the  device.  This  allows  for  a  quick  evaluation from  a  single  USB  connection.  It  should  be  noted  that

│

## MAX98358 Evaluation System

powering  the  device  from  the  AUDINT  board  does  not allow for high-power evaluation as the input current is limited and evaluation with a speaker is not recommended. Jumpers JU3 and JU4 are used to power the device from the AUDINT board or external supplies connected to test points VIN and VDDIO on the DEV board.

The DEV board operates from a single 2.5V to 5.5V DC power supply and is capable of delivering 3.2W into a 4Ω load and 1.75W into an 8Ω load. The device outputs can be connected directly to a speaker for filterless applications. However, a filter can be added to ease evaluation. The LRC components needed for evaluation of a filtered output are included with the EV kit.

## Filterless Output

The  DEV  board's  filterless  outputs  (OUTP,  OUTN)  can be connected directly to a speaker load without any filtering. Use the OUTP and OUTN test points to connect the speaker directly to the device output.

## Filtered Output

Audio  analyzers  typically  cannot  accept  the  Class  D amplifier's pulse-width modulated (PWM) signals at their inputs. Therefore, the DEV board features optional lowpass filters at the outputs to ease evaluation. As shipped,

## Table 1. JU5 Jumper Selection (GAIN)

| SHUNT POSITION   | GAIN PIN                                   |   MAXIMUM GAIN (dB) |
|------------------|--------------------------------------------|---------------------|
| 1-2              | Connected to VDD through 100kΩ resistor R1 |                   3 |
| 1-3              | Connected to VDD                           |                   6 |
| 1-4              | Connected to GND through 100kΩ resistor R2 |                  15 |
| 1-5*             | Connected to GND                           |                  12 |
| Not installed    | Unconnected                                |                   9 |

## Table 2. JU2 Jumper Selection ( SD\_MODE )

| SHUNT POSITION   | SD_MODE PIN                                    | AUDIO CHANNEL             |
|------------------|------------------------------------------------|---------------------------|
| 1-2              | Connected to VDDIO through R3 (small resistor) | Right                     |
| 1-3*             | Connected to VDDIO through a 2kΩ resistor      | Left                      |
| 1-4              | Connected to VDDIO through R4 (large resistor) | Mono mix (left + right)/2 |

Evaluates: MAX98358

the  DEV  board's  lowpass  filter  LRC  components  are unpopulated and L1 and L2 are shorted on the PCB.

To use the filtered output posts (FOUTP, FOUTN), remove the shorts on L1 and L2 and install components L1, L2, C3-C7, and R5, R6 (provided separately with the DEV board). Use the output posts to connect the filtered outputs to the audio analyzer. The default lowpass filters at the DEV board output are optimized for a 4Ω speaker.

## Jumper Selection

## Selectable Gain (GAIN)

The DEV board features a 5-pin jumper (JU5) to control the device's five programmable gain settings. See Table 1 for gain control configuration.

## SD\_MODE Input

The DEV board features a 4-pin jumper (JU2) to control both the audio channel that is sent to the amplifier output, along  with  shutdown  mode.  JU2  is  used  to  select  the stereo input data between the left channel, right channel, and left/right channels. Note: JU5 must be set to pins 1-2 and a voltage applied to the +3.3V PCB pad for proper operation. See Table 2 for shunt positions.

│

## MAX98358 Evaluation System

## Shutdown Mode

The device features a low-power shutdown mode that is activated by setting jumper SW1 to pins 2-3. To exit shutdown mode, set SW1 to pins 1-2 and select the desired stereo input channel using jumper JU2. See Table 3 for shunt positions.

## External/Internal VDDIO (+3.3V)

On the DEV board, a logic voltage from a control interface  is  needed  for  proper  selection  of  the  stereo  input channel through SD\_MODE . This voltage can be applied externally at the VDDIO test point, or it can be provided from circuitry on the AUDINT board. See Table 4 for shunt positions.

Other  logic  voltages  can  be  used  other  than  +3.3V.  If you  want  to  use  other  logic  voltages,  resistors  R3  and R4  must  be  adjusted.  Refer  to  the SD\_MODE Pin  and Shutdown  Operation section  in  the  MAX98358  IC  data sheet for more information.

## External/Internal Input Supply (VDD)

The  device  can  accept  an  input  supply  from  +2.5V  to +5.5V.  This  voltage  can  be  applied  externally  at  the VDD and GND PCB pads, or it can be provided from the AUDINT board. See Table 5 for JU6 shunt positions.

## Table 3. SW1 Jumper Selection

| SHUNT POSITION   | VDDIO VOLTAGE                           | DEVICE OPERATION                                    |
|------------------|-----------------------------------------|-----------------------------------------------------|
| 1-2*             | VDDIO determined by JU4 jumper position | Normal (input channel selected through JU2 setting) |
| 2-3              | Connected to GND                        | Shutdown                                            |

## Table 4. JU4 Jumper Selection

| SHUNT POSITION   | LOGIC VOLTAGE (VDDIO)                                                |
|------------------|----------------------------------------------------------------------|
| 1-2*             | 3.3V supplied by AUDINT board connected to the J1 header.            |
| 2-3              | User-supplied external power supply applied at the VDDIO test point. |

## Table 5. JU6 Jumper Selection

| SHUNT POSITION   | INPUT VOLTAGE (VIN)                                             |
|------------------|-----------------------------------------------------------------|
| Installed*       | VDD supplied from the AUDINT board connected to J1 header.      |
| Not installed    | User-supplied external power supply applied at the VIN PCB pad. |

Evaluates: MAX98358

## Audio Interface Board (AUDINT Board)

The AUDINT board provides USB-to-I 2 S data conversion, as well as DC regulators that can be used to power the device. The USB-to-I 2 S converter on the AUDINT board allows for any computer to become an I 2 S digital audio source. This allows for a quick evaluation from a single USB connection.  Using  the AUDINT  board  as  a  power supply for high-power evaluation is not recommended as the input current is limited. For high-power evaluation, use an external supply connected to VIN.

## PDM Generator Board (PDM GEN Board)

The  PDM  GEN  board  provides  a  seamless  means  to convert an I 2 S data stream into a PDM data stream. The PDM GEN board also has its own set of DC regulators so that the system can be powered from a single 5V supply. The PDM generator board must be powered externally at +5V\_TP.

## Driving PDM Directly

To drive PDM directly, make sure that the sliders (SW300 and SW301) are in the disconnected position or the DEV board is physically separated from the rest of the EV SYS. Apply  signals  at  the  PDMINDAT  and  PDMINCLK  test points or between J3 pins 1-2 at the appropriate locations (pin 1 is signal ground).

│

## Ordering Information

| PART               | TYPE                                    |
|--------------------|-----------------------------------------|
| MAX98358DEV#TQFN   | Development Board (DEV board only)      |
| MAX98358EVSYS#TQFN | Evaluation System (DEV + AUDINT boards) |
| MAX98358DEV#WLP    | Development Board (DEV board only)      |
| MAX98358EVSYS#WLP  | Evaluation System (DEV + AUDINT boards) |

# Denotes RoHS compliant.

## MAX98358 EV Kit Bill of Materials (TQFN)

|   ITEM | COMPONENT DESIGNATOR                 | DNI   |   QTY | MFG.                | MFG. PART NO.     | DESCRIPTION                                                     |
|--------|--------------------------------------|-------|-------|---------------------|-------------------|-----------------------------------------------------------------|
|      1 | C1                                   |       |     1 | Murata              | GRM188R60J106K    | 10uF ±10%, 6.3V X5R ceramic capacitor (0603)                    |
|      2 | C2                                   |       |     1 | Murata              | GRM155R71C104K    | 0.1uF ±10%, 16V X7R ceramic capacitor (0402)                    |
|      3 | C3, C4, C5, C6, C7, C8, C9, C10, C11 | DNI   |     9 |                     |                   | OPEN, ceramic capacitor (0402)                                  |
|      4 | FB1, FB2                             |       |     2 |                     |                   | 0 ohms ±5% resistor (0603)                                      |
|      5 | J1                                   |       |     1 | Samec               | TSW-113-08-S-D-RA | 26-pin (2x13) dual row right-angle header, 0.1in centers        |
|      6 | J3                                   |       |     1 | Sullins             | PEC36DAAN         | 4-pin header, 0.1in centers                                     |
|      7 | JU2                                  |       |     1 | Sullins             | PEC36SAAN         | 4-pin header, 0.1in centers                                     |
|      8 | JU4, JU6                             |       |     2 | Sullins             | PEC36SAAN         | 3-pin header, 0.1in centers                                     |
|      9 | JU5                                  |       |     1 | Sullins             | PEC36SAAN         | 5-pin header, 0.1in centers                                     |
|     10 | L1, L2                               | DNI   |     2 | Toko                | A916CY-220M       | PC SHORT, inductor (6.2mm x 6.3mm)                              |
|     11 | R1, R2                               |       |     2 |                     |                   | 100k Ohm ±5% resistor (0603)                                    |
|     12 | R3                                   |       |     1 |                     |                   | 226k Ohm ±1% resistor (0603)                                    |
|     13 | R4                                   |       |     1 |                     |                   | 634k Ohm ±1% resistor (0603)                                    |
|     14 | R5, R6                               | DNI   |     2 |                     |                   | OPEN, resistor (0402)                                           |
|     15 | R7, R8                               |       |     2 |                     |                   | 0 ohms ±5% resistor (0402)                                      |
|     16 | R10                                  |       |     1 |                     |                   | 2k Ohm ±1% resistor (0603)                                      |
|     17 | SW1                                  |       |     1 | ITW Pancon          | JSC416G0          | 3-pin header switch, 0.1in centers                              |
|     18 | U1                                   |       |     1 | MAXIM               | MAX98358ETE+      | PDM Input Class D Audio Power Amplifier (16 pin TQFN)           |
|     19 | OUTP                                 |       |     1 | Keystone            | 5012              | Multi-purpose test point (White)                                |
|     20 | OUTN, GND, GND, GND, GND, GND, GND   |       |     7 | Keystone            | 5011              | Multi-purpose test point (Black)                                |
|     21 | GND, VIN, FOUTP, FOUTN               |       |     4 | Johnson             | 111-2223-001      | Binding Posts                                                   |
|     22 | PDMINDAT, PDMINCLK                   |       |     2 | Keystone            | 5013              | Multi-purpose test point (Orange)                               |
|     23 | VDDIO                                |       |     1 | Keystone            | 5010              | Multi-purpose test point (Red)                                  |
|     24 | MAX98358 TQFN DEVELOPMENT BOARD      |       |     1 |                     |                   | PCB                                                             |
|     25 | VIN, GND, OUTP, OUTN, GND            |       |     5 | Weico Wire          | 9020 Buss         | Wire, Buss, 20G plated solid copper 0.25 inch U-shape wire loop |
|     26 |                                      |       |     4 | Keystone            | 2203              | Aluminum standoff, round, 4-40 thread, 0.187" OD, 0.5"L         |
|     27 |                                      |       |     4 | B&F Fastener Supply | PMSSS4400038PH    | Machine screw, philips, 4-40, 3/8" length                       |
|     28 |                                      |       |     4 |                     |                   | Shunt                                                           |

*DNI = DO NOT INSTALL

Evaluates: MAX98358

## MAX98358 EV Kit Schematics (TQFN)

<!-- image -->

Evaluates: MAX98358

## MAX98358 Evaluation System

## MAX98358 EV Kit PCB Layout (TQFN)

MAX98358 EV Kit PCB (TQFN) Top Silkscreen

<!-- image -->

MAX98358 EV Kit PCB (WLP) Component Side

<!-- image -->

MAX98358 EV Kit PCB (TQFN) Layer 2 Ground

<!-- image -->

│

## MAX98358 Evaluation System

## MAX98358 EV Kit PCB Layout (TQFN) (continued)

MAX98358 EV Kit PCB (TQFN) Layer 3 Power

<!-- image -->

MAX98358 EV Kit PCB (TQFN) Solder Side

<!-- image -->

│

## MAX98358 EV Kit Bill of Materials (WLP)

*DNI = DO NOT INSTALL

|   ITEM | COMPONENT DESIGNATOR                 | DNI   |   QTY | MFG.                | MFG. PART NO.     | DESCRIPTION                                                     |
|--------|--------------------------------------|-------|-------|---------------------|-------------------|-----------------------------------------------------------------|
|      1 | C1                                   |       |     1 | Murata              | GRM188R60J106K    | 10uF ±10%, 6.3V X5R ceramic capacitor (0603)                    |
|      2 | C2                                   |       |     1 | Murata              | GRM155R71C104K    | 0.1uF ±10%, 16V X7R ceramic capacitor (0402)                    |
|      3 | C3, C4, C5, C6, C7, C8, C9, C10, C11 | DNI   |     9 |                     |                   | OPEN, ceramic capacitor (0402)                                  |
|      4 | FB1, FB2                             |       |     2 |                     |                   | 0 ohms ±5% resistor (0603)                                      |
|      5 | J1                                   |       |     1 | Samec               | TSW-113-08-S-D-RA | 26-pin (2x13) dual row right-angle header, 0.1in centers        |
|      6 | J3                                   |       |     1 | Sullins             | PEC36DAAN         | 4-pin header, 0.1in centers                                     |
|      7 | JU2                                  |       |     1 | Sullins             | PEC36SAAN         | 4-pin header, 0.1in centers                                     |
|      8 | JU4, JU6                             |       |     2 | Sullins             | PEC36SAAN         | 3-pin header, 0.1in centers                                     |
|      9 | JU5                                  |       |     1 | Sullins             | PEC36SAAN         | 5-pin header, 0.1in centers                                     |
|     10 | L1, L2                               | DNI   |     2 | Toko                | A916CY-220M       | PC SHORT, inductor (6.2mm x 6.3mm)                              |
|     11 | R1, R2                               |       |     2 |                     |                   | 100k Ohm ±5% resistor (0603)                                    |
|     12 | R3                                   |       |     1 |                     |                   | 226k Ohm ±1% resistor (0603)                                    |
|     13 | R4                                   |       |     1 |                     |                   | 634k Ohm ±1% resistor (0603)                                    |
|     14 | R5, R6                               | DNI   |     2 |                     |                   | OPEN, resistor (0402)                                           |
|     15 | R7, R8                               |       |     2 |                     |                   | 0 ohms ±5% resistor (0402)                                      |
|     16 | R10                                  |       |     1 |                     |                   | 2k Ohm ±1% resistor (0603)                                      |
|     17 | SW1                                  |       |     1 | ITW Pancon          | JSC416G0          | 3-pin header switch, 0.1in centers                              |
|     18 | U1                                   |       |     1 | MAXIM               | MAX98358EWL+      | PDM Input Class D Audio Power Amplifier (9 bump WLP)            |
|     19 | OUTP                                 |       |     1 | Keystone            | 5012              | Multi-purpose test point (White)                                |
|     20 | OUTN, GND, GND, GND, GND, GND, GND   |       |     7 | Keystone            | 5011              | Multi-purpose test point (Black)                                |
|     21 | GND, VIN, FOUTP, FOUTN               |       |     4 | Johnson             | 111-2223-001      | Binding Posts                                                   |
|     22 | PDMINDAT, PDMINCLK                   |       |     2 | Keystone            | 5013              | Multi-purpose test point (Orange)                               |
|     23 | VDDIO                                |       |     1 | Keystone            | 5010              | Multi-purpose test point (Red)                                  |
|     24 |                                      |       |     4 |                     |                   | Shunt                                                           |
|     25 | MAX98358 WLP DEVELOPMENT BOARD       |       |     1 |                     |                   | PCB                                                             |
|     26 | VIN, GND, OUTP, OUTN, GND            |       |     5 | Weico Wire          | 9020 Buss         | Wire, Buss, 20G plated solid copper 0.25 inch U-shape wire loop |
|     27 |                                      |       |     4 | Keystone            | 2203              | Aluminum standoff, round, 4-40 thread, 0.187" OD, 0.5"L         |
|     28 |                                      |       |     4 | B&F Fastener Supply | PMSSS4400038PH    | Machine screw, philips, 4-40, 3/8" length                       |

Evaluates: MAX98358

## MAX98358 EV Kit Schematics (WLP)

<!-- image -->

│

Evaluates: MAX98358

## MAX98358 Evaluation System

## MAX98358 EV Kit PCB Layout (WLP)

MAX98358 EV Kit PCB (WLP) Top Silkscreen

<!-- image -->

MAX98358 EV Kit PCB (WLP) Component Side

<!-- image -->

MAX98358 EV Kit PCB (WLP) Layer 2 Ground

<!-- image -->

│

## MAX98358 Evaluation System

## MAX98358 EV Kit PCB Layout (WLP) (continued)

MAX98358 EV Kit PCB (WLP) Layer 3

<!-- image -->

MAX98358 EV Kit PCB (WLP) Solder Side

<!-- image -->

│

## MAX98358 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX98358