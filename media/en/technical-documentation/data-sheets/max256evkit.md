<!-- lastmod 2022-08-02 -->
## General Description

The MAX256 evaluation kit (EV kit) is a fully assembled and tested PCB that contains a 3W isolated H-bridge DC-DC converter. The circuit is configured for unregulated output voltages of approximately +5V and -5V (with respect to an isolated ground). Output current is up to 600mA from either output, or 300mA from each of the two outputs. Input power for the circuit is provided from a +5VDC source, or operates at any input voltage down to +3V with a corresponding reduction in the output voltages.

The EV kit provides greater than 85% overall efficiency at +5V between 250mW and 2W output power using an H-bridge DC-DC converter topology. Input ripple current  and radiated noise are minimized by the inherent balanced nature of the design with no interruption in the input current. Undervoltage lockout (UVLO) and thermal shutdown provide for a robust 3W isolated supply. The  surface-mount  transformer  provides  up  to 1500VRMS galvanic isolation with each output powered from a center-tapped full-wave rectifier circuit to reduce output voltage ripple.

Operation at 400kHz allows the use of ceramic output capacitors and a small transformer.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1            |     1 | 10µF ±10%, 10V X7R ceramic capacitor (1206) Murata GRM31CR71A106K   |
| C2            |     1 | 0.47µF ±10%, 16V X7R ceramic capacitor (0805) Murata GRM219R71C474K |
| C3, C4        |     2 | 0.1µF ±10%, 25V X7R ceramic capacitors (0805) Murata GRM21BR71E104K |
| D1-D4         |     4 | 30V, 1A Schottky diodes (SOD-123) Diodes Inc. B130LAW               |
| JU1           |     1 | 3-pin header                                                        |

<!-- image -->

Features

- ♦ +3V to +5VDC Input Range
- ♦ Isolated Outputs
- +VOUT: +5V Provides Up to 300mA
- -VOUT: -5V Provides Up to 300mA
- ♦ 87% Overall Efficiency at +5V Input and 200mA Load
- ♦ Center-Tapped, Full-Wave Rectifier Output
- ♦ 400kHz Switching Frequency
- ♦ 2.7V Undervoltage Lockout (UVLO)
- ♦ Designed for 1500VRMS Isolation
- ♦ Low-Cost, Integrated-FET H-Bridge Design
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE    | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX256EVKIT+ | 0°C to +70°C* | 8 SO-EP †    |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| JU2           |     1 | 2-pin header                                                                  |
| R1            |     1 | 39.2k Ω ±1% resistor (0603)                                                   |
| R2            |     1 | 100k Ω ±5% resistor (0603)                                                    |
| R3, R4        |     0 | Not installed, resistors (0805) (0 Ω ±5% resistors recommended)               |
| R5            |     1 | 0 Ω ±5% resistor (0805)                                                       |
| T1            |     1 | 3W 1:1:2.6:2.6 turn transformer (8-pin gull wing) HALO Electronics TGM-H281NF |
| U1            |     1 | MAX256ASA+ (8-pin SO-EP)                                                      |
| -             |     2 | Shunts (JU1, JU2)                                                             |
| -             |     4 | Rubber bumpers                                                                |
| -             |     1 | PCB: MAX256EVKIT+                                                             |

## MAX256 Evaluation Kit

## Procedure

The MAX256 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect a voltmeter to the +VOUT pad and SGND.
- 2) Connect the second voltmeter to the -VOUT pad and SGND.
- 3) Connect a 1A meter in series with the 100mA load to  +VOUT. Connect the load ground to the SGND PC pad.
- 4) Connect the second 1A meter in series with the 100mA load to -VOUT. Connect the load ground to the SGND PC pads.
- 5) Verify  that  a  shunt  is  installed  across  pins  2-3  of jumper JU1 (400kHz internal oscillator) and that a shunt is not installed across the pins of jumper JU2 (mode = enabled).
- 6) Connect the +5V power supply to the VCC pad. Connect the power supply's ground to the GND pad.
- 7) Turn on the power supply and verify that the voltmeter at +VOUT reads approximately +6V.
- 8) Verify  that  the  voltmeter  at  -VOUT  reads  approximately -6V.

