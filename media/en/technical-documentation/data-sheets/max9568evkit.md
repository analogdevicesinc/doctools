<!-- lastmod 2022-08-03 -->
## General Description

The MAX9568 evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  PCB  that  contains  a MAX9568 IC. The MAX9568 is a video sync separator that  extracts  sync timing information from standarddefinition (SDTV), extended-definition (EDTV), and highdefinition (HDTV) component video signals.

The MAX9568 is a stand-alone device that requires no external components for timing or biasing. The highimpedance video input prevents loading of the input signal and eliminates the need for buffering. The MAX9568 operates from a 2.7V to 5.5V DC power supply.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| CVID_IN       |     1 | 50 Ω BNC PCB-mount jack connector                                   |
| CVIDIN        |     0 | Not installed, test point                                           |
| C1, C3        |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C2            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106M  |
| C4            |     0 | Not installed, capacitor (0603)                                     |
| R1            |     1 | 75 Ω ±1% resistor (0603)                                            |
| R2            |     0 | Not installed, resistor-short (PC trace) (0603)                     |
| U1            |     1 | Video sync separator (16 QSOP) Maxim MAX9568EEE+                    |
| -             |     1 | PCB: MAX9568 Evaluation Kit+                                        |

<!-- image -->

<!-- image -->

## Features

- ♦ Single 2.7V to 5.5V DC Power-Supply Operation
- ♦ Stand-Alone Operation (No Timing Components Required)
- ♦ Covers All Major Video Standards: SDTV, EDTV, and HDTV
- ♦ Loss of Video Signal Detection
- ♦ Coast and Clamp Pulse Output
- ♦ High-Impedance Video Input
- ♦ Surface-Mount Components
- ♦ Evaluates the MAX9568 in a 16-Pin QSOP Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9568EVKIT+ | EV Kit |

## MAX9568 Evaluation Kit

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX9568 when contacting this component supplier.

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX9568 EV kit
- 3.3V, 150mA DC power supply (VCC)
- Video signal generator (e.g., Tektronix TG-2000 or similar)

## Procedure

The MAX9568 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Set the power-supply output to 3.3V and turn off the power supply.
- 2) Connect the power-supply ground to the GND pad on the EV kit.
- 3) Connect the power-supply output to the VCC pad on the EV kit.
- 4) Connect the output of the video signal generator to the CVID\_IN BNC connector on the EV kit.
- 5) Set the video signal generator for the desired video input signal.
- 6) Turn on the power supply and enable the video signal generator.
- 7) To identify the video signal standard, use the silkscreen table on the EV kit, or see Table 1 and verify  the  logic  level  of  the  SDTV,  HDTV,  and  HL pads on the EV kit.

## Detailed Description of Hardware

The MAX9568 EV kit contains a MAX9568 IC. The MAX9568 is a video sync separator that extracts sync timing information from SDTV, EDTV, and HDTV component video signals. The MAX9568 is a stand-alone device that requires no external components for timing or biasing. The MAX9568 has a high-impedance input that eliminates the need for buffering.

The MAX9568 EV kit's input is terminated at 75 Ω by resistor R1 and AC-coupled by capacitor C3. The EV kit also provides PCB footprints R2 and C4 for a lowpass filter  at  the  video  input.  When a lowpass filter is required at the input, cut open the PCB trace between the R2 PCB pad and install the appropriate filtering components on the R2 and C4 PCB pads. Refer to the Chroma Filter section in the MAX9568 IC data sheet for additional information.

## Composite Sync Output ( CSYNCOUT )

The MAX9568 EV kit provides a composite sync output ( CSYNCOUT )  PCB pad to access the composite sync waveform of the video input signal. The composite sync waveform is the video input waveform with the active video removed. The CSYNCOUT outputs a logic-low whenever sync is detected.

## Vertical Sync Output ( VSYNCOUT )

