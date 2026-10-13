<!-- lastmod 2022-08-05 -->
<!-- image -->

## General Description

The MAX9700B evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX9700B filterless class D amplifier to drive a mono bridge-tied-load (BTL) speaker in portable audio applications. Designed to operate from a 2.5V to 5.5V DC power supply, the EV kit is capable of delivering 1.2W into an 8 Ω load.

The EV kit accepts differential or single-ended input signals. The EV kit provides an option to select between different  switching  frequency modes of operation. The MAX9700B EV kit also evaluates the MAX9700A/ MAX9700C/MAX9700D and the MAX9712.

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX9700BEVKIT | 0°C to +70°C | 10 TDFN-EP*  |

* EP = Exposed paddle.

| DESIGNATION         |   QTY | DESCRIPTION                                                      |
|---------------------|-------|------------------------------------------------------------------|
| A1                  |     0 | Not installed, MAX9700BEUB (10-pin µMAX)                         |
| A2                  |     0 | Not installed, MAX9700BEBC-T (12-bump UCSP)                      |
| C1, C2              |     2 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K |
| C3                  |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M  |
| C4                  |     0 | Not installed, capacitor (0805)                                  |
| C5, C6              |     2 | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K   |
| C7, C8, C9, C11-C14 |     0 | Not installed, capacitors (0603)                                 |
| C10                 |     1 | 100pF ±5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H101J   |

## MAXIM

## Features

- ♦ Filterless Operation Passes FCC Radiated Emissions
- ♦ Evaluates the MAX9700A/B/C/D or MAX9712 (with IC Replacement)
- ♦ 2.5V to 5.5V Single-Supply Operation
- ♦ Up to 94% Efficiency
- ♦ Drives 1.2W into 8 Ω Speaker at 1% THD+N
- ♦ Differential or Single-Ended Inputs
- ♦ Selectable Switching Frequency
- ♦ 0.1µA Shutdown Current
- ♦ Small 10-Pin TDFN Package
- ♦ Also Available in 10-Pin µMAX and 12-Bump UCSP™ Packages
- ♦ Fully Assembled and Tested

UCSP is a trademark of Maxim Integrated Products, Inc.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| JU1           |     1 | 3-pin header                                                                                  |
| JU2           |     1 | 5-pin header                                                                                  |
| JU3           |     1 | 2-pin header                                                                                  |
| L1, L2        |     0 | Not installed, inductors recommended TOKO D53LC series                                        |
| L3, L4, L5    |     3 | Ferrite beads 100 Ω at 100MHz, 50m Ω DCR, 3A (0603) TDK MPZ1608S101A                          |
| R1            |     1 | 49.9 Ω ±1% resistor (0603)                                                                    |
| R2, R3        |     0 | Not installed, resistors (0603)                                                               |
| T1            |     0 | Not installed, common-mode choke 50VDC, 1ADC 800 Ω at 100MHz recommended TDK ACM4532-801-2P-X |
| U1            |     1 | MAX9700BETB (10-pin TDFN, 3mm x 3mm x 0.8mm))                                                 |
| None          |     3 | Shunts (JU1, JU2, JU3)                                                                        |
| None          |     1 | MAX9700B PC board                                                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX9700B Evaluation Kit

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| TOKO       | 847-297-0070 | 847-699-1194 | www.tokoam.com        |

Note: Please indicate that you are using the MAX9700B when contacting these component suppliers.

## Quick Start

The MAX9700B EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment:

- 2.5V to 5.5V, 1A power supply
- Audio source (i.e. CD player, cassette player)
- 8 Ω speaker

short T1-1 to T1-4, and short T1-2 to T1-3. See Table 1 for the suggested filtering component values for an 8 Ω load and a 30kHz cutoff frequency.

## Table 1. Suggested Filtering Components for an 8 Ω Load and 30kHz Cut-Off

| COMPONENT   | VALUE   |
|-------------|---------|
| L1, L2      | 15µH    |
| C7, C8      | 0.033µF |
| C9          | 0.15µF  |
| C13, C14    | 0.068µF |
| R2, R3      | 22 Ω    |

The MAX9700B is designed to pass FCC Class-B RF emissions without additional filtering when using 10cm of cable to connect the speaker. In applications where more margin and/or cable length are required, output capacitors C11, C12 and common-mode choke T1 can be added to reduce radiated emission. Connect the speaker to  output +/- test points. Table 2 lists the cable length verses the required output components.

## Table 2. Cable Length vs. Suggested Output Components

