<!-- lastmod 2022-08-05 -->
## General Description

The MAX9759 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that uses the MAX9759 to drive a mono bridge-tied-load (BTL) speaker in portable audio applications. Designed to operate from a 3.0V to 5.5V DC power supply, the EV kit  is  capable  of  delivering  3.2W  of  continuous  power into a 4 Ω load.

The MAX9759 EV kit accepts differential or singleended input signals, provides an option to select between different switching frequency modes of operation,  and  allows  for  external  clock  synchronization  of multiple, Maxim Class D amplifiers.

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX9759EVKIT | 0 ° C to +70 ° C | 16 TQFN-EP*  |

*EP = Exposed Paddle.

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1, C2        |     2 | 1µF ± 10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K   |
| C3, C4, C5    |     3 | 0.1µF ± 10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K |
| C6            |     1 | 1000pF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H102K |
| C7            |     1 | 100pF ± 5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H101J   |
| C8, C9        |     0 | Not installed, capacitors (0603)                                  |
| C10, C11, C14 |     0 | Not installed, capacitors (0603)                                  |
| C12, C13      |     0 | Not installed, capacitors (0603)                                  |
| C15           |     1 | 10µF ± 20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M  |
| C16, C17      |     2 | 100pF ±5%, 50V C0G ceramic capacitors (0402) TDK C1005C0G1H101J   |
| JU1-JU4       |     4 | 3-pin headers                                                     |

<!-- image -->

## Features

- ♦ 3.2W Continuous Power into 4 Ω Load
- ♦ Filterless Amplifier Passes FCC Radiated Emissions Standards with 7.6cm of Cable
- ♦ 92% Efficiency
- ♦ High PSRR (81dB at 1kHz)
- ♦ Low 0.02% THD+N
- ♦ External Clock Synchronization for Multiple, Cascaded Maxim Class D Amplifiers
- ♦ Logic-Selectable Gain (6dB, 12dB, 18dB, 24dB)
- ♦ 3.0V to 5.5V Single-Supply Operation
- ♦ Integrated Click-and-Pop Suppression
- ♦ Low-Power Shutdown Mode (0.1µA)
- ♦ Mute Function
- ♦ Short-Circuit and Thermal-Overload Protection
- ♦ Fully Assembled and Tested Surface-Mount Board

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| JU5           |     1 | 2-pin header                                                                                   |
| JU6           |     1 | 5-pin header                                                                                   |
| L1, L2        |     0 | Not installed, inductors TOKO D53LC series                                                     |
| L3, L4        |     2 | 100 Ω ±25%, 1.7A ferrite beads (0603) Taiyo Yuden BKP1608HS101                                 |
| L5            |     1 | Ferrite bead, 100 Ω at 100MHz, 50m Ω DCR, 3A (0603) TDK MPZ1608S101A                           |
| R1            |     1 | 49.9 Ω ± 1% resistor (0603)                                                                    |
| R2, R3        |     0 | Not installed, resistors (0603)                                                                |
| T1            |     0 | Not installed, common-mode choke 50VDC, 1ADC, 800 Ω at 100MHz recommended TDK ACM4532-801-2P-X |
| U1            |     1 | MAX9759ETE (16-pin TQFN, 4mm x 4mm x 0.8mm)                                                    |
| None          |     6 | Shunts Digikey S9000-ND or equivalent                                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX9759 Evaluation Kit

## Procedure

The MAX9759 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed across pins 1 and 2 of jumper JU3 (EV kit ON).
- 2) Ensure a shunt is installed across pins 2 and 3 of jumper JU1 (G1 = 0).
- 3) Ensure a shunt is installed across pins 1 and 2 of jumper JU2 (G2 = 1).
- 4) Ensure a shunt is installed across pins 1 and 2 of jumper JU4 (EV kit unmuted).
- 5) Verify that a shunt is installed across pins 1 and 2 of jumper JU6 (internal oscillator set to spread-spectrum mode).
- 6) Verify that no shunt is installed across jumper JU5 (differential input mode).
- 7) Connect a 3 Ω ,  4 Ω ,  or  8 Ω speaker between the OUT+ and OUT- test points.
- 8) Ensure that the DC power supply is disabled.
- 9) Connect the positive terminal of the power supply to the VDD pad and the power-supply ground terminal to the GND pad.

Figure 1. Common-Mode Choke, T1

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX9759 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- One 3 Ω , 4 Ω , or 8 Ω speaker
- One 3.0V to 5.5V, 2A power supply
- One audio source
- 10) Ensure that the audio source is disabled.
- 11) Connect the disabled audio source across the IN+ and IN- pads.
- 12) Turn on the power supply.
- 13) Enable the audio source.

## Detailed Description

The MAX9759 EV kit features the MAX9759 filterless, Class D audio amplifier IC, designed to drive a BTL mono speaker in portable audio applications. The EV kit operates from a DC power supply that is capable of providing 4.5V to 5.5V and 2A of current. The EV kit accepts a differential or a single-ended audio input. The audio input source is amplified to drive 3.2W of continuous power into a 4 Ω speaker.

