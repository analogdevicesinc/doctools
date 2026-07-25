<!-- lastmod 2022-08-03 -->
## General Description

The MAX105 evaluation kit (EV kit) is a fully assembled and tested circuit board that contains all the components necessary to evaluate the performance of the MAX105, dual channel, 6-bit (800Msps), or the MAX107, dual channel, 6-bit (400Msps) high-speed analog-to-digital converter (ADC). The MAX105 ADC is able to process differential or single-ended analog inputs. The EV kit allows the user to evaluate the ADC with either type of signals. The digital output produced by the ADC can be easily sampled with a user-provided high-speed logic analyzer or data-acquisition system. The EV kit comes with the MAX105 installed. To evaluate the MAX107, replace the MAX105 with the MAX107.

## Component List

| DESIGNATION                                        |   QTY | DESCRIPTION                                                              |
|----------------------------------------------------|-------|--------------------------------------------------------------------------|
| C1, C5, C9, C13, C16, C18, C20, C22                |     8 | 47pF ±10%, +50V COG ceramic capacitors (0402) Murata GRM36COG470K050AD   |
| C2, C6, C10, C14, C15, C17, C19, C21, C24-C28, C30 |    14 | 0.01µF ±10%, +16V X7R ceramic capacitors (0402) Murata GRM36X7R103K016AD |
| C3, C4, C7, C8, C11, C12                           |     6 | 100pF ±5%, +50V COG ceramic capacitors (0402) Murata GRM36COG101J050AD   |
| C23, C29                                           |     2 | 10µF ±10%, +25V tantalum capacitors (CASE D) AVX TAJD106K025R            |
| L1-L4                                              |     4 | Ferrite beads 600 Ω at 100MHz, 500mA , 0.3 Ω DCR Murata BLM21A601R       |
| R1-R6                                              |     6 | 51.1 Ω ±1% resistors (0402)                                              |
| R7-R32                                             |    26 | 100 Ω ±1% resistors (0402)                                               |
| J1-J6                                              |     6 | SMA connectors (edge-mounted)                                            |
| JU1, JU2                                           |     0 | Not installed 2-pin headers                                              |
| JU4-JU55                                           |    52 | 2-pin headers                                                            |
| JU3                                                |     0 | Not installed 3-pin header                                               |
| AVCC, AGND, OVCC, OGND                             |     4 | Test point hooks                                                         |
| U1                                                 |     1 | MAX105ECS (80-pin TQFP-EP)                                               |
| None                                               |     1 | MAX105 PC board                                                          |
| None                                               |     1 | MAX105 data sheet                                                        |
| None                                               |     1 | MAX105 EV kit data sheet                                                 |

## ADC Selection Table

| PART      |   SPEED (Msps) |
|-----------|----------------|
| MAX105ECS |            800 |
| MAX107ECS |            400 |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Murata     | 814-237-1431 | 814-238-0490 |

Note: Please indicate that you are using the MAX105 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

## Features

- ♦ Two Matched 6-Bit, 800 Msps ADCs
- ♦ 0.8Vp-p Input Signal Range
- ♦ Demultiplexed Differential LVDS Outputs
- ♦ Square-Pin Headers for Easy Connection of Logic Analyzer to Digital Outputs
- ♦ Four-layer PC Board with Separate Analog and Digital Power and Ground Connections
- ♦ Fully Assembled and Tested with MAX105 Installed

## Ordering Information

| PART        | TEMP. RANGE     | IC PACKAGE   |
|-------------|-----------------|--------------|
| MAX105EVKIT | 0 ° C to 70 ° C | 80 TQFP-EP*  |

## MAX105 Evaluation Kit

## Quick Start

## Test Equipment Required

- DC power supplies: Digital +3.3V, 510mA

Analog +5.0V, 350mA

