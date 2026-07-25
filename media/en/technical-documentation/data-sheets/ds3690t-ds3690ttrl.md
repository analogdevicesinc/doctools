<!-- lastmod 2022-10-10 -->
POS Terminals

PIN Pads

Cryptographic Processors

Gaming

Lottery Terminals

Industrial Controls and Monitoring

<!-- image -->

## 3.3V 26-Channel, Three-Stateable Transmission Gate

## General Description

The DS3690 is a 26-channel, three-stateable transmission gate designed for transparent digital signal transfer when enabled and fast-gated bus isolation when the device is disabled. Each of the 26 independent channels can be used for input, output, or I/O signal applications, with a typical signal propagation delay of less than 10ns. Using the logic-control input, all channels can be simultaneously enabled for bus transmission or forced to a high-impedance condition to isolate a critical component on that bus.

The DS3690 operates on a single 3.3V (typical) power supply and is available in a space-saving 56-pin leadfree TQFN package.

## Applications

Features

- ♦ 26 Bidirectional Channels
- ♦ Low Propagation Delay (&lt; 10ns typ)
- ♦ High-Speed On/Off Time (&lt; 20ns typ)
- ♦ 2.7V to 3.6V Supply
- ♦ Wide Temperature Range: -55°C to +85°C
- ♦ TQFN Package (5mm x 11mm x 0.8mm)

## Ordering Information

| PART        | TEMP RANGE     | PIN-PACKAGE   |
|-------------|----------------|---------------|
| DS3690T+    | -55°C to +85°C | 56 TQFN       |
| DS3690T+TRL | -55°C to +85°C | 56 TQFN       |

TRL = Tape and reel.

## Pin Configuration

<!-- image -->

Typical Operating Circuit appears at end of data sheet.

1

## 3.3V 26-Channel, Three-Stateable Transmission Gate

## ABSOLUTE MAXIMUM RATINGS

Voltage Range on Any Pin Relative to Ground......-0.5V to +6.0V

Operating Temperature Range ...........................-55°C to +85°C

Storage Temperature Range.............................-55°C to +125°C

Soldering Temperature...................Refer to IPC/JEDEC J-STD-020

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## RECOMMENDED OPERATING CONDITIONS

(TA = -55°C to +85°C)

| PARAMETER      | SYMBOL   | CONDITIONS   | MIN        |   TYP | MAX        | UNITS   |
|----------------|----------|--------------|------------|-------|------------|---------|
| Supply Voltage | V CC     | (Note 1)     | 2.7        |   3.3 | 3.6        | V       |
| Input Logic 1  | V IH     | (Note 1)     | 0.7 x V CC |       | V CC + 0.3 | V       |
| Input Logic 0  | V IL     | (Note 1)     | -0.3       |       | 0.3 x V CC | V       |

## DC ELECTRICAL CHARACTERISTICS

(VCC = +2.7V to +3.6V, TA = -55°C to +85°C, unless otherwise noted.)

| PARAMETER                    | SYMBOL   | CONDITIONS                         |   MIN | TYP   |   MAX | UNITS   |
|------------------------------|----------|------------------------------------|-------|-------|-------|---------|
| Standby Current              | I CC     | CE = CH1 CH26 = V CC , I OUT = 0mA |       |       |     1 | µA      |
| Input Leakage Current ( CE ) | I I      | V IN = 0V to V CC , T A = +25°C    |  -0.1 |       |  +0.1 | µA      |
| I/O Leakage Current          | I IO     | CE = V IH                          |  -1.0 |       |  +1.0 | µA      |

## AC ELECTRICAL CHARACTERISTICS

(VCC = +2.7V to +3.6V, TA = -55°C to +85°C, unless otherwise noted.)

