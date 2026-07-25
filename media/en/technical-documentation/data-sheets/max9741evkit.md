<!-- lastmod 2022-08-03 -->
## General Description

The MAX9741 evaluation kit (EV kit) is a fully assembled and tested circuit board that configures the MAX9741 Class D amplifier to drive 12W into a pair of 8 Ω speakers in stereo for audio applications. The EV kit's speaker outputs can be filterless to minimize circuit area, or can be filtered to ease evaluation.

The MAX9741 EV kit operates from a 10V to 25V DC power supply. The EV kit accepts differential or singleended input signals, and provides fully differential outputs.  The  EV  kit  provides  an  option  to  select  between +13dB, +16dB, +19.1dB, or +29.6dB gains. The MAX9741 EV kit offers an option to select between fixed-frequency modulation (FFM) mode or spreadspectrum modulation (SSM) mode.

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| C1            |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K TDK C1608X7R1H102KT  |
| C2**, C3**    |     2 | 33µF ±10%, 35V tantalum capacitors (D case) AVX TAJD336K035                              |
| C4, C5        |     2 | 2.2µF ±10%, 25V X5R ceramic capacitors (0805) TDK C2012X5R1E225K or equivalent           |
| C12-C15, C17  |     5 | 0.47µF ±10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J474K TDK C1005X5R0J474K |
| C16           |     1 | 0.01µF ±10%, 25V X7R ceramic capacitor (0402) TDK C1005X7R1E103K                         |

## Component List

| DESIGNATION                             | QTY                                     | DESCRIPTION                                                                 |
|-----------------------------------------|-----------------------------------------|-----------------------------------------------------------------------------|
| C18                                     | 1                                       | 1µF ±10%, 25V X7R ceramic capacitor (0805) TDK C2012X7R1E105K or equivalent |
| C19                                     | 1                                       | 0.1µF ±10%, 25V X5R ceramic capacitor (0402) TDK C1005X5R1E104K             |
| C26, C27                                | 2                                       | 100pF ±5%, 50V C0G ceramic capacitors (0402) TDK C1005C0G1H101J             |
| U1                                      | 1                                       | MAX9741ETN+ (56-pin TQFN, 8mm x 8mm)                                        |
| OPTIONAL COMPONENTS FOR CUSTOMER DESIGN | OPTIONAL COMPONENTS FOR CUSTOMER DESIGN | OPTIONAL COMPONENTS FOR CUSTOMER DESIGN                                     |
| C6, C7                                  | 0                                       | Not installed, 25V X5R or equivalent ceramic capacitors (0603)              |
| C8-C11, C20-C23                         | 0                                       | Not installed, 25V X5R or equivalent ceramic capacitors (0805)              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

- ♦ 10V to 25V Single-Supply Operation
- ♦ Differential or Single-Ended Input Modes
- ♦ Fully Differential Outputs
- ♦ Up to 88% Efficiency into 16 Ω
- ♦ Drives 2 x 12W Continuous into 8 Ω
- ♦ Drives 2 x 15W Continuous into 16 Ω
- ♦ Low 0.1% THD+N
- ♦ Selectable Between Spread-Spectrum and Fixed-Frequency Modulation
- ♦ Pin-Selectable Gains (+13dB, +16dB, +19.1dB, +29.6dB)
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE                      |
|--------------|--------------|---------------------------------|
| MAX9741EVKIT | 0°C to +70°C | 56 TQFN-EP* (8mm x 8mm x 0.8mm) |

## MAX9741 Evaluation Kit

| DESIGNATION                             | QTY                                     | DESCRIPTION                                                                           |
|-----------------------------------------|-----------------------------------------|---------------------------------------------------------------------------------------|
| OPTIONAL COMPONENTS FOR CUSTOMER DESIGN | OPTIONAL COMPONENTS FOR CUSTOMER DESIGN | OPTIONAL COMPONENTS FOR CUSTOMER DESIGN                                               |
| C24, C25                                | 0                                       | Not installed, 25V X5R or equivalent ceramic capacitors (0402)                        |
| C28-C31                                 | 0                                       | Not installed, stacked metallized film capacitors Panasonic ECQV1H103JL (recommended) |
| D1                                      | 1                                       | 5.1V, 20mA zener diode (SOT-23) Central CMPZ5231B (top mark C8F)                      |
| JU1, JU2, JU8                           | 3                                       | 2-pin headers                                                                         |
| JU3-JU7                                 | 5                                       | 3-pin headers                                                                         |

## Procedures

- 1) Verify that no shunt is across jumpers JU1 and JU2 (differential input mode).
- 2) Install  shunts  across  pins  1  and  2  of  jumper  JU3 and jumper JU8 (EV kit is enabled).

## Component List (continued)