| CABLE LENGTH X (CM)   | OUTPUT CAPACITOR C11 AND C12   | COMMON- MODE CHOKE T1   | LCR FILTER L1, L2, C7, C8, C9, C13, C14, R2, R3   |
|-----------------------|--------------------------------|-------------------------|---------------------------------------------------|
| X < 10                | -                              | -                       | -                                                 |
| 10 < X < 15           | Required (100pF)               | -                       | -                                                 |
| 15 < X < 30           | Required (100pF)               | Required                | -                                                 |
| X > 30                | -                              | -                       | Required*                                         |

## Procedures:

- 1) Install  a  shunt  across  pins  1  and  2  of  jumper  JU1 (EV kit ON).
- 2) Install  a  shunt  across  pins  1  and  2  of  jumper  JU2 (internal oscillator set to spread-spectrum mode).
- 3) Verify that no shunt is across jumper JU3 (differential input mode).
- 4) Connect the 8 Ω speaker across the OUT+ and OUT- test points.
- 5) Connect the positive terminal of the power supply to the VDD pad and the power-supply ground terminal to the GND pad.
- 6) Connect the audio source across the INPUT+ and INPUT- pads.
- 7) Turn on the power supply.
- 8) Turn on the audio source.

## Detailed Description

The MAX9700B EV kit features the MAX9700B filterless class D amplifier IC, designed to drive a BTL mono speaker in portable audio applications. The EV kit operates from a DC power supply that can provide 2.5V to 5.5V and 1A of current. The EV kit accepts a differential or single-ended audio input. The audio input source is amplified to drive 1.2W into an 8 Ω speaker.

The EV kit provides three sets of differential outputs. The device outputs (OUT+/-) can be connected directly to a speaker load without any filtering. However, a filter can be added to ease evaluation. The filtered outputs (FOUTPUT+/-) require installation of filtering components L1, L2, C7, C8, C9, C13, C14, R2, and R3. When an LCR filter is required, remove C11, C12, and T1,

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9700B Evaluation Kit

## Jumper Selection

## Shutdown Mode (SHDN)

Jumper JU1 controls the shutdown pin ( SHDN )  of  the MAX9700B IC. See Table 3 for shunt positions.

## Table 3. JU1 Jumper Selection

| SHUNT POSITION                                         | EV KIT FUNCTION                                             |
|--------------------------------------------------------|-------------------------------------------------------------|
| 1-2 ( SHDN = high)                                     | EV kit enabled                                              |
| 2-3 ( SHDN = low)                                      | Shutdown mode                                               |
| None. External controller connected to SHDN pad (TTL). | SHDN driven by external controller. Shutdown is active low. |

## Switching Frequency Mode (Sync)

Jumper JU2 provides an option to select the switching frequency of the MAX9700B IC. See Table 4 for the various shunt positions.

Table 4. JU2 Jumper Selection

| SHUNT POSITION   | MAX9700B SYNC PIN                                                                             | INTERNAL OSCILLATOR FREQUENCY                                              |
|------------------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| 1-2 (default)    | SYNC pin = high                                                                               | Spread-Spectrum Mode. Set at a switching frequency f SW = 1.22MHz ± 120kHz |
| 1-3              | SYNC pin = floating                                                                           | Set at f NOM = 1.45MHz                                                     |
| 1-4              | SYNC pin = external TTL-compatible clock input. External clock input connected to SYNC (TTL). | Synchronized to the incoming TTL-compatible clock frequency                |
| 1-5              | SYNC = low                                                                                    | Set at the nominal                                                         |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Input Mode

Jumper JU3 provides an option to select between a differential  or  single-ended  input  mode  for  the  EV  kit. See Table 5 for shunt positions.

## Table 5. JU3 Jumper Selection

| SHUNT POSITION                       | EV KIT INPUT MODE       |
|--------------------------------------|-------------------------|
| None (default)                       | Differential Input Mode |
| Installed (IN- pad connected to GND) | Single-Ended Input Mode |

## Evaluating the MAX9700A/MAX9700C/MAX9700D and the MAX9712

The MAX9700B EV kit can evaluate the MAX9700A, MAX9700C, MAX9700D, and the MAX9712. To evaluate a different IC, replace U1 with the desired part. Refer to the MAX9700 or the MAX9712 data sheets for additional information.

## MAX9700B Evaluation Kit

<!-- image -->

Figure 1. MAX9700B EV Kit Schematic

Figure 2. MAX9700B EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX9700B EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9700B Evaluation Kit

Figure 4. MAX9700B EV Kit PC Board Layout-GND Layer 2

<!-- image -->

<!-- image -->

Figure 6. MAX9700B EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 5. MAX9700B EV Kit PC Board Layout-GND Layer 3

Figure 7. MAX9700B EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5