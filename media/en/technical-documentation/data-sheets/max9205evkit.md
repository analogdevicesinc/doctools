<!-- lastmod 2022-08-02 -->
## General Description

The MAX9205 evaluation kit (EV kit) is a fully assembled and tested circuit board that simplifies the evaluation of the MAX9205 400Mbps, 10-bit serializer and the MAX9206 400Mbps, 10-bit deserializer. The MAX9205 IC transforms 10-bit parallel LVCMOS/LVTTL data into a serial high-speed bus low-voltage differential signaling (BLVDS) data stream. The MAX9206 accepts serial data from the MAX9205 and transforms it back to 10-bitwide LVCMOS/LVTTL parallel data.

The EV kit requires a single 3.3V supply and a reference clock input with a range of 16MHz to 40MHz to operate. The 10-bit parallel input data is connected to a 24-pin header and the output data is sampled at a separate 24-pin header. The EV kit circuit can be modified to  isolate  and  evaluate  the  MAX9205 and MAX9206 independently. The MAX9205 and MAX9206 serializer/deserializer pair can be replaced with the MAX9207 and MAX9208 serializer/deserializer pair that operates at  a  higher maximum data-transfer speed of 600Mbps with a clock input frequency of 40MHz to 60MHz.

| DESIGNATION                |   QTY | DESCRIPTION                                                                                 |
|----------------------------|-------|---------------------------------------------------------------------------------------------|
| C1-C4                      |     4 | 10µF ± 20%, 10V tantalum capacitors (B) AVX TAJB106M010 or Kemet T494B106K010AS             |
| C5-C11, C40                |     7 | 0.001µF ± 5%, 50V ceramic capacitors (0603) TDK C1608X7R1H102KT or Murata GRM39X7R102J050AD |
| C12-C18, C21-C25, C39, C41 |    14 | 0.1µF ± 10%, 16V ceramic capacitors (0603) TDK C1608X7R1C104KT or Murata GRM39X7R104K016AD  |
| C19, C20                   |     2 | 5.0pF, 50V COG ceramic capacitors (0603) TDK C1608COG1H050CT Murata GRM39COG050B050AD       |
| C26                        |     1 | 2.2µF ± 20%, 10V tantalum capacitor (A) AVX TAJA225M010R                                    |

- ♦ 3.3V Single Supply
- ♦ 10-Bit Parallel LVCMOS/LVTTL Interface
- ♦ Allows Common-Mode Testing
- ♦ Independent Evaluation of Serializer (MAX9205) and Deserializer (MAX9206)
- ♦ Allows Testing of Twisted-Pair Cable
- ♦ Low-Voltage, Low-Power Operation
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX9205EVKIT | 0°C to +70°C | 28 SSOP      |

## Component List

| DESIGNATION               |   QTY | DESCRIPTION                                                                             |
|---------------------------|-------|-----------------------------------------------------------------------------------------|
| C27-C38                   |    12 | 10pF, 50V COG ceramic capacitors (0603) TDK C1608COG1H100DT or Murata GRM39COG100D050AD |
| J1, J2                    |     2 | 2 x 12-pin headers                                                                      |
| JU1, JU3-JU7              |     6 | 3-pin headers                                                                           |
| JU2, JU9, JU10, JU12-JU27 |    19 | 2-pin headers                                                                           |
| R1-R10, R97               |    11 | 10k Ω ± 5% resistors (0603)                                                             |
| R11-R20, R79-R89, R91-R95 |     0 | Not installed, resistor (0603)                                                          |
| R21-R39, R96              |    20 | 49.9 Ω ± 1% resistors (0603)                                                            |
| R40                       |     1 | 100 Ω ± 1% resistor (0603)                                                              |
| R41-R50, R75              |     0 | Not installed, resistor (0805)                                                          |
| R51, R52                  |     0 | Not installed, resistor (1206)                                                          |
| R53-R74, R77, R78         |    24 | 499 Ω ± 1% resistors (0603)                                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

Features

## MAX9205 Evaluation Kit

## Component List (cont'd)

