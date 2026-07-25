<!-- lastmod 2022-08-03 -->
## General Description

The MAX9515 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB) that evaluates the MAX9515 video filter amplifier IC. The MAX9515 features intelligent power management by disabling the filter and output amplifier in the absence of a video input signal and/or an output video load.

The MAX9515 features an internal reconstruction filter with  a  ±1dB passband flatness at 9MHz and 50dB of attenuation at 27MHz. The MAX9515 provides an internal fixed gain of 2V/V, accepts a full-scale video input signal of 1VP-P (nominal) and provides an output fullscale video signal of 2VP-P (nominal).

The MAX9515 EV kit video input and output are DCcoupled. The EV kit video input has 75 Ω termination to ground and the output has 75 Ω back termination. The EV kit operates from a single 2.7V to 3.6V DC power supply.

## Component Supplier

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| TDK Corp.  | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9515 when contacting this component supplier.

UCSP is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

Features

- ♦ Single 2.7V to 3.6V Supply Operation
- ♦ DC-Coupled Input/Output
- ♦ ±1dB Passband at 9MHz Reconstruction Filter with 50dB Attenuation at 27MHz
- ♦ Internal Preset 2V/V Gain
- ♦ Small 4-Bump UCSP™ Package
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9515EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------|
| C1            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M                   |
| C2            |     1 | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K                   |
| GND           |     2 | PC mini black test points                                                         |
| INPUT, OUTPUT |     2 | 75 Ω BNC PCB-mount jack connectors                                                |
| R1, R2        |     2 | 75 Ω ±1% resistors (0603)                                                         |
| TP1, TP2      |     2 | PC mini red test points                                                           |
| U1            |     1 | Video filter amplifier (4-bump UCSP, 1mm x 1mm) Maxim MAX9515ABS+ (Top Mark: AFN) |
| -             |     1 | PCB: MAX9515 Evaluation Kit+                                                      |

## MAX9515 Evaluation Kit

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- 2.7V to 3.6V, 500mA DC power supply (VDD)
- Video signal generator
- Video measurement equipment (e.g., Tektronix VM700T)

## Procedures

The MAX9515 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect the power-supply ground to the GND pad on the EV kit.
- 2) Connect the power-supply positive terminal to the VDD pad on the EV kit.
- 3) Connect the video signal generator output to the INPUT BNC connector on the EV kit. The video signal must be approximately 0 to 1V. If the video signal is not between 0 and 1V, refer to the How to  Level  Shift  Video  Signals  for  DC-Coupled Video Amplifiers/Filters application note at www.maxim-ic.com/appnotes.cfm/an\_pk/4028.
- 4) Connect the OUTPUT BNC connector on the EV kit to the input of the video measurement equipment.
- 5) Set the video signal generator for the desired video input signal. This signal must contain sync information.
- 6) Turn on the power supply and set to 3.3V.
- 7) Turn on the video signal generator and enable its output.
- 8) Analyze the video output signal with the video measurement equipment.

## Detailed Description of Hardware

The MAX9515 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that evaluates the MAX9515 video filter amplifier IC. The MAX9515 features intelligent power management by disabling the filter and output amplifier in the absence of a video input signal at the EV kit's input and/or an output video load at  the  EV  kit's  OUTPUT BNC connector. The EV kit operates from a single 2.7V to 3.6V power supply that provides up to 500mA.

The MAX9515 IC has an internal fixed 2V/V gain and an internal  reconstruction filter  that  smoothes the steps and reduces the spikes on the video signal from the video digital-to-analog converter (DAC). The reconstruction  filter  has  a  ±1dB  (typ)  passband  flatness  to 9MHz and 50dB attenuation at 27MHz.

The MAX9515 EV kit accepts a full-scale video input signal of 1VP-P (nominal) at INPUT and provides an output full-scale video signal of 2VP-P (nominal) at the MAX9515 IC output. The EV kit input is terminated to ground by resistor R1 and the output is back terminated by resistor R2. The EV kit output expects to drive a DC-coupled load to ground. Test points TP1 and TP2 are provided for observing the IC input and output signals, respectively. The MAX9515 internal level shift circuit  positions  the  sync  tip  at  approximately  300mV  at the TP2 output.

## Automatic Shutdown

When an input video signal is present at INPUT and a load is connected at OUTPUT, the MAX9515 IC filter and amplifier turn on and remain on until the output load at OUTPUT is disconnected. The MAX9515 automatic shutdown reduces the EV kit supply current to &lt; 9µA supply current based on the input signal presence and output loading.

Note: If  a  video  signal  is  not  present  at  the  EV  kit OUTPUT BNC connector, verify that a valid signal is present at test point TP1 and a valid 75 Ω load to ground is connected at OUTPUT. The MAX9515 IC does not go into full operation mode unless both of the above conditions are satisfied. When connecting OUTPUT directly to an oscilloscope, verify that the oscilloscope input is terminated with a 75 Ω load to ground.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. MAX9515 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9515 Evaluation Kit

Figure 2. MAX9515 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9515 Evaluation Kit

<!-- image -->

Figure 3. MAX9515 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9515 Evaluation Kit

Figure 4. MAX9515 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600