The MAX9759 EV kit provides three sets of differential outputs. The device outputs (OUT+/-) can be connected directly to a speaker load without any filtering. However, a filter can be added to ease evaluation. The filtered outputs (OUTPUT+/-) require installation of filtering components T1, C8, and C9. When an LCR filter is required, ensure C8, C9, and T1 are not installed; short T1-1 to T1-4 and short T1-2 to T1-3 (Figure 1). The LCR filtered outputs (FOUTPUT+/-) require installation of filtering components L1, L2, C10-C14, R2, and R3. See Table 1 for suggested filtering components for an 8 Ω load and a 30kHz cutoff frequency. All recommended filtering  components for an 8 Ω load are included with the MAX9759 EV kit. For recommended 4 Ω or 3 Ω filtering components, contact your local Maxim sales representative.

## Table 1. Suggested Filtering Components for an 8 Ω Load and 30kHz Cutoff Frequency

| COMPONENT   | VALUE   |
|-------------|---------|
| L1, L2      | 15µH    |
| C10, C11    | 0.033µF |
| C14         | 0.15µF  |
| C12, C13    | 0.068µF |
| R2, R3      | 22 Ω    |

<!-- image -->

## Jumper Selection

## Gain Control (G1 and G2)

Jumpers JU1 and JU2 control the gain-control pins (G1 and G2) of the MAX9759 IC. See Table 2 for shunt positions.

## Table 2. JU1 and JU2 Jumper Selection

| G2 SHUNT POSITION   | G1 SHUNT POSTION   | EV KIT GAIN (dB)   |
|---------------------|--------------------|--------------------|
| 2-3                 | 2-3                | +24                |
| 2-3                 | 1-2                | +18                |
| 1-2                 | 2-3                | +12 (default)      |
| 1-2                 | 1-2                | +6                 |

## Shutdown Mode ( SHDN )

Jumper JU3 controls the shutdown pin ( SHDN )  of  the MAX9759 IC. See Table 3 for shunt positions.

## Table 3. JU3 Jumper Selection

| SHUNT POSITION                                         | EV KIT FUNCTION                                             |
|--------------------------------------------------------|-------------------------------------------------------------|
| 1-2 (default)                                          | EV kit enabled.                                             |
| 2-3                                                    | Shutdown mode.                                              |
| None. External controller connected to SHDN pad (TTL). | SHDN driven by external controller. Shutdown is active low. |

## Mute Function ( MUTE )

Jumper JU4 controls the mute pin ( MUTE )  of  the MAX9759 IC. See Table 4 for shunt positions.

## Table 4. JU4 Jumper Selection

| SHUNT POSITION                                         | EV KIT FUNCTION                                         |
|--------------------------------------------------------|---------------------------------------------------------|
| 1-2 (default)                                          | EV kit unmuted.                                         |
| 2-3                                                    | Mute.                                                   |
| None. External controller connected to MUTE pad (TTL). | MUTE driven by external controller. Mute is active low. |

<!-- image -->

## MAX9759 Evaluation Kit

## Input Mode

Jumper JU5 provides an option to select between a differential or single-ended input mode for the EV kit. See Table 5 for shunt positions.

Table 5. JU5 Jumper Selection

| SHUNT POSITION                         | EV KIT INPUT MODE       |
|----------------------------------------|-------------------------|
| None (default)                         | Differential input mode |
| Installed (IN- pad AC- coupled to GND) | Single-ended input mode |

## Switching Frequency Mode (SYNC)

Jumper JU6 provides an option to select the switching frequency of the MAX9759 IC. See Table 6 for the various shunt positions.

Table 6. JU6 Jumper Selection

| SHUNT POSITION   | MAX9759 SYNC PIN   | INTERNAL OSCILLATOR FREQUENCY                                            |
|------------------|--------------------|--------------------------------------------------------------------------|
| 2-1              | SYNC pin = V DD    | Spread-Spectrum Mode. Set at a switching frequency f S = 1.2MHz ± 70kHz. |
| 2-5              | SYNC pin = FLOAT   | Fixed-Frequency Mode. Set at a switching frequency f S = 1.5MHz.         |
| 2-3              | SYNC pin = GND     | Fixed-Frequency Mode. Set at a switching frequency f S = 1.1MHz.         |
| 2-4              | SYNC pin = Clocked | Synchronized to an incoming TTL- compatible clock frequency.             |

## Stereo Configuration

Two MAX9759s can be configured as a stereo amplifier (Figure 2). Device U1 is the master amplifier; its oscillator  output,  SYNC\_OUT, drives the SYNC input of the slave device (U2), synchronizing the switching frequencies of the two devices. Synchronizing two MAX9759s ensures that no beat frequencies within the audio spectrum occur on the power-supply rails. This stereo configuration works when the master device is in either FFM or SSM mode. There is excellent THD+N performance and minimal crosstalk between devices due to the SYNC and SYNC\_OUT connection (Figures 3, 4).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9759 Evaluation Kit

Figure 2. Master-Slave Configuration

<!-- image -->

Multiple MAX9759s can be cascaded and frequencylocked in a similar fashion (Figure 2). Simply repeat the stereo configuration outlined above for multiple cascading amplifier applications.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 3. Total Harmonic Distortion Plus Noise vs. Output Voltage

<!-- image -->

Figure 4. Master-Slave Crosstalk

<!-- image -->

## MAX9759 Evaluation Kit

<!-- image -->

Figure 5. MAX9759 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates: MAX9759

## MAX9759 Evaluation Kit

<!-- image -->

Figure 6. MAX9759 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 8. MAX9759 EV Kit PC Board Layout-VDD Layer

Figure 7. MAX9759 EV Kit PC Board Layout-GND Layer

<!-- image -->

Figure 9. MAX9759 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600