| DESIGNATION                       |   QTY | DESCRIPTION                                                                         |
|-----------------------------------|-------|-------------------------------------------------------------------------------------|
| SYNC2, PWRDN1 , DEN, PWRDN2 , REN |     0 | Not installed, SMA PC-mount edge connector                                          |
| TCLK, REFCLK, INA, INB            |     4 | SMA PC-mount edge connectors                                                        |
| U1                                |     1 | MAX9205EAI (28-pin SSOP)                                                            |
| U2                                |     1 | MAX9206EAI (28-pin SSOP)                                                            |
| U3                                |     1 | Buffer/driver three-state output (48-pin TSSOP) Texas Instruments SN74ALVTH16244DGG |
| None                              |     6 | Shunts (JU1, JU3-JU7)                                                               |
| None                              |     1 | MAX9205 PC board                                                                    |
| None                              |     1 | MAX9205 data sheet                                                                  |
| None                              |     1 | MAX9205 EV kit data sheet                                                           |

## Quick Start

The MAX9205 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for EV kit circuit board operation. Do not turn on power supply or enable the function generators until all connections are completed.

## Recommended Equipment

- 3.3VDC power supply
- Data generator for LVCMOS/LVTTL 10-bit parallel signal input (e.g., Tektronix DG2020)
- Clock pulse generator (e.g., HP 8130A)
- Logic analyzer or data-acquisition system
- High-speed oscilloscope

## Procedure

- 1) Verify  that  there  is  a  shunt  across  pins  1  and  2  of jumpers JU1 and JU3-JU7.
- 2) Verify that JU2 does not have a shunt.
- 3) Connect the 3.3V power supply to VCC1. Connect the ground terminal of this supply to GND1.
- 4) Connect the data generator to the 24-pin connector J1 and  set  it  to  generate  10-bit  parallel  data  at LVCMOS/LVTTL levels (high-level input from 2.0V to VCC and low-level input from 0.8V to GND). See Table 2 for input bit locations.
- 5) Connect the pulse generator to SMA connector TCLK and set it for an output with a frequency of

## Part Selection Table

| PART       | TYPE         | REF CLOCK RANGE (MHz)   |   SERIAL DATA TRANSFER RATE (Mbps) (max) |
|------------|--------------|-------------------------|------------------------------------------|
| MAX9205EAI | Serializer   | 16 to 40                |                                      400 |
| MAX9206EAI | Deserializer | 16 to 40                |                                      400 |
| MAX9207EAI | Serializer   | 40 to 60                |                                      600 |
| MAX9208EAI | Deserializer | 40 to 60                |                                      600 |

16MHz to 40MHz. Use LVCMOS/LVTTL levels. Note that  the  TCLK  SMA connector is terminated with a 50 Ω resistor.  Synchronize the pulse generator with the data generator.

- 6) Set the data-acquisition system for LVCMOS/LVTTLlevel signal input.
- 7) Connect the data-acquisition system to the signal output 24-pin connector J2. See Table 2 for output bit locations.
- 8) Turn on the power supply.
- 9) Enable the pulse generator.
- 10) Enable the data generator.
- 11) Enable the data-acquisition system and begin sampling data.

## Detailed Description

The MAX9205 EV kit is a fully assembled and tested circuit board that simplifies the evaluation of the MAX9205 400Mbps maximum data transfer rate, 10-bit serializer and the MAX9206 400Mbps maximum data transfer data rate, 10-bit deserializer. The serializer/deserializer data transfer starts with the serializer initially locking onto the reference clock and then sending synchronizing patterns to the deserializer. Once the deserializer locks onto the embedded clock in the patterns, it pulls the  SYNC pin low on the serializer, signaling that it is ready to receive the serial data. The serializer transforms the LVCMOS/LVTTL-level 10-bit parallel data pattern  into  a  serial  high-speed  BLVDS  data  stream.  The interconnect is terminated with 100 Ω at each end of the differential  bus for a total 50 Ω load. The MAX9206 deserializer accepts the serial data from the MAX9205 and transforms it back to 10-bit-wide LVCMOS/LVTTL parallel data.

The EV kit requires a single 3.3V supply to operate and a reference clock input in the 16MHz to 40MHz range. The 10-bit parallel input data can be supplied to the 24pin header J1 with a data generator running at the

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

same frequency as the reference clock or the bits can be configured by installing shunts across header J1 pins. The output 10-bit parallel data can be sampled at 24-pin header J2 or individual bits can be tested at the various 2-pin headers installed on the EV kit.

