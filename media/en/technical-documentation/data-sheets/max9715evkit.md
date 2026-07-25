<!-- lastmod 2022-08-03 -->
## General Description

The MAX9715 evaluation kit (EV kit) is a fully assembled and tested PC board that uses the MAX9715 filterless Class D amplifier to drive a pair of stereo bridge-tiedload (BTL) speakers in portable audio applications. Designed to operate from a 5V DC power supply, the EV kit  is  capable of delivering 2.3W per channel at 1% THD+N into a pair of 4 Ω speaker loads. Three different output configurations are available for ease of evaluation.

The MAX9715 EV kit accepts single-ended input signals,  and provides fully differential outputs. The EV kit also provides an option to select between 9dB or 10.5dB gains.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                                                     |
|----------------|-------|-------------------------------------------------------------------------------------------------|
| C1, C4, C6     |     3 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K                                |
| C2             |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H102K                                |
| C3, C8, C9     |     3 | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K                                  |
| C5, C7         |     2 | 100µF ±20%, 6.3V X5R ceramic capacitors (1210) TDK C3225X5R0J107M                               |
| C10-C23        |     0 | Not installed, capacitors (0603)                                                                |
| JU1, JU2       |     2 | 3-pin headers                                                                                   |
| L1, L2, L3     |     3 | 100 Ω at 100MHz, 50m Ω DCR, 3A ferrite beads (0603) TDK MPZ1608S101A                            |
| L4, L5, L6, L7 |     0 | Not installed, inductors Toko D53LC series recommended                                          |
| R1-R4          |     0 | Not installed, resistors (0603)                                                                 |
| T1, T2         |     0 | Not installed, common-mode chokes 50VDC, 1ADC, 800 Ω at 100MHz TDK ACM4532-801-2P-X recommended |
| U1             |     1 | MAX9715ETE (16-pin TQFN-EP 5mm x 5mm)                                                           |
| -              |     2 | Shunts (see Tables 3 and 4)                                                                     |
| -              |     1 | MAX9715 EV kit PC board                                                                         |

## Procedure

- 1) Install  a  shunt  across  pins  1  and  2  of  jumper  JU1 (IC enabled).
- 2) Install  a  shunt  across  pins  1  and  2  of  jumper  JU2 (gain = 9dB).
- 3) Connect the first 4 Ω speaker across the OUTL+ and OUTL- test points.
- 4) Connect the second 4 Ω speaker across the OUTR+ and OUTR- test points.
- 5) Connect the positive terminal of the power supply to the VDD pad and the power-supply ground terminal to the GND pad.
- 6) Connect the positive terminal of the audio source to the IN\_L and IN\_R pads.
- 7) Connect the negative terminal of the audio source to the GND pad.
- 8) Turn on the power supply.
- 9) Turn on the audio source.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

- ♦ Filterless Operation
- ♦ Passes FCC Radiated Emissions Specifications (with Short Cable Lengths)
- ♦ 5V Single-Supply Operation
- ♦ Fully Differential Outputs
- ♦ Drives 2 x 2.3W into 4 Ω Speakers at 1% THD+N
- ♦ Selectable Gain
- ♦ 0.1µA Shutdown Current
- ♦ Small 16-Pin TQFN Package
- ♦ Also Available in 16-Pin TSSOP
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX9715EVKIT | 0°C to +70°C | 16-TQFN-EP*  |

## Quick Start

The MAX9715 EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Do not turn on the power supply until all connec-

tions are completed.

## Recommended Equipment

- 5V, 3A power supply
- Audio source (i.e., CD player, cassette player)
- Two 4 Ω speakers

1

## MAX9715 Evaluation Kit

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Toko       | 847-297-0070 | 847-699-1194 | www.tokoam.com        |

Note: Indicate that you are using the MAX9715 when contacting these component suppliers.

## Detailed Description

The MAX9715 EV kit features the MAX9715 filterless Class D amplifier IC, designed to drive a pair of stereo speakers in BTL configuration. The EV kit operates from a DC power supply that can provide 5V and 3A of current. The EV kit accepts single-ended audio inputs and provides fully differential outputs. The audio input sources are amplified to drive 2.3W per channel into a pair of 4 Ω speakers.

