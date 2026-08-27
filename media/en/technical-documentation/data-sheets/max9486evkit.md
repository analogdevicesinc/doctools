<!-- lastmod 2022-08-03 -->
## General Description

The MAX9486 EV kit evaluates the MAX9486, a highperformance clock synthesizer with an 8kHz input reference  clock.  The  EV  kit  provides  six  buffered 35.328MHz outputs, CLK1-CLK6, and a jitter-suppressed 8kHz output REO. The EV kit operates from a single 3.3V power supply.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                     |
|---------------|-------|-------------------------------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 10µF ±20%, 6.3V X5R ceramic capacitors (0805) Taiyo Yuden JMK212BJ106M TDK C2012X5R0J106M       |
| C4, C5, C6    |     3 | 0.01µF ±10%, 16V X7R ceramic capacitors (0402) Taiyo Yuden EMK105BJ103K Murata GRM36X7R103K016K |
| C7, C8, C9    |     3 | 0.001µF ±10%, 50V X7R ceramic capacitors (0402) TDK C1005X7R1H102K                              |
| C10, C13-C18  |     0 | Not installed, ceramic capacitors (0603)                                                        |
| C11, C12      |     2 | 4.7pF ±0.1pF, 50V C0G ceramic capacitors (0603) TDK C1608COG1H4R7B                              |
| C19           |     1 | 560pF± 5%, 50V COG ceramic capacitor (0603) TDK C1608COG1H561J                                  |

- ♦ Single 3.3V Supply
- ♦ Controlled 50 Ω Microstrip Traces
- ♦ On-Board Adjustable Charge Pump Current
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX9486EVKIT | 0°C to +70°C | 24 TSSOP     |

## Component List

| DESIGNATION     |   QTY | DESCRIPTION                                                                             |
|-----------------|-------|-----------------------------------------------------------------------------------------|
| C20             |     1 | 0.022uF±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H223K                        |
| R1              |     1 | 49.9 Ω ±1% resistor (0603)                                                              |
| R2              |     1 | 13k Ω ±1% resistor (0603)                                                               |
| R3              |     1 | 1M Ω ±5% resistor (0603)                                                                |
| R4              |     1 | 200k Ω 12-turn potentiometer                                                            |
| R5-R11          |     7 | 464 Ω ±1% resistors (0603)                                                              |
| REIN, SMA1-SMA7 |     8 | SMA edge-mount connectors Johnson Components 142-0701-801                               |
| Y1              |     1 | 17.664MHz through-hole crystal resonator (with 14pF load cap) Ecliptek ECX-5866-17.664M |
| JU1             |     1 | 3-pin header                                                                            |
| JU2-JU9         |     8 | 2-pin headers                                                                           |
| None            |     1 | Shunt                                                                                   |
| None            |     1 | MAX9486 PC board                                                                        |
| U1              |     1 | MAX9486EUG (24-pin TSSOP)                                                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

Features

## MAX9486 Evaluation Kit

## Quick Start

The MAX9486 EV kit is fully assembled and tested. Do not turn on the power supplies until all connections are completed.

## Recommended Equipment

- 3.3V, 500mA power supply
- 8.000kHz ±200ppm frequency source (or function generator)
- Frequency counter(s)/500MHz oscilloscope

## Procedure

- 1) Verify that a shunt is across JU1 (pins 1 and 2) ( SHDN = DVDD).
- 2) Verify that there is no shunt across JU2-JU9.
- 3) Connect frequency counter(s) to the SMA connector(s) SMA1/2/3/4/5/6.
- 4) Connect the 8.000kHz frequency source to the REIN SMA connector.
- 5) Connect the positive of the power supply to the VDD, VDDP, and DVDD pads.
- 6) Connect the power ground to the GND pads.
- 7) Turn on the power supply, and enable the frequency source (or function generator).
- 8) Verify output frequencies SMA1/2/3/4/5/6 are at 35.328MHz ±200ppm.
- 9) Vary the 8.000kHz input by ±200ppm, then verify the output SMA1/2/3/4/5/6 tracks with the input and is at 35.328MHz ±200ppm.

## Detailed Description

The MAX9486 EV kit is a fully assembled and tested PC board. The EV kit evaluates the MAX9486, a high-performance clock synthesizer with an 8kHz input reference clock. The MAX9486 EV kit operates with a single 3.3V power supply, and provides six 35.328MHz outputs (CLK1-CLK6) and a jitter-suppressed 8kHz output REO. The output signals SMA1-SMA7 from the EV kit are scaled down by approximately 10 times to accommodate low 50 Ω impedance of equipment.

## Adjustable Charge Pump Current

The MAX9486 EV kit provides on-board adjustable charge-pump current options. To set the desired charge-pump current in µA, adjust the 200k Ω potentiometer R4 (k Ω ) so:

I Charge\_Pump\_Current = 2400 / [(R4+13) +1] where R4 is set to 0 Ω at default.

## Jumper Selection

Jumper JU1 is incorporated to control the SHDN pin of the MAX9486 device. See Table 1 for the JU1 function.

## Table 1. JU1 Function

| SHUNT LOCATION   | SHDN PIN          | EV KIT FUNCTION   |
|------------------|-------------------|-------------------|
| Pins 1 and 2     | Connected to DVDD | Enabled           |
| Pins 2 and 3     | Connected to GND  | Disabled          |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Ecliptek    | 800-433-1280 | 714-433-1234 | www.ecliptek.com      |
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX9486 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. MAX9486 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9486 Evaluation Kit

<!-- image -->

Figure 2. MAX9486 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX9486 EV Kit PC Board Layout-Inner Layer 2 (GND Layer)

Figure 3. MAX9486 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX9486 EV Kit PC Board Layout-Inner Layer 3 (DVDD Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9486 Evaluation Kit

Figure 6. MAX9486 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 5