- Generator with low phase-noise for clock input (e.g., HP8662A, HP8663A, or equivalent)
- Two signal generators for analog signal inputs (e.g., HP8662A, HP8663A, or equivalent)
- Logic analyzer or data-acquisition system (e.g., HP16500C series, HP16517A 1.25Gbps state module for single-ended evaluation.
- User-selected analog bandpass filters (e.g., TTE Elliptical Bandpass Filter, or equivalent)
- Digital Voltmeter
- Baluns (e.g., MA/COM H-9-SMA)
- 50 Ω terminators with SMA connectors

The MAX105 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not turn on power supplies or enable function generators until all connections are completed.

- 1) Connect a signal generator with low phase-jitter to the clock inputs CLK- and CLK+ through a balun (Figure 1). For a single-ended clock input (Figure 2),  connect a 500mV (354mVRMS, +4dBm) amplitude from the signal generator to the CLK+ input and terminate the unused CLK- input with a 50 Ω termination resistor to AGND.
- 2) For differential operation, connect a ±380mV 270mVRMS (approximately -0.5dB FS) sine-wave test  signal  to  connector  A  of  the  balun.  Terminate connector B of the balun with a 50 Ω terminator. Attach connector C of the balun to the analog input VINI+ (VINQ+). Attach connector D of the balun to the analog input VINI- (Figure 1). For single-ended operation, apply the test signal to either VINI+ (VINQ+) or VINI- (VINQ-) and terminate the unused input with a 50 Ω resistor  to  AGND (Figure 2). For best results, use a narrow bandpass filter designed for the frequency of interest to reduce the harmonic distortion of the signal generator.
- 3) Phase-lock both the VINI and/or VINQ signal generators with the clock generator.
- 4) Connect a logic analyzer, such as the HP16500 with the  HP16517 plug-in module to monitor the I or Q channel of the MAX105. Note that the podlets are single-ended to ground and you may need to

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

remove the 100 Ω termination resistors R7-R32 to increase the logic signal swing. Reflections are absorbed by the back-terminated LVDS drivers.

Note: Two state modules are required to monitor both I and Q channel simultaneously.

- 5) Connect the logic analyzer clock to the DREADY+ output on the EV kit and set the logic analyzer to trigger on the falling edge of the DREADY+ signal.
- 6) Connect a +5V power supply to the pad marked AVCC. Connect the supply's ground to the pad marked AGND.

Note: MAX105 has separate AVCCI and AVCCQ supply pins.

- 7) Connect a +3.3V power supply to the pad marked OVCC. Connect the supply's ground to the pad marked OGND. Tie AGND and OGND together at the power supplies.

Note: MAX105 has separate OVCCI and OVCCQ supply pins.

- 8) Turn on both power supplies, then the signal sources. Capture the digitized outputs from the MAX105 with the logic analyzer and transfer the digital record to a PC for data analysis.

## Detailed Description

The MAX105 EV kit evaluates the performance of the MAX105 dual channel, 6-bit ADC at a maximum clock frequency of 800MHz (400MHz for MAX107). The MAX105 ADC can process differential or single-ended analog and clock inputs. The user may apply baluns to generate differential signals from a single-ended analog signal to the EV kit.

The EV kit's PC board incorporates a four-layer board design to optimize the performance of the MAX105 in a 50 Ω environment. Separate analog and digital ground planes minimize noise coupling between analog and digital signals. The EV kit requires a +5.0V power supply  applied to the analog power plane, and a +3.3V power supply applied to the digital power plane. Access to the outputs is provided through the two-pin headers (Table 1) all around the edge of the board. A silkscreen on the PC board's top layer indicates reference designations.

<!-- image -->

## MAX105 Evaluation Kit

Table 1. LVDS Outputs and Functional Description