The MAX9715 outputs (OUTL+/- and OUTR+/-) can be connected directly to a pair of speaker loads without any filtering. Use the OUTL+/- and OUTR+/- test points to  connect the speakers directly to the MAX9715 outputs. This configuration is for a typical audio application.

The MAX9715 EV kit provides two sets of filtered outputs per channel. The EV kit features PC board pads for  filters  that  can  be  added  to  ease  evaluation  and reduce EMI. Audio analyzers typically cannot accept pulse-width-modulated (PWM) signals at their inputs. The PWM output signal can be lowpass filtered by installing  components: L4-L7, C14-C23, and R1-R4. The filtered outputs should then be monitored at the FOUTL+/- and FOUTR+/- pads. Connect the speakers to  FOUTL+/- and FOUTR+/- when long cables are used. See Table 1 below for the suggested filtering component values to evaluate a 4 Ω load with a 30kHz cutoff frequency.

Table 1. Suggested Filtering Components for a 4 Ω Load with a 30kHz Cutoff Frequency

| COMPONENT   | VALUE   |
|-------------|---------|
| L4-L7       | 15µH    |
| C14-C17     | 0.033µF |
| C18, C19    | 0.15µF  |
| C20-C23     | 0.068µF |
| R1-R4       | 22 Ω    |

The MAX9715 is designed to pass FCC Class B radiated emissions without additional filtering. In applications where medium length cables are required, or the circuit is  near EMI-sensitive devices, output capacitors C10-C13, and common-mode chokes T1 and T2 can be added to reduce radiated emission. The EMI-filtered outputs should then be monitored at the TOUTL+/- and TOUTR+/- test points. Table 2 lists the recommended EMI filter components. Refer to the Applications Information, Output Filter section in the MAX9715 IC data sheet for additional information.

Table 2. Recommended EMI Filter Components

| COMPONENT   | VALUE                                                                |
|-------------|----------------------------------------------------------------------|
| C10-C13     | 100pF                                                                |
| T1, T2      | Common-Mode Chokes 50VDC, 1ADC, 800 Ω at 100MHz TDK ACM4532-801-2P-X |

## Jumper Selection

## Shutdown Mode ( SHDN )

Jumper JU1 controls the shutdown pin ( SHDN )  of  the MAX9715 IC. The shutdown pin can also be controlled by an external logic controller connected to the EV kit SHDN pad. Remove the shunt from jumper JU1 before connecting an external controller to the SHDN pad. See Table 3 for shunt positions.

## Gain Selection

Jumper JU2 provides an option to select the gain of the  MAX9715 IC. The gain of the MAX9715 is selectable between 9dB and 10.5dB. See Table 4 for shunt positions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 3. JU1 Jumper Selection ( SHDN )

| SHUNT POSITION                                        | MAX9715 SHDN PIN CONNECTED TO   | EV KIT FUNCTION                                                   |
|-------------------------------------------------------|---------------------------------|-------------------------------------------------------------------|
| 1-2 (default)                                         | V DD                            | EV kit enabled                                                    |
| 2-3                                                   | GND                             | Shutdown mode                                                     |
| None. External logic controller connected to SHDN pad | External logic controller       | SHDN driven by external logic controller. Shutdown is active low. |

Table 4. JU2 Jumper Selection (GAIN)

| SHUNT POSITION   | MAX9715 GAIN PIN CONNECTED TO   |   GAIN (dB) |
|------------------|---------------------------------|-------------|
| 1-2              | V DD                            |           9 |
| 2-3 (default)    | GND                             |        10.5 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9715 Evaluation Kit

Figure 1. MAX9715 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX9715 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX9715 EV Kit PC Board Layout-GND Layer 2

<!-- image -->

## MAX9715 Evaluation Kit

Figure 3. MAX9715 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX9715 EV Kit PC Board Layout-VDD Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9715 Evaluation Kit

Figure 6. MAX9715 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 7. MAX9715 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6