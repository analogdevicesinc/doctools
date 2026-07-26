<!-- lastmod 2022-08-03 -->
## General Description

The MAX9701 evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX9701 filterless Class D amplifier to drive a stereo bridge-tied-load (BTL) speaker in portable audio applications. Designed to operate from a 2.5V to 5.5V DC power supply, the EV kit is capable of delivering 1W per channel into an 8 Ω load.

The EV kit accepts differential or single-ended input signals and provides an option to select between different switching frequency modes of operation.

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX9701EVKIT | 0°C to +70°C | 24 TQFN-EP*  |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                       |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------|
| C1-C4         |     4 | 1.0µF ±10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J105K Taiyo Yuden JMK107BJ105KA Murata GRM188R60J105K |
| C5            |     0 | Not installed, capacitor (0805)                                                                                   |
| C6            |     1 | 10µF ±10%, 6.3V ceramic capacitor (0805) Murata GRM21BR60J106K                                                    |
| C7, C8, C9    |     3 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K Taiyo Yuden EMK107BJ104KA Murata GRM188R71C104K  |
| C10-C23       |     0 | Not installed, capacitors (0603)                                                                                  |
| C24           |     1 | 100pF ±5%, 50V ceramic capacitor (0603) TDK C1608C0G1H101J Taiyo Yuden UMK107CH101JZ Murata GRM1885C1H101J        |
| L1-L5         |     5 | 100 Ω at 100MHz ferrite beads, 50m Ω DCR at 3A (0603) TDK MPZ1608S101A                                            |

<!-- image -->

## Features

- ♦ Spread-Spectrum Modulation Lowers Radiated RF Emissions
- ♦ 2.5V to 5.5V Single-Supply Operation
- ♦ 1W Stereo Output (8 Ω , VDD = 5V, THD+N = 1%)
- ♦ Low 0.05% THD+N
- ♦ High 70dB PSRR
- ♦ No LC Output Filter Required
- ♦ 85% Efficiency (RL = 8 Ω , POUT = 500mW)
- ♦ Fully Differential Inputs
- ♦ Integrated Click-and-Pop Suppression
- ♦ Low Quiescent Current (8.5mA)
- ♦ Low-Power Shutdown Mode (0.1µA)
- ♦ Short-Circuit and Thermal-Overload Protection

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| L6-L9         |     0 | Not installed, inductors Recommended TOKO D53LC series                                         |
| R1            |     1 | 49.9 Ω ±1% resistor (0603)                                                                     |
| R2-R5         |     0 | Not installed, resistors (0603)                                                                |
| T1, T2        |     0 | Not installed, common-mode chokes 50VDC, 1ADC 800 Ω at 100MHz Recommended TDK ACM4532-801-2P-X |
| JU1           |     1 | 5-pin header                                                                                   |
| JU2, JU3, JU4 |     3 | 3-pin headers                                                                                  |
| JU5, JU6      |     2 | 2-pin headers                                                                                  |
| None          |     6 | Shunts Digikey S9000-ND or equivalent                                                          |
| U1            |     1 | MAX9701ETG (24-pin TQFN, 4mm x 4mm x 0.8mm)                                                    |
| U2            |     0 | Not installed, MAX9700EBP-T (20-pin UCSP™)                                                     |

UCSP is a trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX9701 Evaluation Kit

## Procedures

The MAX9701 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that a shunt is installed across pins 1 and 2 of  jumper JU1 (internal oscillator set to spreadspectrum mode).
- 2) Verify that a shunt is installed across pins 1 and 2 of jumper JU2 (EV kit ON).
- 3) Verify that a shunt is installed across pins 2 and 3 of  jumper JU3 and pins 1 and 2 of jumper JU4 (gain = 12dB).
- 4) Verify that no shunt is installed across jumpers JU5 and JU6 (differential input mode).
- 5) Connect the 8 Ω speakers across the OUTL+, OUTL- and OUTR+, OUTR- pads.
- 6) Ensure that the stereo audio source is turned off.
- 7) Connect the disabled audio source across the INL-, INL+ and INR-, INR+ pads.
- 8) Ensure that the DC power supply is off.
- 9) Connect the positive terminal of the power supply to the VDD pad and the power-supply ground terminal to the GND pad.
- 10) Turn on the DC power supply.
- 11) Enable the stereo audio source.

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| TOKO        | 847-297-0070 | 847-699-1194 | www.tokoam.com        |
| Vishay      | 619-336-0860 | 619-474-8920 | www.vishay.com        |

Note: Indicate that you are using the MAX9701 EV kit when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- One pair of 8 Ω speakers
- One 2.5V to 5.5V, 1A power supply
- One stereo audio source

## Detailed Description

The MAX9701 EV kit features the MAX9701 filterless Class D amplifier IC, designed to drive a BTL stereo speaker in portable audio applications. The EV kit operates from a DC power supply that is capable of providing 2.5V to 5.5V and 1A of current. The EV kit accepts differential or single-ended audio inputs. The audio input sources are amplified to drive 1W into each 8 Ω speaker.