| PARAMETER                            | SYMBOL   | CONDITIONS         |   MIN | TYP   |   MAX | UNITS   |
|--------------------------------------|----------|--------------------|-------|-------|-------|---------|
| Propagation Delay (A to B or B to A) | t PD     | CE = V IL (Note 2) |       |       |    10 | ns      |
| Chip Enable to Output Valid          | t CEV    | (Notes 2, 3)       |       |       |    20 | ns      |
| Chip Enable to Output Deselect       | t CEZ    | (Notes 2, 3)       |       |       |    20 | ns      |
| Input to CE Setup Time               | t IS     | (Note 4)           |     0 |       |       | ns      |
| Skew Between Channels                | t S      | (Notes 5, 6)       |       |       |     1 | ns      |

## AC TEST CONDITIONS

Input Pulse Levels:

VIL = 0.0V, VIH = 2.7V

Input Pulse Rise and Fall Times:

5ns

Input and Output Timing Reference Level:

VCC/2

Output Load:

CL (100pF)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## CAPACITANCE

(TA = +25°C)

| PARAMETER                | SYMBOL   | CONDITIONS            |   TYP | MAX   | UNITS   |
|--------------------------|----------|-----------------------|-------|-------|---------|
| Input Capacitance ( CE ) | CIN      | Not production tested |     5 |       | pF      |
| I/O Capacitance          | CIO      | Not production tested |     8 |       | pF      |

Note 1: All voltages referenced to ground.

Note 2: Typical waveform shown is labeled CHxxA (input) to CHxxB (output), and is identical in function when selecting pin CHxxB (as the input) to pin CHxxA (as the output).

Note 3: Output reference level is VCC/2.

