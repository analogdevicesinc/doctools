<!-- lastmod 2022-08-03 -->
## General Description

The MAX4079 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed circuit board (PCB). The MAX4079 filters and buffers standard-definition video signals. It also amplifies audio signals and creates a mono audio signal from a stereo input signal. The video section has luma/chroma (Y/C) inputs, a composite (CVBS) input, Y/C outputs, and two CVBS outputs. The video circuitry is powered from a single 5VDC power supply. The audio section has two sets of differential/single-ended audio inputs, four sets of single-ended audio outputs, and a mono audio output configurable by the customer. The audio circuitry is powered from a single 12VDC power supply.

| DESIGNATION                    |   QTY | DESCRIPTION                                                                        |
|--------------------------------|-------|------------------------------------------------------------------------------------|
| C1, C34                        |     2 | 0.01µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H103K                  |
| C2, C4, C16, C17, C18, C35-C38 |     9 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K                   |
| C3                             |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J475K                |
| C5, C33                        |     2 | 1µF ±10%, 25V X7R ceramic capacitors (0805) TDK C2012X7R1E105K                     |
| C6                             |     1 | 47µF ±20%, 16V aluminum electrolytic capacitor (6.3mm x 6mm) Sanyo 16CV47AX        |
| C7-C10                         |     4 | 330µF ±20%, 6.3V aluminum electrolytic capacitors (6.3mm x 7.7mm) Sanyo 6.3CE330AX |
| C11-C15                        |     5 | 10µF ±20%, 35V aluminum electrolytic capacitors (5mm x 6mm) Sanyo 35CV10AX         |
| C19-C22                        |     4 | 100µF ±20%, 16V aluminum electrolytic capacitors (6.3mm x 6mm) Sanyo 16CV100AX     |

<!-- image -->

## Features

- ♦ Internal Reconstruction Filter (6MHz) Supports NTSC, PAL, DVB per ITU-601
- ♦ DC- or AC-Coupled Video Outputs
- ♦ Standard 75 Ω Video Input Termination
- ♦ Drives 150 Ω Output Load
- ♦ DC- or AC-Coupled Audio Inputs
- ♦ Standard RCA Jacks for Audio Inputs and Outputs
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX4079EVKIT  | 0°C to 70°C  | 24 TSSOP     |
| MAX4079EVKIT+ | 0°C to 70°C  | 24 TSSOP     |

## Component List

| DESIGNATION                                             |   QTY | DESCRIPTION                                       |
|---------------------------------------------------------|-------|---------------------------------------------------|
| C23-C32                                                 |     0 | Not installed, capacitors (0603)                  |
| CVBS_IN, CVBS_OUT1, CVBS_OUT2, C_IN, C_OUT, Y_IN, Y_OUT |     7 | 75 Ω BNC PCB-mount connectors                     |
| JU1-JU10                                                |    10 | 2-pin headers                                     |
| LIN+, LOUT_1, LOUT_2, MONO_OUT                          |     4 | Nonswitched PCB-mount jacks, white                |
| RIN+, ROUT_1, ROUT_2,                                   |     3 | Nonswitched PCB-mount jacks, red                  |
| RIN-, LIN-                                              |     2 | Nonswitched PCB-mount jacks, black                |
| R1, R2, R3, R21-R24                                     |     7 | 75 Ω ±1% resistors (1206) Panasonic ERJ-8ENF75R0V |
| R4-R7, R17-R20                                          |     8 | 0 Ω ±5% resistors (0603)                          |
| R8-R15                                                  |     8 | 22.1k Ω ±1% resistors (0603)                      |
| R16                                                     |     1 | 10k Ω ±1% resistor (0603)                         |
| U1                                                      |     1 | MAX4079CUG+ (24-pin TSSOP)                        |
| -                                                       |    10 | Shunts                                            |
| -                                                       |     1 | PCB: MAX4079 evaluation kit+                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX4079 Evaluation Kit

## Component Suppliers

