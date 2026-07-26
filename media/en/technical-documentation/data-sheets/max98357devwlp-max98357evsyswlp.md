<!-- lastmod 2022-10-10 -->
## MAX98357 Development Board/ Evaluation System (WLP)

## General Description

The MAX98357 development board (DEV board) is a fully assembled and tested PCB that evaluates the MAX98357 I 2 S digital input Class D power amplifier. The DEV board operates from a single 2.5V to 5.5V DC power supply and is capable of delivering 3.2W into a 4Ω load. The device outputs can be connected directly to a speaker load for filterless  applications. However, a filter can be added to ease evaluation. The MAX98357A accepts standard I 2 S data  and  the  MAX98357B  accepts  left-justified  digital audio  data.  Both  versions  also  support  8-channel  TDM audio data.

The MAX98357 evaluation system (EV system) includes the MAX98357 DEV board and Maxim Integrated's audio interface board (MAXAUDINT001# board).

The  MAXAUDINT001#  board  provides  an  easy-to-use USB audio-to-I 2 S converter. This allows for any computer to become a digital audio source, which can be used to evaluate  the  devices. The  MAXAUDINT001# board can also be used to power the MAX98357. This allows for a complete evaluation from a single USB connection.

## Evaluates: MAX98357A/MAX98357B (WLP)

## Features

- 2.5V to 5.5V Single-Supply Operation
- Only a Single External Component (VDD Capacitor) Required in Many Applications
- I 2 S, Left-Justified, or TDM Input
- Five Selectable Gains (3db, 6dB, 9dB, 12dB, and 15dB)
- Audio Channel Select (Left, Right, and Mono Mix)
- Filterless Operation
- Optional Class D Output Filters for Ease of Evaluation
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

Figure 1. Simplified Block Diagram

<!-- image -->

## MAX98357 Development Board/ Evaluation System (WLP)

## Quick Start

## Recommended Equipment

- MAX98357 EV system
- 2.5V to 5.5V, 2A DC power supply
- USB audio source (from computer through an audio media  player  such  as  iTunes ®   or  Windows  Media ® player)
- 4Ω or 8Ω speaker

## Procedure

The EV system is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1)  Verify  that  headers  and  switches  are  configured  as follows:

JU2: Pins 1-3 (selects left channel)

- JU4: Pins 1-2 (power routed from the MAXAUDINT001# board)
- JU5: Pins 1-5 (12dB GAIN\_SLOT)
- JU6: Pins 2-3 (power routed from external supply)

SW1: Position 1-2 (part is on)

- 2)  Set the power-supply output to 5V. Disable the power supply.
- 3)  Connect  the  power-supply  ground  terminal  to  GND and the power-supply positive terminal to VIN on the DEV board.
- 4)  With  the  audio  source  disabled,  connect  the  USB audio source to J1 on the DEV board.
- 5) Connect the MAXAUDINT001# board to J1 on the DEV board.
- 6)  Connect the speaker across the OUTP and OUTN test points.
- 7)  Enable the power-supply output.
- 8)  Enable the audio source.
- 9)  Verify that the speakers are playing the audio source signal.

iTunes is a registered trademark of Apple Inc.

Windows Media is registered trademark and registered service mark of Microsoft Corporation.

## Evaluates: MAX98357A/MAX98357B (WLP)

## Detailed Description of Hardware

The  MAX98357  EV  system  is  designed  to  allow  a  thorough evaluation of the MAX98357 I 2 S digital input Class D power amplifier. The DEV board can be used by itself as a stand-alone evaluation board and driven directly by audio test equipment. The DEV board can also be used in conjunction with the MAXAUDINT001# board, which allows for any computer to become an I 2 S digital audio source.

