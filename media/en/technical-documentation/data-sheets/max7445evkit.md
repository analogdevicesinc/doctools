<!-- lastmod 2022-08-03 -->
## General Description

The MAX7445 evaluation kit (EV kit) is a fully assembled and tested surface-mount board. The MAX7445 EV kit includes a MAX7445 4-channel video-reconstruction filter, ideal for anti-aliasing and digital-to-analog converter (DAC)-smoothing video applications. The EV kit provides three different output buffer-gain settings. The input signal is AC-coupled, and the output signal can be DC- or ACcoupled. The EV kit operates from a single +5V supply.

The MAX7445 EV kit can be used to evaluate the MAX7445-MAX7449.

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                                                                  |
|------------------|-------|--------------------------------------------------------------------------------------------------------------|
| C1               |     1 | 1µF ±20%, 6.3V X5R ceramic capacitor (0603) Taiyo Yuden JMK107BJ105MA or equivalent                          |
| C2-C6            |     5 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Taiyo Yuden EMK107BJ104KA or TDK C1608X7R1C104KT or equivalent |
| C7-C10           |     4 | 220µF ±20%, 6.3V aluminum electrolytic capacitors (6.3mm x 6.0mm) Sanyo 6CV220AX                             |
| EXTSYNC          |     1 | 50 Ω BNC PC board mount-jack connector                                                                       |
| IPA-IPD, OPA-OPD |     8 | 75 Ω BNC PC board mount-jack connectors                                                                      |
| JU1-JU7          |     7 | 3-pin headers                                                                                                |
| JU8-JU16         |     8 | 2-pin headers                                                                                                |
| R1-R8            |     8 | 75 Ω ±1% resistors (0603)                                                                                    |
| R9-R12           |     4 | 200 Ω ±1% resistors (0603)                                                                                   |
| R13-R16          |     4 | 162 Ω ±1% resistors (0603)                                                                                   |
| R17              |     1 | 0 Ω resistor (0603)                                                                                          |
| TB1              |     1 | 2-circuit terminal block                                                                                     |
| U1               |     1 | MAX7445EUD (14-pin TSSOP)                                                                                    |
| None             |    15 | Shunts                                                                                                       |
| None             |     1 | MAX7445 PC board                                                                                             |

<!-- image -->

Features

- ♦ Single +5V Power Supply
- ♦ Selectable Input 75 Ω Termination or DAC Termination
- ♦ Selectable AC- or DC-Output Couple
- ♦ Selectable Output Buffer Gains (MAX7445)
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX7445EVKIT | 0 ° C to +70 ° C | 14 TSSOP-EP* |

* EP = Exposed pad.

Note: To evaluate the MAX7446-MAX7449, order a free sample of the MAX7446EUD-MAX7449EUD with the MAX7445EVKIT.

## Quick Start

The following equipment is recommended:

- Single +5V 500mA DC power supply
- Video signal generator (e.g., Tektronix TG 2000)
- Video measurement equipment (e.g., Tektronix VM 700A)

The MAX7445 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify the board operation. Do not turn on the power supply until all connections are completed.

## Evaluating Channel 1

- 1) Verify  that  there  are  shunts  across  jumpers JU5 (pins 2 and 3, GAIN = +6.0dB), JU6 (pins 2 and 3, SELECT = GND), and JU7 (pins 2 and 3, output enabled).
- 2) Verify that a shunt is installed across pins 1 and 2 of jumpers JU1-JU4 (75 Ω termination).
- 3) Verify  that  there  are  shunts  across  jumpers  JU8, JU10, JU11, and JU12.
- 4) Verify that the remaining jumpers are open.
- 5) Connect the output of the video signal generator to the IPA BNC connector on the EV kit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX7445 Evaluation Kit

## Component Suppliers

| SUPPLER     | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Sanyo       | 619-661-6835 | 619-661-1055 | www.sanyo.com         |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX7445-MAX7449 when contacting these suppliers.

- 6) Connect the OPA BNC connector on the EV kit to the input of the video measurement equipment.
- 7) Connect the positive of the +5V supply to the 2-circuit terminal block labeled VCC. Connect the negative  of  the  power  supply  to  the  2-circuit  terminal block labeled GND.
- 8) Set the video signal generator for the desired videoinput signal (e.g., multiburst sweep). This signal must contain sync information (composite or CVBS).
- 9) Turn on the power supply, and enable the signal generator.
- 10) Analyze the output signal with the video-measurement equipment.

## Detailed Description

## Jumper Selection

The MAX7445 EV kit provides options for evaluating the MAX7445 with a video-signal generator output, or a current output video DAC/encoder. Table 1 lists the jumper settings for selecting the input from either a video generator or a DAC. When interfacing with a video

Table 1. Jumper Functions (JU1-JU4)

