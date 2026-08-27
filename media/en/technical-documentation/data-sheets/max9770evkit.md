<!-- lastmod 2022-08-03 -->
## General Description

The MAX9770 evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX9770, a lowEMI, filterless  class  D,  bridge-tied-load  (BTL)  speaker amplifier with an 80mW stereo DirectDrive™ headphone amplifier. Designed to operate from a 2.5V to 5.5V power supply, the EV kit is capable of delivering 1.2W into an 8 Ω load with efficiency up to 85%.

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX9770EVKIT | 0°C to +70°C | 28 TQFN*     |

* Package code is T2855N-1.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ106MG or TDK C2012X5R0J106M   |
| C2, C4-C7     |     5 | 1µF ±10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A105K                                 |
| C3            |     1 | 0.047µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E473K                              |
| C8-C11        |     4 | 0.47µF ±10%, 10V X5R ceramic capacitors (0603) Taiyo Yuden LMK107BJ474KA or TDK C1608X5R1A474K |
| C12           |     1 | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E104J or TDK C1608X7R1E104K       |
| C13           |     1 | 100pF ±5%, 50V C0G ceramic capacitor (0402) Murata GRP1555C1H101J or Taiyo Yuden UMK105CG101JW |

<!-- image -->

## Features

- ♦ Filterless Operation Class D Amplifier Passes FCC Class B Radiated Emissions
- ♦ 2.5V to 5.5V Single-Supply Operation
- ♦ 0.1µA (typ) IC Shutdown Current
- ♦ Drives 1.2W into 8 Ω Speaker
- ♦ Drives 80mW into 16 Ω Headphone
- ♦ Low 0.015% THD+N
- ♦ Selectable Gain Options
- ♦ Selectable 3-Way Input Mixer/Multiplexer
- ♦ Selectable Switching Frequency
- ♦ Also Evaluates MAX9771
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Component List

| DESIGNATION                                     |   QTY | DESCRIPTION                               |
|-------------------------------------------------|-------|-------------------------------------------|
| C14, C15, C20                                   |     0 | Not installed, ceramic capacitors (0402)  |
| C16-C19, C21, C22                               |     0 | Not installed, ceramic capacitors (0603)  |
| L1, L2                                          |     0 | Not installed, power inductors            |
| J1                                              |     1 | 3.5mm surface-mount stereo headphone jack |
| JU1-JU6                                         |     6 | 3-pin headers                             |
| JU7                                             |     1 | 5-pin header                              |
| JU8                                             |     1 | 2-pin header                              |
| OUT+, OUT-, FOUT1+, FOUT1-, HPOUTR, HPOUTL, TP1 |     0 | Not installed, test points                |
| R1                                              |     1 | 49.9 Ω ±1% resistor (0402)                |
| R2, R3                                          |     0 | Not installed, resistors (0603)           |
| T1                                              |     0 | Not installed, common-mode choke          |
| U1                                              |     1 | MAX9770ETI (28-pin 5mm x 5mm thin QFN)    |
| None                                            |     8 | Shunts                                    |
| None                                            |     1 | MAX9770/MAX9771 PC board                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX9770 Evaluation Kit

## Procedure

- 1) Install  shunts  across  jumpers JU1 (pins 1 and 2, GAIN1 = high) and JU2 (pins 2 and 3, GAIN2 = low) (speaker gain = 9dB, headphone gain = -2dB).
- 2) Install  shunts  across  jumpers JU3 (pins 1 and 2, SEL1 = high), JU4 (pins 2 and 3, SEL2 = low), and JU5 (pins 2 and 3, SELM = low) (stereo inputs VRIN1 and VLIN1 are enabled).
- 3) Install  a  shunt  across  pins  1  and  2  of  jumper  JU6 (the EV kit is enabled).
- 4) Install  a  shunt  across  pins  1  and  4  of  jumper  JU7 (SYNC = high, spread-spectrum mode).
- 5) Install a shunt across jumper JU8 (automatic switchover to headphone operation is enabled).

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX9770 when contacting these component suppliers.

## Quick Start

The MAX9770 EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- 2.5V to 5.5V, 1A power supply (suggested supply of 3.3V)
- Audio source (i.e., CD player, cassette player, etc.)
- 8 Ω speaker
- Stereo headphone with 3.5mm plug
- 7) Connect the positive terminal of the power supply to the VDD pad and the power-supply ground terminal to the GND pad.
- 8) Connect the audio source to VRIN1 and VLIN1.
- 9) Turn on the power supply.
- 10) Turn on the audio source.
- 11) Plug the headphone into J1 for headphone mode.