The MAXAUDINT001# board has DC regulators that can be used to power the device. This allows for quick evaluation from a single USB connection. Note that powering the  device  from  the  MAXAUDINT001#  board  does  not allow for high-power evaluation as the input current is limited and evaluation with a speaker is not recommended. Jumpers JU4 and JU6 are used to power the device from the  MAXAUDINT001#  board  or  external  supplies  connected to test points VIN and VDDIO on the DEV board.

The DEV board operates from a single 2.5V to 5.5V DC power supply and is capable of delivering 3.2W into a 4Ω load and 1.75W into an 8Ω load. The device outputs can be connected directly to a speaker for filterless applications. However, a filter can be added to ease evaluation. The LRC components needed for evaluation of a filtered output  are  included  with  the  EV  kit.  The  MAX98357A accepts standard I 2 S data and the MAX98357B accepts left-justified digital audio data. Both versions also support 8-channel TDM audio data.

## Filterless Output

The DEV board filterless outputs (OUTP, OUTN) can be connected  directly  to  a  speaker  load  without  any  filtering. Use the OUTP and OUTN test points to connect the speaker directly to the device output.

## Filtered Output

Audio  analyzers  typically  cannot  accept  the  Class  D amplifier's pulse-width modulated (PWM) signals at their inputs. Therefore, the DEV board features optional lowpass filters at the outputs to ease evaluation. As shipped, the  DEV  board's  lowpass  filter  LRC  components  are unpopulated and L1, L2 are shorted on the PCB.

To use the filtered output posts (FOUTP, FOUTN), remove the shorts on L1 and L2 and install components L1, L2, C3C7, and R5, R6. Use the output posts to connect the filtered outputs to the audio analyzer. The default lowpass filters at the DEV board output are optimized for a 4Ω speaker.

## MAX98357 Development Board/ Evaluation System (WLP)

## EMI Considerations and Optional Ferrite Bead Filter

In  applications  where  speaker  leads/wires  are  long (exceeding approximately 12 inches), additional EMI suppression can be achieved by using a filter constructed from a ferrite bead (FB1, FB2) and a capacitor to ground (C8, C9) (Figure 2). Use a ferrite bead with low DC resistance, high  frequency  impedance  (&gt;  600MHz)  between  100Ω and 600Ω, and rated for at least 1A. The capacitor value varies  based  on  the  ferrite  bead  chosen  and  the  actual speaker lead length. Select a capacitor less than 1nF with the value based upon optimizing EMI performance.

Do not use the optional ferrite bead filter in conjunction with the optional Class D Filter.

## Jumper Selection

## Selectable (GAIN\_SLOT)

The DEV board features a 5-pin jumper (JU5) to control the  device's  five  programmable  gain  settings.  In  TDM mode, the gain is fixed at 12dB and the GAIN\_SLOT pin is repurposed for slot selection. See Table 1 for gain-control configuration.

Figure 2. Optional Ferrite Bead Filter

<!-- image -->

## Table 1. JU5 Jumper Selection (GAIN\_SLOT)

| SHUNT POSITION   | GAIN_SLOT PIN                              |   MAXIMUM GAIN_SLOT (dB) |
|------------------|--------------------------------------------|--------------------------|
| 1-2              | Connected to VDD through 100kΩ resistor R1 |                        3 |
| 1-3              | Connected to VDD                           |                        6 |
| 1-4              | Connected to GND through 100kΩ resistor R2 |                       15 |
| 1-5*             | Connected to GND                           |                       12 |
| Not installed    | Unconnected                                |                        9 |

## Evaluates: MAX98357A/MAX98357B (WLP)

## SD\_MODE Input

The DEV board features a 4-pin jumper (JU2) to control both the audio channel that is sent to the amplifier output, along  with  shutdown  mode.  JU2  is  used  to  select  the stereo input data between the left channel, right channel, and the sum of the left/right channels. JU4 must be set to pins 1-2 and a voltage applied to the +3.3V PCB pad for proper operation. See Table 2 for shunt positions.

## TDM Mode