The EV kit provides three sets of differential outputs. The device outputs (OUT\_+/-) can be connected directly to a speaker load without any filtering. However, a filter can be added to ease evaluation. The filtered outputs (TOUT\_+/-) require installation of filtering components T1/T2 and C10-C13. When an LCR filter is required, ensure T1/T2 and C10-C13 are not installed; short T1-1 to T1-4, T1-2 to T1-3, T2-1 to T2-4, and T2-2 to T2-3 (Figure 1). The LCR filtered  outputs (FOUT\_+/-) require installation of filtering components L6-L9, C14-C23, and R2-R5. See Table 1 for the suggested filter component values for an 8 Ω load and a 30kHz cutoff frequency. All recommended filtering components for an 8 Ω load are included with the MAX9701 EV kit.

Figure 1. Common-Mode Choke

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. Suggested Filtering Components for an 8 Ω load and a 30kHz Cutoff

| COMPONENT          | VALUE   |
|--------------------|---------|
| L6-L9              | 15µH    |
| C14, C18, C19, C23 | 0.033µF |
| C16, C21           | 0.15µF  |
| C15, C17, C20, C22 | 0.068µF |
| R2-R5              | 22 Ω    |

## Jumper Selection

## Operating Modes

Jumper JU1 provides an option to select the switching frequency of the MAX9701. See Table 2 for shunt positions.

## Table 2. JU1 Jumper Selection

| SHUNT POSITION   | EV KIT FUNCTION                                                            |
|------------------|----------------------------------------------------------------------------|
| 1-2 (V DD )      | Spread-spectrum mode with f OSC = 1200kHz ±60kHz                           |
| 1-3 (FLOAT)      | Fixed-frequency mode with f OSC = 1400kHz                                  |
| 1-4 (Clocked)    | Fixed-frequency mode with f OSC = external, TTL-compatible clock frequency |
| 1-5 (GND)        | Fixed-frequency mode with f OSC = 1100kHz                                  |

## Shutdown Mode ( SHDN )

Jumper JU2 controls the shutdown pin ( SHDN )  of  the MAX9701. See Table 3 for shunt positions.

Table 3. JU2 Jumper Selection

| SHUNT POSITION                                         | EV KIT FUNCTION                                             |
|--------------------------------------------------------|-------------------------------------------------------------|
| 1-2 ( SHDN = high)                                     | EV kit enabled                                              |
| 2-3 ( SHDN = low)                                      | Shutdown mode                                               |
| None. External controller connected to SHDN pad (TTL). | SHDN driven by external controller. Shutdown is active low. |

<!-- image -->

## MAX9701 Evaluation Kit

## Gain Settings

Jumpers JU3 and JU4 provide an option to select the output voltage gain. See Table 4 for JU3 and JU4 shunt positions.

## Table 4. JU3 (GAIN2) and JU4 (GAIN1) Jumper Selection

| GAIN2    | GAIN1    | GAIN (dB)    |
|----------|----------|--------------|
| Pins 2-3 | Pins 2-3 | 18           |
| Pins 2-3 | Pins 1-2 | 12 (default) |
| Pins 1-2 | Pins 2-3 | 6            |
| Pins 1-2 | Pins 1-2 | 0            |

## Input Mode

Jumpers JU5 and JU6 provide an option to select between a differential or single-ended input mode for the EV kit. See Table 5 for shunt positions.

## Table 5. JU5/JU6 Jumper Selection

| SHUNT POSITION                           | EV KIT INPUT MODE       |
|------------------------------------------|-------------------------|
| None (default)                           | Differential input mode |
| Installed (IN_- pads AC- coupled to GND) | Single-ended input mode |

## 2.1 System Configuration

The MAX9701 and the MAX9700 can be configured as a 2.1 system (Figure 2). Stereo device U1 is the master amplifier;  its  oscillator  output,  SYNC\_OUT,  drives  the SYNC input of the mono slave device (U2), synchronizing the switching frequencies of the two devices. Synchronizing the MAX9701 with the MAX9700 ensures that  no  beat  frequencies within the audio spectrum occur on the power-supply rails. This 2.1 system configuration works when the master device is in either FFM or SSM mode.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9701 Evaluation Kit

Figure 2. 2.1 System Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9701 Evaluation Kit

<!-- image -->

Figure 3. MAX9701 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9701 Evaluation Kit

Figure 4. Simplified MAX9701 EV Kit Schematic. External components included in Figure 4 are necessary for device operation.

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 5. MAX9701 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 7. MAX9701 EV Kit PC Board Layout-GND/PGND Layer 2

<!-- image -->

## MAX9701 Evaluation Kit

Figure 6. MAX9701 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 8. MAX9701 EV Kit PC Board Layout-PVDD/GND Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9701 Evaluation Kit

Figure 9. MAX9701 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 10. MAX9701 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8