The EV kit circuit can be modified to isolate and evaluate  the  MAX9205 and MAX9206 independently. While isolated,  the  serializer's  output  can  be  verified  with  a differential  probe  or  connected  to  category-5  twistedpair cable. The deserializer's required LVDS input can be supplied to the EV kit through category-5 twistedpair wire or SMA connectors.

The MAX9205 and MAX9206 serializer/deserializer pair can be replaced with the MAX9207 and MAX9208 pair for a higher maximum transfer speed rate of 600Mbps with a maximum clock frequency of 60MHz.

## Power Supplies

The MAX9205 EV kit operates from a single 3.3V power supply. The serializer and deserializer power and ground planes are connected with PC board traces through resistor pads R49 and R50. The EV kit circuit can be divided into two independent circuits, a serializer  and deserializer circuit with dedicated power and ground planes, by cutting open the PC board shorting traces at resistor pads R49 and R50. If the EV kit circuit is  divided into two separate circuits, each circuit requires a 3.3V power supply connected at VCC1 (serializer  circuit)  and  VCC2  (deserializer  circuit). Independent power and ground planes allow measurements of the deserializer's response to ground shift or other common-mode effects. See the Serializer/ Deserializer Circuits section.

## Clock Signal

The  MAX9205  EV  kit  requires  a  square-wave LVCMOS/LVTTL input clock signal with a frequency in the  16MHz to 40MHz range. The clock signal can be connected to the TCLK SMA connector or to pin 24 in 24-pin header J1. For faster data transfer rates, replace the MAX9205 (U1) and MAX9206 (U2) serializer/deserializer pair with the MAX9207/MAX9208 serializer/deserializer pair and supply a clock signal with a frequency of 40MHz to 60MHz. During independent evaluation of the serializer and deserializer, supply a clock signal to each circuit. See the Serializer/Deserializer Circuits section. The clock input signal to the serializer and deserializer can be monitored at 2-pin headers JU14 and JU15. See Table 1 for details.

## Input Signal

The MAX9205 EV kit accepts 10-bit parallel data at LVCMOS/LVTTL levels (high-level input from 2.0V to

<!-- image -->

## MAX9205 Evaluation Kit

## Table 1. Clock Signal Monitoring Points

| HEADER   | SIGNAL                      | CONNECTOR                 |
|----------|-----------------------------|---------------------------|
| JU14     | Clock input to serializer   | Differential signal probe |
| JU15     | Clock input to deserializer | Differential signal probe |

VCC and low-level input from 0.8V to GND). The 10-bit pattern can be supplied to the EV kit by connecting a data generator to the 24-pin header J1 or by pulling selected J1 bit pins to a low LVCMOS/LVTTL state. All the bit  pins  on  J1  are  pulled  high  (VCC1)  with  10k Ω pullup resistors installed on the 10 input signal lines. See Table 2 for input bit locations on the 24-pin header J1.  If  the  serializer  circuit  is  operated  independently, either the parallel input can be serialized or a sync pin can be driven high to generate sync patterns. If the deserializer is  operated independently, a 12-bit serial pattern (10 data bits plus 2 frame bits) must be supplied to the deserializer circuit. Refer to the Initialization section in the MAX9206/MAX9208 data sheet for details on the deserializer's input requirements. See the Serializer/Deserializer Circuits section for further discussion of independent evaluation.

## Output Signal

The MAX9205 EV kit outputs 10-bit parallel data at LVCMOS/LVTTL levels on the 24-pin header J2. To sample the 10-bit pattern, connect an acquisition system to J2 or sample the individual bits with a 2-pin header probe. See Table 2 for the output bits' location on the 24-pin header J2 or Table 3 for the location of the individual output bits. The recovered clock signal is located on pin 23 of J2 and can be used as the external clock input for the acquisition system.

## Power-Down Reset

If  no  output  signal  is  detected  from  the  deserializer, perform a power-down reset on the serializer by momentarily pulling low the PWRDN pin  using  jumper JU4. (See Table 5 for JU4 operation.)

## Serializer/Deserializer Circuits