## Detailed Description

The MAX9770 EV kit features the MAX9770 low-EMI filterless class D amplifier IC, designed to drive a BTL mono speaker or a stereo headphone with an AC stereo/mono input source in portable audio applications. The EV kit operates from a DC power supply that can provide 2.5V to 5.5V and 1A of current. The EV kit accepts only a single-ended audio input. The audio input source is amplified to drive 1.2W into an 8 Ω speaker.

The MAX9770 is designed to pass FCC class B emissions without additional filtering when using 10cm of cable to connect the speaker. In applications where more margin and/or cable length are required, output capacitors C14, C15, and common-mode choke T1 can be added to reduce radiated emission. Connect the speaker to FOUT1+/FOUT1- test points. Table 1 lists the cable length vs. the required output components. The filtered outputs (FOUT2+, FOUT2-) require installation of filtering components L1, L2, C16-C19, C21, R2, and R3.

- 6) Connect the speaker across the OUT+ and OUTtest points.

Table 1. Cable Length vs. Suggested Output Components

| CABLE LENGTH X (cm)   | OUTPUT CAPACITORS C14 AND C15   | COMMON-MODE CHOKE T1   | LCR FILTER L1, L2, C16-C19, C21, R2, R3   | OUTPUT SPEAKER CONNECTED BETWEEN   |
|-----------------------|---------------------------------|------------------------|-------------------------------------------|------------------------------------|
| X < 10                | -                               | -                      | -                                         | OUT+, OUT-                         |
| 10 < X < 15           | Required (100pF)                | -                      | -                                         | OUT+, OUT-                         |
| 15 < X < 30           | Required (100pF)                | Required               | -                                         | FOUT1+, FOUT1-                     |
| X>30                  | -                               | -                      | Required                                  | FOUT2+, FOUT2-                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

The EV kit outputs (OUT+, OUT-) can be connected directly to a speaker load without any filtering. However, a filter can be added to ease evaluation by recovering the audio signal. See Table 2 for the recommended filtering component values for an 8 Ω load and 30kHz cutoff frequency.

## Jumper Selection

## Output Gain Selection

Jumpers JU1 and JU2 control the GAIN1 and GAIN2 pins of the MAX9770 IC. The MAX9770 can be configured to automatically switch between two gain settings depending on whether the EV kit is in speaker or headphone mode. By driving one or both gain inputs with the HPS pin, the gain of the output changes when a headphone is inserted/removed. See Table 3 for output gain settings.

Table 3. JU1 and JU2 Jumpers Selection

| SPEAKER MODE GAIN (HPS = 0) (dB)   | HEADPHONE MODE GAIN (HPS = 1) (dB)   | JU1 SHUNT POSITION   | GAIN1 PIN                                         | JU2 SHUNT POSITION   | GAIN2 PIN                                         |
|------------------------------------|--------------------------------------|----------------------|---------------------------------------------------|----------------------|---------------------------------------------------|
| 6                                  | -2                                   | Open                 | GAIN1 = HPS, connect pin 2 of JU1 to pin 1 of JU8 | Pins 2 and 3         | GAIN2 = low                                       |
| 3                                  | 1                                    | Open                 | GAIN1 = HPS, connect pin 2 of JU1 to pin 1 of JU8 | Pins 1 and 2         | GAIN2 = high                                      |
| 6                                  | 4                                    | Pins 2 and 3         | GAIN1 = low                                       | Open                 | GAIN2 = HPS, connect pin 2 of JU2 to pin 1 of JU8 |
| 9                                  | 1                                    | Pins 1 and 2         | GAIN1 = high                                      | Open                 | GAIN2 = HPS, connect pin 2 of JU2 to pin 1 of JU8 |
| 6                                  | 1                                    | Open                 | GIAN1 = HPS, connect pin 2 of JU1 to pin 1 of JU8 | Open                 | GAIN2 = HPS, connect pin 2 of JU2 to pin 1 of JU8 |
| 0                                  | 1                                    | Pins 1 and 2         | GAIN1 = high                                      | Pins 1 and 2         | GAIN2 = high                                      |
| 9 (default)                        | -2 (default)                         | Pins 1 and 2         | GAIN1 = high                                      | Pins 2 and 3         | GAIN2 = low                                       |
| 3                                  | 4                                    | Pins 2 and 3         | GAIN1 = low                                       | Pins 1 and 2         | GAIN2 = high                                      |
| 6                                  | 7                                    | Pins 2 and 3         | GAIN1 = low                                       | Pins 2 and 3         | GAIN2 = low                                       |