The MAX9568 EV kit provides a vertical sync output ( VSYNCOUT )  PCB pad to access the vertical sync waveform of the video input signal. The vertical sync waveform defines the beginning of a new frame in the video input signal. The VSYNCOUT outputs a logic-low whenever a vertical sync pulse interval is detected.

## Horizontal Sync Output ( HSYNCOUT )

The MAX9568 EV kit provides a horizontal sync output ( HSYNCOUT )  PCB pad to access the horizontal sync waveform of the video input signal. The horizontal sync waveform defines the beginning of a new line in the video input signal. The HSYNCOUT outputs a logic-low whenever a horizontal sync pulse is detected.

## Television Standard Detection (SDTV, HDTV, HL)

The MAX9568 EV kit provides three PCB pads to indicate the standard of the component video signal at the input. They are the standard-definition television (SDTV), high-definition television (HDTV), and the number of horizontal lines (HL).

The SDTV PCB pad outputs a logic-high to indicate standard-definition television, while SDTV output low indicates extended-definition or high-definition television.

The HDTV PCB pad outputs a logic-high to indicate highdefinition television, while HDTV output low indicates standard-definition or extended-definition television.

The HL PCB pad outputs a logic-high to indicate 625i, 625p/576p, and 1080i standards, while HL output low indicates 525i, 525p/480p, and 720p standards (see Table 1).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. Video Standard Output Decoding

| TV STANDARD   | CLASSIFICATION   | MAX9568 EV KIT OUTPUT PADS   | MAX9568 EV KIT OUTPUT PADS   | MAX9568 EV KIT OUTPUT PADS   | MAX9568 EV KIT OUTPUT PADS   |
|---------------|------------------|------------------------------|------------------------------|------------------------------|------------------------------|
|               |                  | FR                           | SDTV                         | HDTV                         | HL                           |
| 525i          | SDTV             | High                         | High                         | Low                          | Low                          |
| 625i          | SDTV             | Low                          | High                         | Low                          | High                         |
| 525p/480p     | EDTV             | High                         | Low                          | Low                          | Low                          |
| 625p/576p     | EDTV             | Low                          | Low                          | Low                          | High                         |
| 720p          | HDTV             | High                         | Low                          | High                         | Low                          |
| 1080i/60      | HDTV             | High                         | Low                          | High                         | High                         |
| 1080i/50      | HDTV             | Low                          | Low                          | High                         | High                         |

## Frame Rate Output (FR)

The MAX9568 EV kit provides a frame rate output (FR) PCB pad to indicate the frame rate of the video input signal. The FR PCB pad outputs a logic-high when the frame rate is 60Hz, and a logic-low when the frame rate is 50Hz (see Table 1).

## Loss-of-Sync Output ( LOS )

The MAX9568 EV kit provides a loss-of-sync output ( LOS )  PCB pad to indicate the presence of a valid video input signal. The LOS PCB pad outputs a logiclow when there is no valid sync or video signal at the input, and a logic-high when a valid video sync pulse is detected.

## Clamp Pulse Output ( CLAMP )

The MAX9568 EV kit provides a clamp pulse output ( CLAMP )  PCB pad to output a black-level clamping signal. The CLAMP PCB pad outputs a logic-low when the clamp signal is present.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Coast ( COAST )

The MAX9568 EV kit provides a coast ( COAST )  PCB pad for the coast output signal. The COAST PCB pad outputs a logic-low during the vertical interval to control a phase-locked loop (PLL) oscillator to enable it to coast through the vertical interval.

Odd and Even Field Detection ( ODD /EVEN) The MAX9568 EV kit provides an odd and even field detection ( ODD /EVEN) PCB pad to indicate the odd or even field of an interlaced video signal. The ODD /EVEN PCB pad outputs a logic-high to indicate an even field, and a logic-low to indicate an odd field.

## MAX9568 Evaluation Kit

## MAX9568 Evaluation Kit

Figure 1. MAX9568 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2. MAX9568 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9568 Evaluation Kit

Figure 3. MAX9568 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9568 Evaluation Kit

Figure 4. MAX9568 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.