| SUPPLIER                                    | PHONE        | WEBSITE               |
|---------------------------------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd.                       | 770-436-1300 | www.murata.com        |
| Panasonic Corp.                             | 800-344-2112 | www.panasonic.com     |
| SANYO Electronic Device (U.S.A) Corporation | 619-661-6835 | www.sanyodevice.com   |
| TDK Corp.                                   | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX4079 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 5V, 500mA DC power supply (VVID)
- 12V, 100mA DC power supply (AUDV)
- One DVD player
- One color TV
- Applicable BNC and RCA adapters and cables

## Procedure (Single-Ended Mode)

The MAX4079 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that no shunts are installed across jumpers JU1-JU4 (all video output channels are AC-coupled).
- 2) Verify  that  no  shunts  are  installed  across  jumpers JU5-JU8 (all audio input channels are AC-coupled).
- 3) Verify  that  shunts  are  installed  across  jumpers  JU9 and JU10 (both audio input channels are configured to single-ended mode).
- 4) Connect the DVD player to the EV kit as follows:
- Attach the BNC to RCA adapter to the CVBS\_IN BNC connector on the EV kit. Connect the video (yellow) RCA connector from the DVD player to the CVBS\_IN BNC through the RCA adapter on the EV kit.
- Connect the left audio (white) RCA connector from the DVD player to the LIN+ (white) RCA connector on the EV kit.
- Connect the right audio (red) RCA connector from the  DVD player to the RIN+ (red) RCA connector on the EV kit.
- 5) Connect the color TV to the EV kit as follows:
- Attach the BNC to RCA adapter to the CVBS\_OUT1 BNC connector on the EV kit. Connect the video
10. (yellow) RCA connector from the color TV to the CVBS\_OUT1 BNC through the RCA adapter on the EV kit.
- Connect the left audio (white) RCA connector from the color TV to the LOUT\_1 (white) RCA connector on the EV kit.
- Connect the right audio (red) RCA connector from the  color  TV  to  the  ROUT\_1  (red)  RCA  connector on the EV kit.
- 6) Connect the positive terminal of the 5VDC power supply to the VVID pad on the EV kit. Connect the ground terminal of the power supply to the GVID pad.
- 7) Connect the positive terminal of the 12VDC power supply to the AUDV pad on the EV kit. Connect the ground terminal of the power supply to the GAUD pad.
- 8) Turn on both DC power supplies.
- 9) Turn on the DVD player and the color TV.

## Detailed Description

The MAX4079 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that contains a MAX4079 IC, providing buffering/filtering for video signals and amplification/branch-out for audio signals. The EV kit is divided into two sections: a video section and an audio section. The video section is powered from a 5VDC power supply that can provide up to 500mA. The audio section is powered from a 12VDC power supply that can provide up to 100mA.

The video signals are individually filtered by 6MHz lowpass filters,  and  amplified  with  a  fixed  gain  of  +2V/V (+6dB). The output DC level of the luma (Y\_OUT) and the composite (CVBS\_OUT1 and CVBS\_OUT2) video signals is 0.8VDC. The output DC level of the chroma (C)  video  signal  is  2VDC.  The  output  at  the CVBS\_OUT1 and CVBS\_OUT2 are identical.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

All of the video inputs and outputs on the MAX4079 EV kit are terminated to 75 Ω . The video inputs are AC-coupled. By AC-coupling the video signal, the video input stage can accept any DC bias on the video signal at the connector. The video output channels can be DCor  AC-coupled by jumper selection. DC-coupling the video output channels reduces component cost and minimizes circuit area.

The MAX4079 EV kit accepts an audio stereo channel. Each audio signal, left and right, can be configured for single-ended or differential operation. The left and right audio signals are amplified with a gain of +2V/V (+6dB). The audio signals are buffered and then split into two identical outputs. Furthermore, a fifth audio output (MONO\_OUT) is derived from the left and right audio inputs. The mono voltage gain is +1.414V/V (+3dB).

All of the audio outputs on the MAX4079 EV kit are ACcoupled. The audio inputs can be DC- or AC-coupled by jumper selection. DC-coupling the audio input channels reduces component cost and minimizes circuit area.