| LVDS OUTPUT SIGNALS                                                                                 | EV KIT HEADER LOCATION                                                                | FUNCTIONAL DESCRIPTION                                                                                                                                                                                                                                    |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| P5I+, P5I- (MSB) P4I+, P4I- P3I+, P3I- P2I+, P2I- P1I+, P1I- P0I+, P0I- (LSB)                       | JU52, JU53 JU48, JU49 JU44, JU45 JU12, JU13 JU40, JU41 JU36, JU37                     | Primary in-phase differential outputs from MSB to LSB. '+' indicates the true value, '-' denotes the complementary outputs                                                                                                                                |
| A3I+, A3I- A2I+, A2I- A1I+, A1I- A0I+, A0I- (LSB) P5Q+, P5Q- (MSB) P4Q+, P4Q- P3Q+, P3Q- P2Q+, P2Q- | JU46, JU47 JU18, JU19 JU42, JU43 JU38, JU39 JU6, JU7 JU10, JU11 JU16, JU17 JU22, JU23 | Auxiliary in-phase differential outputs from MSB to LSB. '+' indicates the true value, '-' denotes the complementary outputs Primary quadrature differential outputs from MSB to LSB. '+' indicates the true value, '-' denotes the complementary outputs |
| P1Q+, P1Q- P0Q+, P0Q- (LSB) A5Q+, A5Q- (MSB) A4Q+, A4Q-                                             | JU27, JU26 JU31, JU30 JU4, JU5 JU8, JU9 JU14, JU15 JU20, JU21                         |                                                                                                                                                                                                                                                           |
| A3Q+, A3Q- A2Q+, A2Q- A1Q+, A1Q- A0Q+, A0Q- (LSB)                                                   | JU25, JU24 JU29, JU28                                                                 | Auxiliary quadrature differential outputs from MSB to LSB. '+' indicates the true value, '-' denotes the complementary outputs                                                                                                                            |
|                                                                                                     | JU33, JU32                                                                            | Out-of-range signal's true and complementary outputs                                                                                                                                                                                                      |
| DOR+, DOR-                                                                                          |                                                                                       |                                                                                                                                                                                                                                                           |
| DREADY+,                                                                                            | JU34, JU35                                                                            | Data Ready LVDS output latch clock. Output data changes on the rising edge                                                                                                                                                                                |
| DREADY-                                                                                             |                                                                                       | DREADY+                                                                                                                                                                                                                                                   |
|                                                                                                     |                                                                                       | of                                                                                                                                                                                                                                                        |

## Power Supplies

The MAX105 EV kit requires separate analog and digital power supplies for best performance. A +3.3V ±10% power supply is used to power the digital portion (OVCC) of the ADC. A separate +5.0V ±5% power supply is used to power the analog portion (AVCC) of the ADC. Ferrite beads are used to filter out high-frequency noise at the analog power supply. At 100MHz, the ferrite beads have an impedance of 600 Ω .

## Clock

The clock signals CLK± are AC-coupled from the SMA connectors J3 and J4. The DC-biasing level is internally set to the reference voltage. The MAX105's clock input resistance is 5k Ω .  However, the EV kit's clock input resistance is set by an external resistor to 50 Ω . An ACcoupled, differential sine-wave signal may be applied to  the  CLK± SMA connectors (Figure 3). The signal must not exceed a magnitude of 1.4VRMS. The typical clock frequency should be 800MHz for MAX105

<!-- image -->

## I/Q Input Signals

The input signals are AC-coupled. The DC biasing level is  internally  set  to  the  reference  voltage  VREF.  The MAX105's analog input resistance is 2k Ω per input. However, the EV kit's I/Q input resistance is set to 50 Ω by an external resistor. For single-ended operation, apply a signal to one of the analog inputs and terminate the opposite complimentary input with a 50 Ω resistor to ground.

Note: When a differential signal is applied to the ADC, the  positive  and  negative  input  pins  of  the  ADC  each receive half of the input signal supplied to the balun. A common mode voltage of +2.5V is established within the part and blocked by the AC-coupling capacitors.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

(400MHz for MAX107).

## MAX105 Evaluation Kit

## Reference

An on-chip reference is provided with a nominal +2.5V output. This voltage is then processed to drive the resistor  ladder  in  the  ADC  core.  A  buffered  reference voltage is also used as the DC-bias voltage for the analog input.

## Demultiplexing and LVDS Outputs