In TDM mode, the device has a fixed gain of 12dB and the GAIN\_SLOT pin becomes repurposed for slot selection. The device accepts 8-channel TDM data. The data can be either 16 bits or 32 bits wide. The GAIN\_SLOT pin and SD\_MODE are used to select which of 8 channels of TDM data the part responds to, as shown in Table 3.

## Table 2. JU2 Jumper Selection ( SD\_MODE )

| SHUNT POSITION   | SD_MODE PIN                                    | AUDIO CHANNEL             |
|------------------|------------------------------------------------|---------------------------|
| 1-2              | Connected to VDDIO through R3 (small resistor) | Right                     |
| 1-3*             | Connected to VDDIO through a 2kΩ resistor      | Left                      |
| 1-4              | Connected to VDDIO through R4 (large resistor) | Mono mix (left + right)/2 |

## Table 3. TDM Mode Channel Selection (JU2, JU5)

| JU2           | JU5   | CHANNEL   | BITS     |
|---------------|-------|-----------|----------|
| Connected low | X     | OFF       | N/A      |
| 1-3           | 1-5   | 0         | 16 or 32 |
| 1-3           | 1-3   | 1         | 16 or 32 |
| 1-3           | OPEN  | 2         | 16 or 32 |
| 1-3           | 1-2   | 3         | 16 or 32 |
| 1-3           | 1-4   | 4         | 16 or 32 |
| 1-4           | 1-5   | 5         | 16 or 32 |
| 1-4           | OPEN  | 6         | 16 or 32 |
| 1-4           | 1-3   | 7         | 16 or 32 |

│

## MAX98357 Development Board/ Evaluation System (WLP)

## Shutdown Mode

The device features a low-power shutdown mode that is activated by setting jumper SW1 to pins 2-3. To exit shutdown mode, set SW1 to pins 1-2 and select the desired stereo input channel using jumper JU2. See Table 4 for shunt positions.

## External/Internal VDDIO (+1.8V to +3.3V)

On the DEV board, a logic voltage from a control interface is needed for proper selection of the stereo input channel through SD\_MODE .  This  voltage  can  be  applied  externally at the VDDIO test point or it can be provided from circuitry on the MAXAUDINT001# board. See Table 5 for JU4 jumper selection.

Other logic voltages can be used other than +3.3V. If you want  to  use  other  logic  voltages,  resistors  R3  and  R4 must be adjusted. Refer to the SD\_MODE and Shutdown Operation section  in  the  MAX98357  IC  data  sheet  for more information.

## VDD Input Supply (+2.5V to +5.5V)

The  device  can  accept  an  input  supply  from  +2.5V  to +5.5V.  This  voltage  can  be  applied  externally  at  the VDD and GND PCB pads, or it can be provided from the MAXAUDINT001#  board.  See  Table  6  for  JU6  jumper selection.

## Audio Interface Board (MAXAUDINT001# Board)

The  MAXAUDINT001# board provides  USB-to-I 2 S  data conversion,  as  well  as  DC  regulators  that  can  be  used to  power  the  devices. The  USB-to-I 2 S  converter  on  the MAXAUDINT001#  board  allows  for  any  computer  to become  an  I 2 S  digital  audio  source  without  requiring additional  driver  installation.  On  the  MAXAUDINT001# board, set SW1 to 'demo' and set the I 2 S switch to connected to source audio by USB. This allows for a quick evaluation  from  a  single  USB  connection.  Using  the MAXAUDINT001# board as a power supply for high-power evaluation is not recommended as the input current is limited. For high-power evaluation, use an external supply connected to VIN.

## Evaluates: MAX98357A/MAX98357B (WLP)

## Driving I 2 S Directly

To drive I 2 S directly, apply signals at the BCLK, LRCLK, and SDIN test points, or on the J3 header, or between J3 pins 1-2 at the appropriate locations (signal and ground are labeled on the board).