Although not required, biasing and anti-alias filtering components are also provided between the audio input channels and the MAX4079 IC on the EV kit. Refer to the Applications Information for Audio DAC Interfacing section  in  the  MAX4079 data sheet for additional information on the biasing and anti-alias filtering components.

## Jumper Selection

## Video Output Channel Coupling

The MAX4079 EV kit features an option to choose between DC- or AC-coupling for the video output channels by installing or removing the shunts on jumpers JU1-JU4. Table 1 lists the selectable jumper options.

Table 1. Video Output Coupling JU1-JU4 Jumper Selection

| VIDEO OUTPUT CHANNEL COUPLING   | JUMPER   | VIDEO OUTPUT CHANNELS   | SHUNT POSITION   |
|---------------------------------|----------|-------------------------|------------------|
| DC                              | JU1      | CVBS_OUT1               | Installed        |
| DC                              | JU2      | CVBS_OUT2               | Installed        |
| DC                              | JU3      | Y_OUT                   | Installed        |
| DC                              | JU4      | C_OUT                   | Installed        |
| AC                              | JU1      | CVBS_OUT1               | Not Installed    |
| AC                              | JU2      | CVBS_OUT2               | Not Installed    |
| AC                              | JU3      | Y_OUT                   | Not Installed    |
| AC                              | JU4      | C_OUT                   | Not Installed    |

<!-- image -->

## MAX4079 Evaluation Kit

## Audio Input Channel Coupling

The MAX4079 EV kit features an option to choose between DC- or AC-coupling for the audio input channels by installing or removing the shunts on jumpers JU5-JU8. Table 2 lists the selectable jumper options.

Note: To configure the audio input channels for DCcoupling, remove resistors R8-R13. Refer to the audio section of the DC Electrical Characteristics table  in the  MAX4079 IC data sheet for the MAX4079 input voltage range.

Table 2. Audio Input Coupling JU5-JU8 Jumper Selection

| AUDIO INPUT CHANNEL COUPLING   | JUMPER   | AUDIO INPUT CHANNELS   | SHUNT POSITION   |
|--------------------------------|----------|------------------------|------------------|
| DC (Remove R8-R13)             | JU5      | RIN+                   | Installed        |
| DC (Remove R8-R13)             | JU6      | RIN-                   | Installed        |
| DC (Remove R8-R13)             | JU7      | LIN+                   | Installed        |
| DC (Remove R8-R13)             | JU8      | LIN-                   | Installed        |
| AC                             | JU5      | RIN+                   | Not Installed    |
| AC                             | JU6      | RIN-                   | Not Installed    |
| AC                             | JU7      | LIN+                   | Not Installed    |
| AC                             | JU8      | LIN-                   | Not Installed    |

## Single-Ended/Differential Audio Inputs

The MAX4079 EV kit features an option to select between single-ended or differential mode for the audio input  source.  Jumpers JU9 and JU10 select the input mode for the audio input source. Table 3 lists the selectable jumper options.

Table 3. Audio Input Mode JU9, JU10 Jumper Selection

| AUDIO INPUT MODE   | JUMPER   | AUDIO INPUT CHANNELS   | SHUNT POSITION   |
|--------------------|----------|------------------------|------------------|
| Single-Ended*      | JU9      | RIN+                   | Installed        |
| Single-Ended*      | JU10     | LIN+                   | Installed        |
| Single-Ended*      | JU5-JU8  | DC-coupled             | Not installed    |
| Differential       | JU9      | RIN+, RIN-             | Not installed    |
| Differential       | JU10     | LIN+, LIN-             | Not installed    |

*When using the EV kit in single-ended mode, use audio input LIN+ for the left channel and use audio input RIN+ for the right channel. Remove shunts from jumpers JU5-JU8.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4079 Evaluation Kit

Figure 1. MAX4079 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4079 Evaluation Kit

<!-- image -->

Figure 2. MAX4079 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4079 Evaluation Kit

Figure 3. MAX4079 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4079 Evaluation Kit

Figure 4. MAX4079 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1, 2, 6, 7

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 7