Note:

JU8 is closed.

<!-- image -->

## MAX9770 Evaluation Kit

Table 2. Recommended Filtering Components for Outputs with 8 Ω Load

| COMPONENT   | RECOMMENDED VALUE   |
|-------------|---------------------|
| L1, L2      | 15µH                |
| C16, C17    | 0.033µF             |
| C18, C19    | 0.068µF             |
| C21         | 0.15µF              |
| R2, R3      | 22 Ω                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9770 Evaluation Kit

## Input Selection

Jumpers JU3, JU4, and JU5 control the SEL1, SEL2, and SELM pins of the MAX9770 IC.

See Table 4 for JU3, JU4, and JU5 functions.

## Table 4. JU3, JU4, and JU5 Jumpers Selection

| JU3 SHUNT POSITION         | JU4 SHUNT POSITION         | JU5 SHUNT POSITION         | INPUT SELECTION                                          |
|----------------------------|----------------------------|----------------------------|----------------------------------------------------------|
| Pins 2 and 3 (SEL1 = low)  | Pins 2 and 3 (SEL2 = low)  | Pins 2 and 3 (SELM = low)  | All inputs are disabled                                  |
| Pins 2 and 3 (SEL1 = low)  | Pins 2 and 3 (SEL2 = low)  | Pins 1 and 2 (SELM = high) | VMONO (mono)                                             |
| Pins 2 and 3 (SEL1 = low)  | Pins 1 and 2 (SEL2 = high) | Pins 2 and 3 (SELM = low)  | VRIN2/VLIN2 (stereo)                                     |
| Pins 2 and 3 (SEL1 = low)  | Pins 1 and 2 (SEL2 = high) | Pins 1 and 2 (SELM = high) | VRIN2/VLIN2 (stereo), VMONO (mono)                       |
| Pins 1 and 2 (SEL1 = high) | Pins 2 and 3 (SEL2 = low)  | Pins 2 and 3 (SELM = low)  | VRIN1/VLIN1 (stereo) (default)                           |
| Pins 1 and 2 (SEL1 = high) | Pins 2 and 3 (SEL2 = low)  | Pins 1 and 2 (SELM = high) | VRIN1/VLIN1 (stereo), VMONO (mono)                       |
| Pins 1 and 2 (SEL1 = high) | Pins 1 and 2 (SEL2 = high) | Pins 2 and 3 (SELM = low)  | VRIN1/VLIN1 (stereo), VRIN2/VLIN2 (stereo)               |
| Pins 1 and 2 (SEL1 = high) | Pins 1 and 2 (SEL2 = high) | Pins 1 and 2 (SELM = high) | VRIN1/VLIN1 (stereo), VRIN2/VLIN2 (stereo), VMONO (mono) |

Note: Refer to Table 2 of the MAX9770 IC data sheet for the multiplex/mixer settings.

## Shutdown Mode ( SHDN )

Jumper JU6 controls the shutdown pin ( SHDN )  of  the MAX9770 IC. See Table 5 for shunt positions.

## Table 5. JU6 Jumper Selection

| SHUNT POSITION         | SHDN PIN         | EV KIT FUNCTION   |
|------------------------|------------------|-------------------|
| Pins 1 and 2 (default) | Connected to VDD | EV kit enabled    |
| Pins 2 and 3           | Connected to GND | Shutdown mode     |

## Switching Frequency Mode (SYNC)

Jumper JU7 provides an option to select the switching frequency of the MAX9770 IC. See Table 6 for the various shunt positions.

## Table 6. JU7 Jumper Selection

| SHUNT POSITION         | SYNC PIN                    | INTERNAL OSCILLATOR SWITCHING FREQUENCY      |
|------------------------|-----------------------------|----------------------------------------------|
| Pins 1 and 2           | SYNC = low                  | 1.1MHz                                       |
| Pins 1 and 3           | SYNC = floating             | 1.45MHZ                                      |
| Pins 1 and 4 (default) | SYNC = high                 | 1.22MHz ± 120kHz (spread-spectrum mode)      |
| Pins 1 and 5           | SYNC = external clock input | Synchronized to the incoming clock frequency |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9770 Evaluation Kit

<!-- image -->

Figure 1. MAX9770 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9770 Evaluation Kit

<!-- image -->

Figure 2. MAX9770 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX9770 EV Kit PC Board Layout-Layer 2 (GND)

Figure 3. MAX9770 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX9770 EV Kit PC Board Layout-Layer 3 (VDD)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX9770 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX9770 Evaluation Kit

Figure 7. MAX9770 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7