The +5V supply powering the MAX256 EV kit must be current-limited at 1A and the output load current for each output limited to less than 300mA.

## Detailed Description

The MAX256 EV kit is a 3W, isolated H-bridge DC-DC converter that provides approximately +5V and -5V with respect to an isolated ground. Either of the outputs provides up to approximately 600mA when operated from a +5V supply. The total current is limited to approximately 600mA. The EV kit circuit should be powered from a +5V source capable of at least 800mA, but can also be operated at lower voltages consistent with the 2.7V UVLO limit.

The MAX256 is an integrated primary-side controller and H-bridge driver for isolated power-supply circuits. The device contains an on-board oscillator, protection circuitry,  and  internal  H-bridge  FET  drivers  to  provide up to 3W of power to the primary winding of a transformer. The MAX256 operates using the internal programmable oscillator, or can be driven by an external clock for improved EMI performance. Regardless of the clock source used, an internal flip-flop stage guarantees a fixed 50% duty cycle to prevent DC current flow in the transformer.

The MAX256 operates from a single-supply voltage and includes UVLO for controlled startup. The device prevents cross-conduction of the H-bridge MOSFETs by implementing break-before-make switching. Thermal shutdown circuitry provides additional protection against damage due to overtemperature conditions.

The MAX256 IC's UVLO provides controlled turn-on during power-up and during brownouts. If the input voltage at VCC falls below 1.9V (typ), the MAX256 IC shuts down. The MAX256 driver switches nominally at 400kHz frequency, set by resistor R1. The switchingfrequency duty cycle is fixed at 50% to control energy transfer to the isolated outputs.

The PCB is designed for 1500VRMS isolation, with 300 mils spacing between the GND and SGND planes. The bottom PCB GND plane under U1 is utilized as a thermal heatsink for power dissipation of the MAX256 IC's

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE                 |
|-----------------------|--------------|-------------------------|
| Diodes Inc.           | 805-446-4800 | www.diodes.com          |
| HALO Electronics      | 650-903-3800 | www.haloelectronics.com |
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com          |

Note: Indicate that you are using the MAX256 when contacting these component suppliers.

## Quick Start

## Required Equipment

- One 5V, 1A current-limited power supply with a built-in current meter
- Two voltmeters
- Two 1A meters
- Two 100mA loads (or 51 Ω resistors)

thermally enhanced SO package. Test points TP1 (GND) and TP2 (SGND) are provided on the PCB for probing the respective ground plane, or to connect the GND to SGND planes for nonisolated evaluation of the circuit.

## Jumper Configurations

## External/Internal Oscillator, Clock Modes, and Shutdown Control

The MAX256 EV kit features two multifunction jumpers that set the MAX256 IC's modes of operation. Jumpers JU1 and JU2 configure the circuit for one of several modes: an externally programmable mode, a MAX256 internal oscillator mode, or a clock mode using an externally supplied TTL/CMOS clock. Each mode demonstrates the MAX256 shutdown feature to reduce current.

Table 1 lists the externally programmable (default) mode configuration, Table 2 lists the internal oscillatormode configuration, and Table 3 lists the configuration for  a  clock  mode. See the respective table for the selectable jumper options to configure a specific mode of operation.

For the clock mode, connect an external square-wave clock to the MAX256 EV kit CLOCK and GND pads. The TTL/CMOS square-wave clock source must provide the following signal qualities:

- Output voltage:

Logic-low = 0 to 0.8V Logic-high = 2.0V to VCC

- ·
- Output frequency: 200kHz to 2MHz*
- Duty cycle:

40% to 60%