Note 4: Input transitions prior to the CE falling edge are ignored (don't care).

Note 5: Propagation delay differential between any two channels when using a common input signal source.

Note 6: Guaranteed by design and not 100% tested.

## 3.3V 26-Channel, Three-Stateable Transmission Gate

## Timing Diagrams

<!-- image -->

Figure 1. Digital Channel Propagation Delay

Figure 2. Digital Channels Enabled by CE

<!-- image -->

<!-- image -->

Figure 3. Digital Channels Disabled by CE

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.3V 26-Channel, Three-Stateable Transmission Gate

## Typical Operating Characteristics

<!-- image -->

<!-- image -->

(VCC = 3.3V, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 3.3V 26-Channel, Three-Stateable Transmission Gate

## Pin Description

| PIN   | NAME   | FUNCTION                                     |
|-------|--------|----------------------------------------------|
| 30    | CH19B  | Channel 19 Terminal B                        |
| 31    | CH18B  | Channel 18 Terminal B                        |
| 32    | CH17B  | Channel 17 Terminal B                        |
| 33    | CH16B  | Channel 16 Terminal B                        |
| 34    | CH15B  | Channel 15 Terminal B                        |
| 35    | CH14B  | Channel 14 Terminal B                        |
| 36    | CH13B  | Channel 13 Terminal B                        |
| 37    | CH12B  | Channel 12 Terminal B                        |
| 38    | CH11B  | Channel 11 Terminal B                        |
| 39    | CH10B  | Channel 10 Terminal B                        |
| 40    | CH09B  | Channel 9 Terminal B                         |
| 41    | CH08B  | Channel 8 Terminal B                         |
| 42    | CH07B  | Channel 7 Terminal B                         |
| 43    | CH06B  | Channel 6 Terminal B                         |
| 44    | CH05B  | Channel 5 Terminal B                         |
| 45    | CH04B  | Channel 4 Terminal B                         |
| 46    | CH03B  | Channel 3 Terminal B                         |
| 47    | CH02B  | Channel 2 Terminal B                         |
| 48    | CH01B  | Channel 1 Terminal B                         |
| 49    | CH24B  | Channel 24 Terminal B                        |
| 50    | CH25B  | Channel 25 Terminal B                        |
| 51    | CH26B  | Channel 26 Terminal B                        |
| 52    | CE     | Chip-Enable Input (Active Low)               |
| 54    | CH26A  | Channel 26 Terminal A                        |
| 55    | CH25A  | Channel 25 Terminal A                        |
| 56    | CH24A  | Channel 24 Terminal A                        |
| -     | EP     | Exposed Paddle. Must be connected to ground. |

| PIN    | NAME   | FUNCTION              |
|--------|--------|-----------------------|
| 1      | CH01A  | Channel 1 Terminal A  |
| 2      | CH02A  | Channel 2 Terminal A  |
| 3      | CH03A  | Channel 3 Terminal A  |
| 4      | CH04A  | Channel 4 Terminal A  |
| 5      | CH05A  | Channel 5 Terminal A  |
| 6      | CH06A  | Channel 6 Terminal A  |
| 7      | CH07A  | Channel 7 Terminal A  |
| 8      | CH08A  | Channel 8 Terminal A  |
| 9      | CH09A  | Channel 9 Terminal A  |
| 10     | CH10A  | Channel 10 Terminal A |
| 11     | CH11A  | Channel 11 Terminal A |
| 12     | CH12A  | Channel 12 Terminal A |
| 13     | CH13A  | Channel 13 Terminal A |
| 14     | CH14A  | Channel 14 Terminal A |
| 15     | CH15A  | Channel 15 Terminal A |
| 16     | CH16A  | Channel 16 Terminal A |
| 17     | CH17A  | Channel 17 Terminal A |
| 18     | CH18A  | Channel 18 Terminal A |
| 19     | CH19A  | Channel 19 Terminal A |
| 20     | CH20A  | Channel 20 Terminal A |
| 21     | CH21A  | Channel 21 Terminal A |
| 22     | CH22A  | Channel 22 Terminal A |
| 23     | CH23A  | Channel 23 Terminal A |
| 24     | V CC   | Supply Voltage        |
| 25, 53 | GND    | Ground                |
| 26     | CH23B  | Channel 23 Terminal B |
| 27     | CH22B  | Channel 22 Terminal B |
| 28     | CH21B  | Channel 21 Terminal B |
| 29     | CH20B  | Channel 20 Terminal B |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.3V 26-Channel, Three-Stateable Transmission Gate

## Detailed Description

The DS3690 is a 26-channel, noninverting, bidirectional CMOS transmission gate, and is intended for use in applications where a downstream component must be isolated from a common control, address, or data bus in a timely fashion. Each of the 26 independent channels can be used for input, output, or I/O signal applications. The chip-enable input ( CE ) allows gated bus control for either signal transmission or bus isolation.

Each independent channel consists of two pins ('CHxxA' and 'CHxxB' where xx is 01-26). Since all 26 channels are capable of bidirectional function, either CHxxA or CHxxB can be selected as the input pin for any unidirectional signal requirements. A change of logic state on one side of any channel is directly reflected  on  the  other  side  of  that  channel.  Signal propagation delay (CHxxA to CHxxB, or CHxxB to CHxxA) is illustrated in Figure 1 as tPD.

All  channels  can  be  simultaneously enabled or forced to a high-impedance state using the CE input. When CE becomes a logic zero, all channels are enabled for signal transmission within tCEV (see Figure 2). When CE becomes a logic one, all channels are forced to a high-impedance state within tCEZ (see Figure 3).

## Applications Information

## Power-Supply Decoupling

To achieve the best results when using the DS3690, decouple the power supply with a 0.1µF capacitor. Use a high-quality, ceramic surface-mount capacitor if possible. Surface-mount components minimize lead inductance, which improves performance, while cerami c  capacitors  have  adequately  high-frequency response for decoupling applications.

## Pin Connections

For optimum circuit operation, connect pins 25 and 53 to a common ground. The exposed pad on the package bottom side should be connected to ground.

To prevent an unused transmission channel from generating any undesired activity, it is recommended that one side of  that  unused channel be connected to ground (either the A or B terminal, at the designer's discretion).

## Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 3.3V 26-Channel, Three-Stateable Transmission Gate

## Functional Diagram

<!-- image -->

## Package Information

(For the latest package outline information, go to www.maxim-ic.com/DallasPackInfo .)

| PACKAGE TYPE   | DOCUMENT NO.   |
|----------------|----------------|
| 56 TQFN        | 21-0187        |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7