Each ADC provides six differential outputs (two's complement code) at 800MHz, which fan out to 12 differential  outputs at 400MHz after the on-chip demultiplexer. To interface with lower supply CMOS DSP chips, all outputs provide LVDS-compatible voltage levels. The LVDS outputs will have approximately ±270mV swing differential with a common mode around 1.25V. The differential output impedance is roughly 100 Ω . For details, refer to IEEE standard 1596.3.

*Note: To boost the output signal swing for singleended data capture with the HP16500C and HP16517A high-speed state module, all 100 Ω termination resistors (R7-R32) should be removed.

## Out-of-Range (DOR) Signal

The out-of-range signal (DOR+, DOR-) flags high when either the I or Q input is below -FS or above +FS. The out-of-range signal has the same latency as the ADC output data or is demultiplexed the same way. For an 800MHz system DOR+ and DOR- are clocked at 400MHz.

## Data Ready (DREADY) Output

In single-ended data capture mode the clock interface of  the  logic  analyzer should be connected to the DREADY output at headers JU34 or JU35 on the EV kit. Since both the primary and auxiliary outputs change on the rising  edge of DREADY, set the logic analyzer to trigger on the falling edge. DREADY and the data outputs are internally time aligned, which places the falling edge of DREADY in the approximate center of the valid data window, resulting in the maximum setup and hold time for the logic analyzer.

## Board Layout

The MAX105 EV kit is a four-layer PC board design (Figure 4), optimized for high-speed signals. The board is constructed from low-loss GETek core material which has a relative dielectric constant of 3.9 ( ε R = 3.9). The GETek material used in the MAX105 EV kit board offers improved high frequency and thermal properties over standard FR4 board material. All high-speed signals are routed with differential microstrip transmission lines.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 2. MAX105 EV kit Layers

| LAYER                  | DESCRIPTION                                                                                                                       |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Layer I, Top Layer     | Components, Headers, Connectors, Test Pads, AV CC , OV CC , AGND, OGND, Analog 50 Ω microstrip lines. 100 Ω Termination Resistors |
| Layer II, Ground Plane | AGND, AGNDI, AGNDQ, AGNDR, OGND, OGNDI, OGNDQ                                                                                     |
| Layer III, Power Plane | AV CC , AV CC I, AV CC Q, AV CC R, OV CC , OV CC I, OV CCQ                                                                        |
| Layer IV, Bottom Layer | AGND, Components                                                                                                                  |

## Special Layout Considerations

Special effort was made in the board layout to separate the analog and digital portions of the circuit. 50 Ω microstrip transmission lines are used for analog and clock inputs, as well as for all digital LVDS outputs. The power plane is separated into strips to provide isolation between different sections of the circuit (e.g., AVCCI and AVCCQ or OVCCI and OVCCQ). All differential outputs are properly terminated with 100 Ω termination resistors between true and complementary digital outputs.

The PC board comes in a circular shape to ensure the best possible trace length matching for the 50 Ω microstrip lines. The electrical lengths of the 50 Ω microstrip lines are matched to within a few picoseconds to minimize layout-dependent delays. The propagation delay on the MAX105 EV kit board is about 130ps/inch.

The line width for a differential microstrip is 2.5mils with a ground plane height of 14mils which is a standard GETek core thickness. Table 2 shows PC board layers of the EV kit.

<!-- image -->

## MAX105 Evaluation Kit

<!-- image -->

Figure 1. Typical Evaluation Setup with Differential Analog Inputs, Differential Clock Drive, and Single-Ended Data Capture

<!-- image -->

Figure 2. Typical Evaluation Setup with Single-Ended Analog Inputs, Single-Ended Clock Drive, and Single-Ended Data Capture

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX105 Evaluation Kit

Figure 3. AC-Coupled, Differential Clock Drive

<!-- image -->

Figure 4. PC Board Stacking

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX105 Evaluation Kit

<!-- image -->

Figure 5a. MAX105 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX105 Evaluation Kit

Figure 5b. MAX105 EV Kit Schematic (continued)

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX105 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 8. MAX105 EV Kit PC Board Layout-Inner Layer, Ground Plane

<!-- image -->

## MAX105 Evaluation Kit

Figure 7. MAX105 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 9. MAX105 EV Kit PC Board Layout-Inner Layer, Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX105 Evaluation Kit

Figure 10. MAX105 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 11. MAX105 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.