*Observe transformer ET product limitations. Refer to the MAX256 data sheet for details.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX256 Evaluation Kit

## Evaluating Other Transformer Configurations

Transformer T1 Configuration and Output Voltages The MAX256 EV kit PCB layout provides an easy method to reconfigure transformer T1 primary windings for  series  (default)  or  parallel  configuration.  Changing the primary winding series/parallel configuration changes the circuit output voltages and available maximum currents. Surface-mount (0805 case) resistors R3, R4, and R5 configure the primary windings. Two extra resistors for R3 and R4 pads are included with the EV kit in a sealed bag. See Table 4 for configuring the primary windings

## H-Bridge Converter Output and Documentation

If  none  of  these  configurations  are  suitable  for  your needs contact your transformer vendor. A custom design may be less expensive than you expect, especially if based on an existing design.

## MAX256 Evaluation Kit

## Table 1. Externally Programmable (Default) Mode (400kHz) and Shutdown Control

| JU1 SHUNT LOCATION   | MAX256 CK_RS PIN             | JU2 SHUNT LOCATION   | MAX256 MODE PIN             | OSCILLATOR MODE                         |
|----------------------|------------------------------|----------------------|-----------------------------|-----------------------------------------|
| 2-3                  | Connected to GND through R1* | Not installed        | Connected to VCC through R2 | Internal oscillator switching at 400kHz |
| 2-3                  | Connected to GND through R1* | Installed            | Connected to GND            | Shutdown                                |

## Table 2. Internal Oscillator Mode (100kHz*) and Shutdown Control

| JU1 SHUNT LOCATION   | MAX256 CK_RS PIN           | JU2 SHUNT LOCATION   | MAX256 MODE PIN             | OSCILLATOR MODE                          |
|----------------------|----------------------------|----------------------|-----------------------------|------------------------------------------|
| Not installed*       | Internally connects to GND | Not installed        | Connected to VCC through R2 | Internal oscillator switching at 100kHz* |
| Not installed        | Internally connects to GND | Installed            | Connected to GND            | Shutdown                                 |

## Table 3. Clock Mode and Shutdown Control

| JU1 SHUNT LOCATION   | MAX256 CK_RS PIN           | JU2 SHUNT LOCATION   | MAX256 MODE PIN   | CLOCK MODE                                  |
|----------------------|----------------------------|----------------------|-------------------|---------------------------------------------|
| 1-2                  | Connected to CLOCK PCB pad | Installed*           | Connected to GND  | U1 switches at 1/2 external clock frequency |
| 1-2                  | Connected to CLOCK PCB pad | Installed*           | Connected to GND  | Shutdown when external clock stops (0Hz)    |

## Table 4. Transformer Primary Configuration

| PRIMARY CONFIGURATION   | R3   | R4   | R5   | +VOUT AT 1.5W   | -VOUT AT 1.5W   |
|-------------------------|------|------|------|-----------------|-----------------|
| Series*                 | Open | Open | 0 Ω  | +6V             | -6V             |
| -                       | -    | -    | -    | -               | -               |
| Parallel                | 0 Ω  | 0 Ω  | Open | +12V            | -12V            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. T1 Series Primary: +VOUT Voltage vs. Output Current (+VOUT to SGND Loading)

<!-- image -->

Figure 2. T1 Series Primary: ±VOUT Voltage vs. Output Current (+VOUT to -VOUT Loading)

<!-- image -->

## MAX256 Evaluation Kit

Figure 3. T1 Parallel Primary: +VOUT Voltage vs. Output Current (+VOUT to SGND Loading)

<!-- image -->

Figure 4. T1 Parallel Primary: ±VOUT Voltage vs. Output Current (+VOUT to -VOUT Loading)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX256 Evaluation Kit

<!-- image -->

Figure 5. MAX256 EV Kit Schematic

Figure 6. MAX256 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 7. MAX256 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 8. MAX256 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX256 Evaluation Kit

Figure 9. MAX256 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7