| DESIGNATION                             | QTY                                     | DESCRIPTION                                                         |
|-----------------------------------------|-----------------------------------------|---------------------------------------------------------------------|
| OPTIONAL COMPONENTS FOR CUSTOMER DESIGN | OPTIONAL COMPONENTS FOR CUSTOMER DESIGN | OPTIONAL COMPONENTS FOR CUSTOMER DESIGN                             |
| JU9                                     | 1                                       | 5-pin header Waldom: 26-48-1051                                     |
| L1-L4                                   | 0                                       | Not installed, power inductors Sumida CDRH104R series (recommended) |
| R1                                      | 1                                       | 10k Ω ±5% resistor (0402)                                           |
| R2-R5                                   | 0                                       | Not installed, resistors (0402)                                     |
| OUTL+, OUTL-, OUTR+, OUTR-              | 0                                       | Not installed, test points                                          |
| -                                       | 8                                       | Shunts                                                              |
| -                                       | 1                                       | MAX9741 EV kit PC board                                             |

## Component Suppliers

| SUPPLIER    | PHONE         | FAX          | WEBSITE               |
|-------------|---------------|--------------|-----------------------|
| AVX         | 843- 946-0238 | 843-626-3123 | www.avxcorp.com       |
| Central     | 631-435-1110  | 631-435-1824 | www.centralsemi.com   |
| Murata      | 770-436-1300  | 770-436-3030 | www.murata.com        |
| Taiyo Yuden | 800-348-2496  | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100  | 847-390-4405 | www.component.tdk.com |

Note: Indicate you are using the MAX9741 when contacting these manufacturers.

## Quick Start

The MAX9741 EV kit is fully assembled and tested. Follow the steps listed below to verify board operation.

Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- 18V, 2.5A power supply
- Audio source (i.e., CD player, cassette player)
- 8 Ω /16 Ω speakers
- 3) Install  shunts  across  pins  1  and  2  of  jumpers  JU4 and JU5 (gain = 16dB).
- 4) Install  shunts  across  pins  1  and  2  of  jumpers  JU6 and JU7 (spread-spectrum mode, frequency centered at 670kHz).
- 5) Connect the speakers across the filterless output header JU9 (pin 1 = OUTL+, pin 2 = OUTL-, pin 3 = GND, pin 4 = OUTR+, and pin 5 = OUTR-).
- 6) Connect the positive terminal of the 18V power supply to the VDD pad and the ground terminal of the power supply to the GND pad.
- 7) Connect the audio source across the VINL+/VINLand VINR+/VINR- pads.
- 8) Turn on the power supply, and then turn on the audio source.

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description

The MAX9741 EV kit is designed to evaluate the MAX9741 in the 56-pin TQFN-EP package. The MAX9741 is a Class D amplifier that can be configured to drive 12W continuous into a pair of 8 Ω speakers. The EV kit operates from a 10V to 25V DC power supply. The EV kit PC board has four layers with 2oz copper to optimize power dissipation.

The EV kit accepts a differential or single-ended audio input source, and provides fully differential outputs. The EV kit provides an option to select between +13dB, +16dB, +19.1dB, or 29.6dB gains. The MAX9741 EV kit offers  an  option  to  select  between  three  frequencies (470kHz, 670kHz, or 970kHz) when in FFM mode or a single center frequency of 670kHz in SSM mode. Refer to  the Operating Modes section in the MAX9741 IC data sheet for more information.

## Filterless Output

The MAX9741 filterless outputs (OUTL+/OUTL- and OUTR+/OUTR-) can be connected directly to a pair of speaker loads without any filtering. Use JU9 to connect the speakers directly to the MAX9741 outputs.

## Output Filtering

An audio analyzer typically cannot accept pulse-widthmodulated (PWM) signals at its inputs. A filter can be added for ease of evaluation with a resistive load. The filtered outputs FOUTL+/FOUTL- and FOUTR+/FOURTrequire installation of components L1-L4, C6-C11, C20-C23, and R2-R5.

## MAX9741 Evaluation Kit

## Resistive Load

If evaluating the MAX9741 EV kit with resistive loads, an inductor is needed in series with the load to evaluate loudspeakers. With an 8 Ω load,  use  a  68µH  inductor; with a 16 Ω load, use 100µH.

Table 1. Recommended Filter Components

| PART    | RECOMMENDED VALUE (8 Ω )   | RECOMMENDED VALUE (16 Ω )   |
|---------|----------------------------|-----------------------------|
| L1-L4   | 22µH                       | 47µH                        |
| C6, C7  | 0.1µF                      | 0.047µF                     |
| C20-C23 | 0.022µF                    | 0.01µF                      |
| C8-C11  | 0.01µF                     | 4700pF                      |
| R2-R5   | 100 Ω                      | 200 Ω                       |

## Jumper Selection

## Shutdown Mode

The MAX9741 EV kit operates from a DC power supply between 10V to 25V. The MAX9741 EV kit includes a zener diode to regulate the input power supply to +5V to  power all  logic  circuits  on  the  EV  kit.  Jumper  JU3 sets the DVDD voltage and JU8 controls the SHDN pins. See Table 2 for JU3 and JU8 jumper selection.

## Gain Selection