## Evaluating the MAX98357B

The  MAX98357  DEV  board  comes  with  a  MAX98357A populated on the board, but can also be used to evaluate the MAX98357B. To evaluate the MAX98357B, carefully remove the MAX98357A (U1) device from the board and replace with the MAX98357BEWL+. No other component changes are required.

## Table 4. SW1 Jumper Selection

| SWITCH POSITION   | VDDIO VOLTAGE                           | DEVICE OPERATION                                    |
|-------------------|-----------------------------------------|-----------------------------------------------------|
| 1-2*              | VDDIO determined by JU4 jumper position | Normal (input channel selected through JU2 setting) |
| 2-3               | Connected to GND                        | Shutdown                                            |

## Table 5. JU4 Jumper Selection (VDDIO)

| SHUNT POSITION   | LOGIC VOLTAGE (VDDIO)                                                |
|------------------|----------------------------------------------------------------------|
| 1-2*             | 3.3V supplied by the MAXAUDINT001# board connected to J1 header.     |
| 2-3              | User-supplied external power supply applied at the VDDIO test point. |

* Default position.

## Table 6. JU6 Jumper Selection (VDD)

| SHUNT POSITION   | INPUT VOLTAGE (VDD)                                                   |
|------------------|-----------------------------------------------------------------------|
| 1-2*             | VDD supplied from the MAXAUDINT001# board connected to the J1 header. |
| 2-3              | User-supplied external power supply applied at the VIN PCB pad.       |

│

## MAX98357 Development Board/ Evaluation System (WLP)

## Component List

| DESIGNATION                 |   QTY | DESCRIPTION                                                                                           |
|-----------------------------|-------|-------------------------------------------------------------------------------------------------------|
| BCLK, DIN, LRCLK            |     3 | Orange multipurpose test points                                                                       |
| C1                          |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106K                                    |
| C2                          |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K                                    |
| C3-C12                      |     0 | Not installed, ceramic capacitors (0402)                                                              |
| FB1, FB2                    |     2 | 0Ω ±5% resistors (0603)                                                                               |
| FOUTN, FOUTP, GND, VIN      |     4 | Binding posts                                                                                         |
| FOUTN, FOUTP, GND (x2), VDD |     5 | 20G plated solid copper bus wire, 0.25in U-shaped wire loop                                           |
| GND (x4), OUTN              |     5 | Black multipurpose test points (63 mil drill size)                                                    |
| J1                          |     1 | 26-pin (2 x 13) dual-row right- angle header, 0.1in centers                                           |
| J3                          |     1 | 6-pin header                                                                                          |
| JU2                         |     1 | 4-pin header, 0.1 in centers                                                                          |
| JU4, JU6                    |     2 | 3-pin headers, 0.1 in centers                                                                         |
| JU5                         |     1 | 5-pin header, 0.1 in centers                                                                          |
| L1, L2                      |     0 | Not installed, 22µH inductors (6.2mm x 6.3mm)-short (PC trace) TOKO D63CB series part TOKOA916CY-220M |
| OUTP                        |     1 | White multipurpose test point (63 mil drill size)                                                     |
| R1, R2                      |     2 | 100kΩ ±5% resistors (0603)                                                                            |
| R3                          |     1 | 226kΩ ±1% resistor (0603)                                                                             |

## Component Suppliers

| SUPPLIER          | PHONE        | WEBSITE                |
|-------------------|--------------|------------------------|
| Murata Americas   | 770-436-1300 | www.murataamericas.com |
| TDK Corp.         | 847-803-6100 | www.component.tdk.com  |
| TOKOAmerica, Inc. | 847-297-0070 | www.tokoam.com         |

Note:

Indicate that you are using the MAX98357 when contacting these component suppliers.

Evaluates: MAX98357A/MAX98357B

(WLP)