The MAX9205 EV kit board contains a 10-bit parallel serializer  (MAX9205)/deserializer (MAX9206) circuit that  only  requires  a  3.3V  input  power  supply,  a  10-bit parallel pattern, an acquisition system, and a clock signal for simple board evaluation. JU2 is provided to test the serializer high-impedance (Z) delay time. The EV kit circuit can be divided into two circuits, a serializer and a deserializer circuit, for independent evaluation. To di-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9205 Evaluation Kit

## Table 2. Input/Output Bit Location

| SIGNAL    | BIT 0   | BIT 1   | BIT 2   | BIT 3   | BIT 4   | BIT 5   | BIT 6   | BIT 7   | BIT 8   | BIT 9   |
|-----------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|
| Input/J1  | J1-4    | J1-6    | J1-8    | J1-10   | J1-12   | J1-14   | J1-16   | J1-18   | J1-20   | J1-22   |
| Output/J2 | J2-1    | J2-3    | J2-5    | J2-7    | J2-9    | J2-11   | J2-13   | J2-15   | J2-17   | J2-19   |

Table 3. Individual Parallel Outputs

| HEADER   | BIT/SIGNAL   |
|----------|--------------|
| JU16     | 0            |
| JU17     | 1            |
| JU18     | 2            |
| JU19     | 3            |
| JU20*    | 4            |
| JU21*    | 5            |
| JU22*    | 6            |
| JU23     | 7            |
| JU24     | 8            |
| JU25     | 9            |
| JU26*    | LOCK         |
| JU27*    | RCLK         |

vide the circuit into two circuits, cut open the PC board trace shorting the resistor pads at R41-R45, R49, R50, R75, remove resistor R39, and install a shorting resistor on R48.

The MAX9205 (U1) serializer circuit generates two types of signals, synchronization and serialized data patterns:

- 1) Generate synchronization (SYNC) patterns by applying a high-state LVCMOS signal to pin 2 of the 24pin header J1 or the SYNC2 PC board pad.
- 2) Generate serialized data patterns by asserting a low-state LVCMOS signal to pin 2 of the 24-pin header J1 and provide 10-bit parallel data to the EV kit.  For  data  and clock input signal details, see the Input Signal and Clock Signal sections, respectively.

The serializer's BLVDS output signal is a 12-bit serial pattern that consists of a high-state start bit and lowstate end bit, added internally and used by the deserializer,  to  the  10-bit  parallel  input  data.  Refer  to  the MAX9205/MAX9207 data sheet for details. To monitor the  BLVDS output signal, connect a differential signal probe to JU9 (noninverting single-ended signal) or JU10 (inverting single-ended signal) or connect twisted-pair cable to PC board vias 1A (noninverting signal)

## Table 4. LVDS Signals and Connections

| SIGNAL                  | NONINVERTING SIGNAL          | INVERTING SIGNAL             | CONNECTOR                                         |
|-------------------------|------------------------------|------------------------------|---------------------------------------------------|
| Serializer (U1) Output  | PC board via 1A              | PC board via 1B              | Plated through holes for twisted- pair (TP) cable |
| Serializer (U1) Output  | Header JU9                   | Header JU10                  | Differential signal probe                         |
| Deserializer (U2) Input | PC board via 2A (user input) | PC board via 2B (user input) | Plated through holes for TP cable                 |
| Deserializer (U2) Input | Header JU12                  | Header JU13                  | Differential signal probe                         |

and 1B (inverting signal). Terminate the twisted pair at the far  end  with  a  100 Ω resistor  for  a  total  50 Ω load. See Table 4 for locations and connector type for the LVDS serial signal output.

To evaluate the MAX9206 (U2) deserializer circuit, provide a 12-bit BLVDS serial input and a clock signal to the REFCLK SMA connector. Bit 0 of the 12-bit serial input pattern should be BLVDS high state and bit 11 should be BLVDS low state with data bit in between. Refer to the MAX9206/MAX9208 data sheet for further details on the start and end bits.

The 12-bit BLVDS pattern can be supplied to the deserializer  circuit  in  two  ways:  with  twisted-pair  cable  or SMA connectors:

- 1)  Using twisted-pair cable, connect the serial input signal to PC board vias 2A (noninverting signal) and 2B (inverting signal). Terminate the twisted-pair cable at the transmitting end with a 100 Ω resistor for a total 50 Ω load (including the 100 Ω resistor in parallel at the deserializer input).
- 2) With SMA connectors, install shorting resistors at the R46 and R47 PC board pads and connect the serial signal through SMA connectors INA (noninverting signal) and INB (inverting signal). Monitor the integri-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 5. Jumper Settings

| JUMPER   | SHUNT STATUS   | PIN CONNECTION    | EV KIT OPERATION                                                 |
|----------|----------------|-------------------|------------------------------------------------------------------|
| JU1      | 1 and 2        | TCLK_R/ F to VCC1 | Serializer data loads on TCLK rising edge                        |
| JU1      | 2 and 3        | TCLK_R/ F to GND1 | Serializer data loads on TCLK falling edge                       |
| JU2      | Installed      | None              | Common-mode voltage for serializer high-Z delay test             |
| JU2      | Open           | None              | V OS (offset-voltage probe point)                                |
| JU3      | 1 and 2        | DEN to VCC1       | Serial data output enabled                                       |
| JU3      | 2 and 3        | DEN to GND1       | Serial data output in high-Z                                     |
| JU4      | 1 and 2        | PWRDN to VCC1     | Serializer in normal operation                                   |
| JU4      | 2 and 3        | PWRDN to GND1     | Serializer in sleep mode, outputs in high-Z                      |
| JU5      | 1 and 2        | REN to VCC2       | Deserializer parallel outputs enabled                            |
| JU5      | 2 and 3        | REN to GND2       | Deserializer ROUT0-ROUT9 and RCLK pins in high-Z, LOCK is active |
| JU6      | 1 and 2        | PWRDN to VCC2     | Deserializer in normal operation                                 |
| JU6      | 2 and 3        | PWRDN to GND2     | Deserializer outputs (all) in high-Z                             |
| JU7      | 1 and 2        | RCLK_R/ F to VCC2 | Deserializer output data on RCLK rising edge                     |
| JU7      | 2 and 3        | RCLK_R/ F to GND2 | Deserializer output data on RCLK falling edge                    |

## Component Suppliers

| SUPPLIER         | PHONE        | FAX          | WEBSITE               |
|------------------|--------------|--------------|-----------------------|
| AVX              | 843-448-9411 | 843-448-1943 | www.avxcorp.com       |
| Kemet            | 864-963-6300 | 864-963-6322 | www.kemet.com         |
| Murata           | 770-436-1300 | 770-436-3030 | www.murata.com        |
| TDK              | 847-803-6100 | 847-390-6296 | www.component.tdk.com |
| TexasInstruments | 972-644-5580 | 214-480-7800 | www.ti.com            |

Note: Please indicate that you are using the MAX9205 when contacting these component suppliers.

ty of the LVDS input signal by connecting a differential  signal  probe  to  jumpers  JU12 (noninverting signal) or JU13 (inverting signal). See Table 4 for locations and connector type for the serial input. To evaluate the output signal of the deserializer, see the Output Signal section. If LOCK is  not  low  (check JU26 or J2-23), send 200 or more synchronization patterns to the deserializer to lock onto the serial input.

## Jumper Settings

The MAX9205 EV kit circuit contains several jumpers that allow the user to put the serializer and deserializer into several operational modes. See Table 5 for jumper settings and EV kit operation descriptions.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Terminations and Layout

All signal lines are 50 Ω controlled-impedance traces. All the differential output signal traces are terminated with 100 Ω resistors at each end. Each differential output pair is laid out with equal trace length. The EV kit is laid out as a four-layer board to minimize noise interference.

## MAX9205 Evaluation Kit

## MAX9205 Evaluation Kit

Figure 1. MAX9205 EV Kit Schematic-Serializer

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9205 Evaluation Kit

<!-- image -->

Figure 2. MAX9205 EV Kit Schematic-Deserializer (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9205 Evaluation Kit

Figure 2. MAX9205 EV Kit Schematic-Deserializer (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9205 Evaluation Kit

<!-- image -->

Figure 3. MAX9205 EV Kit Component Placement Guide-Component Side

Figure 4. MAX9205 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX9205 EV Kit PC Board Layout-Ground Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9205 Evaluation Kit

Figure 8. MAX9205 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10