The MAX9741 features four gain settings. Jumpers JU4 and JU5 provide four options to select the desired output voltage gain. The gain of the MAX9741 is selectable between +13dB, +16dB, +19.1dB, and +29.6dB. See Table 3 for JU4 and JU5 functions. See Table 6 for power vs. gain and input levels.

Table 2. JU3 and JU8 Jumper Selection (Shutdown)

| JU3 SHUNT POSITION   | JU8 SHUNT POSITION                               | DVDD VOLTAGE (V)   | EV KIT FUNCTION          |
|----------------------|--------------------------------------------------|--------------------|--------------------------|
| Pins 1 and 2         | Installed ( SHDN = high)                         | DVDD = +5          | EV kit enabled (default) |
| Pins 2 and 3         | Installed, without external signal ( SHDN = low) | DVDD = 0           | MAX9741 in shutdown      |

Table 3. JU4 and JU5 Functions (G1 and G2)

| JU4 SHUNT LOCATION       | JU5 SHUNT LOCATION       | MAX9741 OUTPUT GAIN (dB)   |
|--------------------------|--------------------------|----------------------------|
| Pins 1 and 2 (G1 = high) | Pins 1 and 2 (G2 = high) | 16 (default)               |
| Pins 1 and 2 (G1 = high) | Pins 2 and 3 (G2 = low)  | 13                         |
| Pins 2 and 3 (G1 = low)  | Pins 1 and 2 (G2 = high) | 19.1                       |
| Pins 2 and 3 (G1 = low)  | Pins 2 and 3 (G2 = low)  | 29.6                       |

Note: Ensure a shunt is installed across pins 1 and 2 of jumper JU3.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9741 Evaluation Kit

## Frequency Modulation

The MAX9741 has two operating modes, FFM and SSM mode. There are three different frequencies in the fixed-frequency modulation mode of operation. JU6 and JU7 on the MAX9741 EV kit provide an option to select the different frequency modulations for the MAX9741. See Table 4 for JU6 and JU7 functions.

## Input Mode

The MAX9741 EV kit features an option to select between single-ended and differential modes for the audio input source. JU1 and JU2 provide an option to select the input mode for the audio input source. See Table 5 for JU1 and JU2 functions.

Table 4. JU6 and JU7 Functions (FS1 and FS2)

| JU6 SHUNT LOCATION        | JU7 SHUNT LOCATION        | MAX9741 SWITCHING FREQUENC (Hz)   |
|---------------------------|---------------------------|-----------------------------------|
| Pins 1 and 2 (FS1 = high) | Pins 1 and 2 (FS2 = high) | 670 ±7%, SSM (default)            |
| Pins 1 and 2 (FS1 = high) | Pins 2 and 3 (FS2 = low)  | 470, FFM                          |
| Pins 2 and 3 (FS1 = low)  | Pins 1 and 2 (FS2 =high)  | 930, FFM                          |
| Pins 2 and 3 (FS1 = low)  | Pins 2 and 3 (FS2 = low)  | 670, FFM                          |

Note: Ensure a shunt is installed across pins 1 and 2 of jumper JU3.

Table 5. JU1 and JU2 Functions (Single/Differential Input Mode)

| JU1 and JU2 SHUNT POSITION                        | EV KIT INPUT MODE                 | AUDIO INPUT CONNECTION                         |
|---------------------------------------------------|-----------------------------------|------------------------------------------------|
| Not installed                                     | Differential input mode (default) | Connected to VINL+/VINL- and VINR+/ VINR- pads |
| Installed (VINL- and VINR- pad connected to AGND) | Single-ended input mode           | Connect to VINL+ and VINR+ pads                |

Table 6. MAX9741 Power vs. Gain and Input Levels

|   GAIN (dB) |   V IN DIFF RMS (V) |   RL ( Ω ) |   P OUT at 10% THD+N (W) |
|-------------|---------------------|------------|--------------------------|
|        13.0 |                2.23 |          8 |                       16 |
|        13.0 |                3.00 |         16 |                       11 |
|        16.0 |                1.58 |          8 |                       16 |
|        16.0 |                2.12 |         16 |                       11 |
|        19.1 |                1.11 |          8 |                       16 |
|        19.1 |                1.48 |         16 |                       11 |
|        29.6 |                0.33 |          8 |                       16 |
|        29.6 |                0.44 |         16 |                       11 |

Note:

VDD = 18V.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9741 Evaluation Kit

<!-- image -->

Figure 1. MAX9741 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9741 Evaluation Kit

Figure 2. MAX9741 EV Kit Component Placement Guide-Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9741 Evaluation Kit

<!-- image -->

Figure 3. MAX9741 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9741 Evaluation Kit

Figure 4. MAX9741 EV Kit PC Board Layout-Layer 2 (GND)

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9741 Evaluation Kit

<!-- image -->

Figure 5. MAX9741 EV Kit PC Board Layout-Layer 3 (VDD)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9741 Evaluation Kit

Figure 6. MAX9741 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9741 Evaluation Kit

Figure 7. MAX9741 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Heaney

11