| JU1 SHUNT LOCATION     | JU2 SHUNT LOCATION     | JU3 SHUNT LOCATION     | JU4 SHUNT LOCATION     | INPUT TERMINATION   |
|------------------------|------------------------|------------------------|------------------------|---------------------|
| Pins 1 and 2           | Pins 1 and 2           | Pins 1 and 2           | Pins 1 and 2           | 75 Ω                |
| Pins 2 and 3           | Pins 2 and 3           | Pins 2 and 3           | Pins 2 and 3           | 200 Ω               |
| All other combinations | All other combinations | All other combinations | All other combinations | Undefined           |

Note: To emulate a 200 Ω DAC source resistor when driving from a 75 Ω generator, remove jumpers JU8, JU10, JU11, and JU12. The 162 Ω resistor added to the standard 75 Ω terminate equals approximately 200 Ω .

Table 2. JU5 Functions (GAIN)

| JU5 SHUNT LOCATION     | GAIN PIN         |   MAX7445 OUTPUT BUFFER GAIN (dB) |
|------------------------|------------------|-----------------------------------|
| Pins 1 and 2           | Connected to VCC |                              +9.5 |
| Pins 2 and 3 (default) | Connected to GND |                              +6.0 |
| Open (not installed)   | Floating         |                               +12 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

DAC or an encoder output, the 200 Ω termination resistor is  on  the  board and is selected by changing jumpers JU1-JU4 for channels A through D, respectively. A typical DAC termination resistor is 200 Ω .

The EV kit incorporates jumpers to control GAIN (JU5), SELECT (JU6), and DISABLE (JU7) pins. Tables 2, 3, and 4 list the jumper functions for JU5, JU6, and JU7.

## Evaluating the MAX7446-MAX7449

The  MAX7445  EV  kit  can  be  used  to  evaluate the MAX7446-MAX7449. To evaluate the MAX7446MAX7449, replace the MAX7445EUD with a MAX7446EUD-MAX7449EUD, and verify that there is a shunt across pins 2 and 3 of JU5 (GAIN = GND). Place a shunt across JU9 and replace R17 with a 49.9 Ω resistor  when evaluating the MAX7449. Connect the video measurement equipment to OPB, OPC, and OPD to view the output signal.

The MAX7449 requires an external TTL logic signal (H-sync) connected to EXTSYNC (as a sync source) to turn on or off the internal clamp circuits. See Table 5 for channel assignment, clamp voltage level, and sync source.

<!-- image -->

Table 3. JU6 Functions (SELECT)

|                        |                  | OPERATING MODE   | OPERATING MODE     | OPERATING MODE   | OPERATING MODE   |
|------------------------|------------------|------------------|--------------------|------------------|------------------|
| JU6 SHUNT LOCATION     | SELECT PIN       | CHANNEL          | CHANNEL ASSIGNMENT | CLAMP LEVEL (V)  | SYNC SOURCE      |
| Pins 1 and 2           | Connected to VCC | A                | CVBS               | 0.8              | Channel A        |
| Pins 1 and 2           | Connected to VCC | B                | Y                  | 0.8              | Channel A        |
| Pins 1 and 2           | Connected to VCC | C                | C                  | 1.6              | Channel A        |
| Pins 1 and 2           | Connected to VCC | D                | CVBS ASYNC         | 0.8              | Channel D        |
| Pins 2 and 3 (default) | Connected to GND | A                | CVBS               | 0.8              | Channel A        |
| Pins 2 and 3 (default) | Connected to GND | B                | R                  | 1.4              | Channel A        |
| Pins 2 and 3 (default) | Connected to GND | C                | G                  | 1.4              | Channel A        |
| Pins 2 and 3 (default) | Connected to GND | D                | B                  | 1.4              | Channel A        |
| Open (not installed)   | Floating         | A                | G (with sync)      | 0.8              | Channel A        |
| Open (not installed)   | Floating         | B                | R                  | 1.4              | Channel A        |
| Open (not installed)   | Floating         | C                | B                  | 1.4              | Channel A        |
| Open (not installed)   | Floating         | D                | CVBS ASYNC         | 0.8              | Channel D        |

Table 4. JU7 Functions (DISABLE)

| JU7 SHUNT LOCATION     | DISABLE PIN      | MAX7445 OUTPUT   |
|------------------------|------------------|------------------|
| Pins 1 and 2           | Connected to VCC | Outputs disabled |
| Pins 2 and 3 (default) | Connected to GND | Outputs enabled  |
| Open (not installed)   | Floating         | Undefined        |

Table 5. MAX7449 Channel Assignment

| EV KIT I/O LABELS   | CHANNEL ASSIGNMENT   |   CLAMP LEVEL (V) | SYNC SOURCE   |
|---------------------|----------------------|-------------------|---------------|
| IPB, OPB            | R                    |               1.4 | EXTSYNC       |
| IPC, OPC            | G                    |               1.4 | EXTSYNC       |
| IPD, OPD            | B                    |               1.4 | EXTSYNC       |

Note:

JU9 is closed.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7445 Evaluation Kit

## MAX7445 Evaluation Kit

Figure 1. MAX7445 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7445 Evaluation Kit

<!-- image -->

Figure 2. MAX7445 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7445 Evaluation Kit

Figure 3. MAX7445 EV Kit PC Board Layout-Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7445 Evaluation Kit

Figure 4. MAX7445 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7