| DESIGNATION                            | QTY                                    | DESCRIPTION                                                           |
|----------------------------------------|----------------------------------------|-----------------------------------------------------------------------|
| R4                                     | 1                                      | 634kΩ ±1% resistor (0603)                                             |
| R5, R6                                 | 0                                      | Not installed, resistors (0402)                                       |
| R7-R9                                  | 3                                      | 0Ω ±5% resistors (0603)                                               |
| U1                                     | 1                                      | I 2 S input Class D audio amplifier (16 WLP) Maxim MAX98357AEWL+      |
| VDDIO                                  | 1                                      | Red multipurpose test point (63 mil drill size)                       |
| SW1                                    | 1                                      | SPDT jumper switch, 0.1in centers                                     |
| -                                      | 4                                      | Shunts                                                                |
| -                                      | 1                                      | PCB: MAX98357 WLP EVKIT DEVELOPMENT BOARD                             |
| OPTIONAL CLASS D FILTER COMPONENTS     | OPTIONAL CLASS D FILTER COMPONENTS     | OPTIONAL CLASS D FILTER COMPONENTS                                    |
| C3-C7                                  | 7                                      | 0.22µF ±10%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J224K    |
| L1, L2                                 | 2                                      | 22µH, 1A inductors (6.2mm x 6.3mm) TOKOA916CY-220M                    |
| R5, R6                                 | 2                                      | 22Ω ±5% resistors (0402)                                              |
| OPTIONAL I 2 S CONDITIONING COMPONENTS | OPTIONAL I 2 S CONDITIONING COMPONENTS | OPTIONAL I 2 S CONDITIONING COMPONENTS                                |
| R7-R9                                  | 3                                      | 51Ω ±5% resistors (0402)                                              |
| C10-C12                                | 3                                      | 18pF ±5%, 50V, C0G ceramic capacitors (0402)                          |
| OPTIONAL EMI FILTERING COMPONENTS      | OPTIONAL EMI FILTERING COMPONENTS      | OPTIONAL EMI FILTERING COMPONENTS                                     |
| C8, C9                                 | 2                                      | 680pF ±10% 50V X54 ceramic capacitors (0402) TDK CGA2B1C0G2A681J050BE |
| FB1, FB2                               | 2                                      | Murata BLM18SG331TN1 (0603)                                           |

│

## Evaluates: MAX98357A/MAX98357B (WLP)

Figure 3. MAX98357 DEV Board Schematic

<!-- image -->

## MAX98357 Development Board/ Evaluation System (WLP)

## MAX98357 EV Kit PCB Layouts

MAX98357 DEV Board Silkscreen-Top

<!-- image -->

## Evaluates: MAX98357A/MAX98357B (WLP)

MAX98357 DEV Board PCB Layout-Component Side

<!-- image -->

MAX98357 DEV Board PCB Layout-Layer 2

<!-- image -->

│

## MAX98357 Development Board/ Evaluation System (WLP)

## MAX98357 EV Kit PCB Layouts (continued)

MAX98357 DEV Board PCB Layout-Layer 3

<!-- image -->

Evaluates: MAX98357A/MAX98357B

(WLP)

MAX98357 DEV Board PCB Layout-Solder Side

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

| PART              | TYPE                                               |
|-------------------|----------------------------------------------------|
| MAX98357DEV#WLP   | Development Board (DEV Board only)                 |
| MAX98357EVSYS#WLP | Evaluation System Kit (DEV + MAXAUDINT001# Boards) |

│

## MAX98357 Development Board/ Evaluation System (WLP)

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/13           | Initial release                                                                                                                         | -               |
|                 1 | 4/14            | Added Evaluating the MAX98357B section and updated Figures 2 and 7                                                                      | 4-6, 8          |
|                 2 | 9/18            | Changed all instances of 'AUDINT001' to 'MAXAUDINT001#,' added EMI filtering information and new Figure 2, updated Component List table | 1-9             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX98357A/MAX98357B

(WLP)