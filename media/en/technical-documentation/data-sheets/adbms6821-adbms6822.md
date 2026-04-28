<!-- lastmod 2024-07-19 -->
<!-- image -->

## FEATURES

- Up to 2 Mbps isolated bidirectional serial data communications
- Drop in compatible: single (ADBMS6821) and dual (ADBMS6822)
- Fully independent dual transceivers (ADBMS6822)
- Simple galvanic isolation using capacitors or transformers
- Bidirectional interface over a single twisted pair
- Supports cable lengths up to 100 meters
- Very low EMI susceptibility and emissions
- LPCM support for ADBMS battery monitors
- Interrupt output for LPCM system wake-up
- 4 Mbps unidirectional mode
- Requires no software changes in most SPI systems
- Ultra-low idle current
- Automatic interface wake-up detection
- Operating temperature range: -40°C to +125°C
- 3.0 V to 5.5 V isoSPI driver power supply
- 1.7 V to 5.5 V interface to microcontrollers
- 3.0 V to 30 V input for powering wake-up and monitoring functions (12 V battery compatible)
- Available in 32-lead, side solderable LFCSP package
- AEC-Q100 qualified for automotive applications

## APPLICATIONS

- Electric and hybrid electric vehicles
- Backup battery systems
- Industrial networking
- Remote sensors

## TYPICAL APPLICATION CIRCUIT

A typical application of the ADBMS6822 in a system with the ADBMS6815 battery monitor is shown in Figure 1.

1 Protected by U.S. patents, including 8,908,779.

## ADBMS6821/ADBMS6822

## Single/Dual isoSPI Transceiver

Figure 1. Typical Application Circuit

<!-- image -->

## GENERAL DESCRIPTION

The ADBMS6821 1  (single) and ADBMS6822 1 (dual) provide bidirectional isolated serial-port interface (isoSPI ™ ) communications between two isolated devices through a single twisted pair connection for each data link. Each transceiver encodes logic states into signals that are transmitted across an isolation barrier to another transceiver. The receiving device decodes the transmission and drives the peripheral bus to the appropriate logic states. The isolation barrier can be bridged by capacitors or by a pulse transformer to achieve hundreds of volts of isolation.

The ADBMS6821/ADBMS6822 transceivers drive differential signals using matched source and sink currents, which eliminate the requirement for a transformer center tap and reducing electromagnetic interference (EMI). Precision window comparators in the receiver detect the differential signals.

The transceivers can be paired with advanced ADBMS stack monitors to enable cell voltage and sensor monitoring even while the system controller is powered down (low-power cell monitoring, or LPCM). The transceivers provide a timeout function that wakes up or alerts the system when a pass heartbeat message has not been received in the programmed time period.

Throughout this data sheet, all pin names refer to both transceivers on the ADBMS6822. For example, VDD refers to both VDD and VDD2.

## TABLE OF CONTENTS

| Features................................................................ Applications........................................................... Typical Application Circuit......................................1 General Description...............................................1 Functional Block Diagram......................................3 Specifications........................................................   | 1 1                                                                                                                                                                                       | Receiver Common-Mode Bias......................... SPI Configuration.............................................19 Setting Clock Phase and Polarity ....................19               | 19                                                                                                                                                                                        |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                           | Transceiver Modes...........................................19                                                                                                                            |                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                           | isoSPI State Diagram.......................................20                                                                                                                             |                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                                                                                                                  | 4                                                                                                                                                                                         | Power Supplies................................................                                                                                                                            | 20                                                                                                                                                                                        |
| Power-Supply Specifications..............................4                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                           | Supply Current.................................................                                                                                                                           | 20                                                                                                                                                                                        |
| LPCM Timeout Specifications............................                                                                                                                                                                                                                                                                                                                                                                          | 4                                                                                                                                                                                         | Idle Mode and Wake-Up Detection..................                                                                                                                                         | 21                                                                                                                                                                                        |
| XCVRMD and PHAPOL Pin Specifications........5                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                           | WAKE Pin.........................................................21                                                                                                                       |                                                                                                                                                                                           |
| INTR and WAKE Pin Specifications...................5                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                           | Multidrop...........................................................21                                                                                                                    |                                                                                                                                                                                           |
| Digital Pins DC Specifications............................5                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                           | LPCM Timeout Monitor....................................                                                                                                                                  | 23                                                                                                                                                                                        |
| isoSPI DC Specifications....................................6                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                           | LPCM RTO (Resistor Timeout) Pin..................                                                                                                                                         | 23                                                                                                                                                                                        |
| isoSPI Idle/Wake-Up Specifications...................6                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                           | LPCM INTR Pin................................................23                                                                                                                           |                                                                                                                                                                                           |
| Timing Specifications.........................................                                                                                                                                                                                                                                                                                                                                                                   | 6                                                                                                                                                                                         | LPCM Heartbeat Messages.............................24                                                                                                                                    |                                                                                                                                                                                           |
| Absolute Maximum Ratings...................................8                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                           | LPCM Expanded State Diagram......................24                                                                                                                                       |                                                                                                                                                                                           |
| Thermal Resistance ..........................................                                                                                                                                                                                                                                                                                                                                                                    | 8                                                                                                                                                                                         | LPCM Supply Current Consumption................24                                                                                                                                         |                                                                                                                                                                                           |
| Electrostatic Discharge (ESD) Ratings...............8                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                           | SPI Pins During LPCM.....................................25                                                                                                                               |                                                                                                                                                                                           |
| ESD Caution.......................................................8                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                           | Applications Information......................................                                                                                                                            | 26                                                                                                                                                                                        |
| Pin Configurations and Function Descriptions.......9                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                           | Software Layer.................................................26                                                                                                                         |                                                                                                                                                                                           |
| Typical Performance Characteristics...................                                                                                                                                                                                                                                                                                                                                                                           | 11                                                                                                                                                                                        | Outline Dimensions.............................................                                                                                                                           | 27                                                                                                                                                                                        |
| Theory of Operation.............................................16                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                           | Ordering Guide.................................................28                                                                                                                         |                                                                                                                                                                                           |
| isoSPI Pulse Detail...........................................16                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                           | Evaluation Boards............................................28                                                                                                                           |                                                                                                                                                                                           |
| isoSPI Pulse Specifications..............................17                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                           | Automotive Products........................................28                                                                                                                             |                                                                                                                                                                                           |
| isoSPI Interaction and Timing..........................                                                                                                                                                                                                                                                                                                                                                                          | 17                                                                                                                                                                                        |                                                                                                                                                                                           |                                                                                                                                                                                           |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                           |                                                                                                                                                                                           |                                                                                                                                                                                           |
| 7/2024-Rev. A to Rev. B                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                           |                                                                                                                                                                                           |                                                                                                                                                                                           |
| Changes to Ordering Guide...........................................................................................................................28 1/2024-Revision A: Initial Version                                                                                                                                                                                                                                        | Changes to Ordering Guide...........................................................................................................................28 1/2024-Revision A: Initial Version | Changes to Ordering Guide...........................................................................................................................28 1/2024-Revision A: Initial Version | Changes to Ordering Guide...........................................................................................................................28 1/2024-Revision A: Initial Version |

...........................................................................................................................................................................

## FUNCTIONAL BLOCK DIAGRAM

Figure 2. ADBMS6821/ADBMS6822 Functional Block Diagram

<!-- image -->

## SPECIFICATIONS

## POWER-SUPPLY SPECIFICATIONS

Operating junction temperature (T J ) = -40°C to +125°C, V DDS = 3 V, V DD = V P = 5 V, unless otherwise noted.

Table 1. Power-Supply Specifications

| Parameter       | Symbol             | Test Conditions/Comments                                 | Min   | Typ   | Max   | Unit   |
|-----------------|--------------------|----------------------------------------------------------|-------|-------|-------|--------|
| OPERATING RANGE |                    |                                                          |       |       |       |        |
| VDD             | V DD               |                                                          | 3.0   |       | 5.5   | V      |
| VDDS            | V DDS              |                                                          | 1.7   |       | 5.5   | V      |
| VP              | V P                | LPCM mode, V DD = 0 V                                    | 6     |       | 30    | V      |
| VP              |                    | All other modes                                          | 3     |       | 30    | V      |
| SUPPLY CURRENT  |                    |                                                          |       |       |       |        |
| VDD             | I VDD(IDLE)        | Idle state, V DD = 5 V                                   | 7     |       | 12    | µA     |
|                 | I VDD(RDY)         | Ready state, V DD = 5 V, not LPCM mode                   | 2.4   |       | 3     | mA     |
|                 | I VDD(RDY_LPCM)    | Ready state, V DD = 5 V, LPCM mode                       | 1.5   |       | 2     | mA     |
|                 | I VDD(ACT)         | Active state, SCK frequency (f SCK ) = 2 MHz, V DD = 5 V | 7.0   |       | 12    | mA     |
| VP              | I VP(NOM)          | V DD = 5 V, V P = 12 V                                   | 0.4   |       | 2     | µA     |
|                 | I VP(LSTN)         | V DD = 0 V, V P = 12 V, listen state, LPCM mode          | 7     |       | 16    | µA     |
|                 | I VP(RDY_LPCM)     | V DD = 0 V, V P = 12 V, ready state, LPCM mode           | 1.4   |       | 2     | mA     |
| VDD + VP        | I VDD/VP(IDLE)     | V DD = V P = 5 V, idle state                             | 7     |       | 13    | µA     |
|                 | I VDD/VP(LSTN)     | LPCM mode, V DD = V P = 5 V, listen state                | 10    |       | 17    | µA     |
|                 | I VDD/VP(RDY_LPCM) | LPCM mode, V DD = V P = 5 V, ready state                 | 1.5   |       | 2     | mA     |
| VDDS            | I VDDS(IDLE_LSTN)  | Idle or listen state, V DDS = 5 V                        | 0.5   |       | 4     | µA     |
|                 | I VDDS(RDY_ACT)    | Ready or active state, V DDS = 5 V                       | 45    |       | 70    | µA     |

## LPCM TIMEOUT SPECIFICATIONS

TJ = -40°C to +125°C, V DDS = 3 V, V DD = V P = 5 V, unless otherwise noted.

Table 2. LPCM Timeout Specifications

| Parameter                 | Symbol   | Test Conditions/Comments          |   Min | Typ   | Max   | Unit   |
|---------------------------|----------|-----------------------------------|-------|-------|-------|--------|
| RTO PIN TO GND RESISTANCE | R RTO    | 1.5 sec typical timeout           |     0 | 0     | 10    | kΩ     |
|                           |          | 1.5 sec typical timeout           |    92 | 100   |       | kΩ     |
|                           |          | 3 sec typical timeout             |    15 | 17.8  | 22    | kΩ     |
|                           |          | 6 sec typical timeout             |    28 | 30.9  | 34    | kΩ     |
|                           |          | 12 sec typical timeout            |    41 | 43.2  | 46    | kΩ     |
|                           |          | 18 sec typical timeout            |    54 | 56.2  | 58    | kΩ     |
|                           |          | 24 sec typical timeout            |    67 | 68.1  | 71    | kΩ     |
|                           |          | 48 sec typical timeout            |    79 | 80.6  | 83    | kΩ     |
| LPCM TIMEOUT              | t LPCM   | Relative error to typical timeout |   -10 |       | +10   | %      |

## SPECIFICATIONS

## XCVRMD AND PHAPOL PIN SPECIFICATIONS

TJ = -40°C to +125°C, V DDS = 3 V, V DD = V P = 5 V, unless otherwise noted.

Table 3. XCVRMD and PHAPOL Pin Specifications

| Parameter                    | Symbol   | Test Conditions/Comments            | Min         | Typ   | Max   | Unit   |
|------------------------------|----------|-------------------------------------|-------------|-------|-------|--------|
| XCVRMD                       |          |                                     |             |       |       |        |
| XCVRMD Pin to GND Resistance | R MD     | Standard bidirectional mode         |             |       | 6     | kΩ     |
|                              |          | LPCM                                | 15          |       | 35    | kΩ     |
|                              |          | 4 Mbps unidirectional mode          | 65          |       | 120   | kΩ     |
| XCVRMD Pin Voltage           | V MD     | 2 Mbps with 1-bit latency mode      | V DDS - 0.3 |       |       | V      |
| PHAPOL                       |          |                                     |             |       |       |        |
| PHAPOL Pin to GND Resistance | R PP     | Phase (PHA) = 0, polarity (POL) = 0 |             |       | 6     | kΩ     |
|                              |          | PHA = 1, POL = 0                    | 15          |       | 35    | kΩ     |
|                              |          | PHA = 0, POL = 1                    | 65          |       | 120   | kΩ     |
| PHAPOL Pin Voltage           | V PP     | PHA = 1, POL = 1                    | V DDS - 0.3 |       |       | V      |

## INTR AND WAKE PIN SPECIFICATIONS

TJ = -40°C to +125°C, V DDS = 3 V, V DD = V P = 5 V, unless otherwise noted.

## Table 4. INTR and WAKE Pin Specifications

| Parameter         | Symbol          | Test Conditions/Comments                                 | Min        | Typ Max   | Unit   |
|-------------------|-----------------|----------------------------------------------------------|------------|-----------|--------|
| INTR AND WAKE     |                 |                                                          |            |           |        |
| Pull-Up Current   | I PU(WAKE/INTR) | INTR = 0 V, WAKE = 0 V                                   | 18         | 38        | µA     |
| Pull-Down Current | I PD(WAKE/INTR) | INTR = 2 V, WAKE = 2 V                                   | 13         | 33        | µA     |
| Pull-Up Voltage   | V PU(WAKE/INTR) | V P = 12 V, V DD = 0 V at I PU(WAKE/INTR) = 15 µA        | 3          | 4.5       | V      |
|                   |                 | V P = 12 V, V DD = 3 V or 5 V at I PU(WAKE/INTR) = 15 µA | V DD - 1.5 | V DD      | V      |

## DIGITAL PINS DC SPECIFICATIONS

TJ = -40°C to +125°C, V DDS = 3 V, V DD = V P = 5 V, unless otherwise noted.

Table 5. Digital Pins DC Specifications

| Parameter                                                                                       | Symbol      | Test Conditions/Comments                       | Min             | Typ   | Max             | Unit   |
|-------------------------------------------------------------------------------------------------|-------------|------------------------------------------------|-----------------|-------|-----------------|--------|
| DIGITAL VOLTAGE Input High MSTR, PICO, POCI, SCK, CS WAKE Input Low MSTR, PICO, POCI, SCK, WAKE | V IH V      |                                                | 0.7 × V DDS 1.4 |       |                 | V V    |
| CS                                                                                              | IL          |                                                |                 |       | 0.3 × V DDS 0.5 | V V    |
| Output High PICO, POCI, SCK, CS                                                                 | V OH        | Sourcing 4 mA                                  | V DDS - 0.25    |       |                 | V      |
| Output Low PICO, POCI, SCK, CS                                                                  | V OL        | Sinking 4 mA                                   |                 |       | 0.25            | V      |
| DIGITAL OUTPUT PIN INTERNAL PULL-UP POCI                                                        | R PU(DIG)   | POCI pull-up to V DDS , MSTR = high, CS = high | 0.5             |       | 1.5             | MΩ     |
| DIGITAL PIN LEAKAGE CURRENT MSTR, PICO, POCI, SCK, CS                                           | I LEAK(DIG) | Pin voltage = V DDS = 5 V                      |                 |       | 1               | µA     |

## SPECIFICATIONS

## ISOSPI DC SPECIFICATIONS

TJ = -40°C to +125°C, V DDS = 3 V, V DD = V P = 5 V, unless otherwise noted.

## Table 6. isoSPI DC Specifications

| Parameter                  | Symbol        | Test Conditions/Comments                                        | Min   | Typ   | Max   | Unit   |
|----------------------------|---------------|-----------------------------------------------------------------|-------|-------|-------|--------|
| LEAKAGE CURRENTS           | I LEAK(IP/IM) | 0 V to 5 V, idle state                                          |       |       | 10    | µA     |
| COMMON-MODE VOLTAGE        | V CM          | T A = 25°C, IP/IM not driving                                   |       | 3.2   |       | V      |
| PIN RESISTANCE             | R IN          | Ready state, 0 V < IP voltage (V IP ), IM voltage (V IM ) < 5.5 | 100   |       |       | kΩ     |
| TRANSMITTER                |               |                                                                 |       |       |       |        |
| Pulse Amplitude            | V A           | V A = &#124;V IP - V IM &#124;, termination resistance = 50 Ω   | 1     | 1.25  | 1.6   | V      |
| Drive Current              | I DRV         | V CM set by the driver                                          |       | 25    |       | mA     |
| RECEIVER THRESHOLD VOLTAGE | V Rx          |                                                                 |       | 300   |       | mV     |

## ISOSPI IDLE/WAKE-UP SPECIFICATIONS

TJ = -40°C to +125°C, V DDS = 3 V, V DD = V P = 5 V, unless otherwise noted.

## Table 7. isoSPI Idle/Wake-Up Specifications

| Parameter                           | Symbol   | Test Conditions/Comments   | Min   | Typ   | Max   | Unit   |
|-------------------------------------|----------|----------------------------|-------|-------|-------|--------|
| WAKE-UP                             |          |                            |       |       |       |        |
| Differential Wake-Up Voltage        | V WAKE   | t DWELL ≥ 240 ns           | 400   |       |       | mV     |
| Dwell Time at V WAKE                | t DWELL  | V WAKE ≥ 400 mV            | 240   |       |       | ns     |
| Start-Up Time After Wake Detection  | t READY  |                            |       |       | 10    | µs     |
| IDLE TIMEOUT DURATION               | t IDLE   |                            | 4.3   | 5.5   | 6.7   | ms     |
| READY STATE TO LISTEN STATE TIMEOUT | t LISTEN | MSTR = 0, XCVRMD = 20 kΩ   |       | 250   |       | µs     |

## TIMING SPECIFICATIONS

## isoSPI Pulse Timing Specifications

TJ = -40°C to +125°C, V DDS = 3 V, V DD = V P = 5 V, unless otherwise noted.

## Table 8. isoSPI Pulse Timing Specifications

| Parameter                  | Symbol     | Test Conditions/Comments   | Min   | Typ   | Max   | Unit   |
|----------------------------|------------|----------------------------|-------|-------|-------|--------|
| CHIP SELECT                |            |                            |       |       |       |        |
| Half-Pulse Width           | t ½PW(CS)  | Transmitter                | 120   | 150   | 180   | ns     |
| Signal Filter              | t FILT(CS) | Receiver                   | 70    | 90    | 110   | ns     |
| Pulse-Inversion Delay      | t INV(CS)  | Transmitter                | 120   | 155   | 190   | ns     |
| Valid-Pulse Window         | t WNDW(CS) | Receiver                   | 220   | 270   | 330   | ns     |
| Chip-Select Response Delay | t DEL(CS)  | Receiver                   |       | 140   | 190   | ns     |
| DATA                       |            |                            |       |       |       |        |
| Half-Pulse Width           | t ½PW(D)   | Transmitter                | 40    | 50    | 60    | ns     |
| Signal Filter              | t FILT(D)  | Receiver                   | 10    | 20    | 30    | ns     |
| Pulse-Inversion Delay      | t INV(D)   | Transmitter                | 40    | 55    | 70    | ns     |
| Valid-Pulse Window         | t WNDW(D)  | Receiver                   | 70    | 90    | 110   | ns     |
| Data-Response Delay        | t DEL(D)   | Receiver                   |       | 75    | 120   | ns     |

## SPECIFICATIONS

## SPI/isoSPI Timing Specifications (Controller)

TJ = -40°C to +125°C, V DDS = 3 V, V DD = V P = 5 V, unless otherwise noted.

Table 9. SPI/isoSPI Timing Specifications (Controller)

| Parameter   | Description                                  | Test Conditions/Comments                 | Min   | Typ Max   | Unit   |
|-------------|----------------------------------------------|------------------------------------------|-------|-----------|--------|
| t CLK       | SCK period 1                                 | 4 Mbps unidirectional mode               | 0.25  |           | µs     |
|             |                                              | All other transceiver modes              | 0.5   |           | µs     |
| t 1         | PICO setup time before SCK latching edge     |                                          | 25    |           | ns     |
| t 2         | PICO hold time after SCK latching edge       |                                          | 25    |           | ns     |
| t 3         | SCK low                                      | t CLK = t 3 + t 4                        | 50    |           | ns     |
| t 4         | SCK high                                     | t CLK = t 3 + t 4                        | 50    |           | ns     |
| t 5         | CS rising edge to CS falling edge            |                                          | 1     |           | µs     |
| t 6         | SCK latching edge to CS rising edge 1        |                                          | 0.5   |           | µs     |
| t 7         | CS falling edge to SCK latching edge 1       | 2 Mbps with 1-bit latency mode           | 0.5   |           | µs     |
|             |                                              | 4 Mbps unidirectional mode               | 0.5   |           | µs     |
|             |                                              | Used with ADBMS stack monitor peripheral | 0.5   |           | µs     |
|             |                                              | All other cases                          | 1     |           | µs     |
| t 8         | SCK nonlatching edge to POCI valid           |                                          |       | 55        | ns     |
| t 9         | SCK latching edge to short ±1 transmit pulse |                                          |       | 50        | ns     |
| t 10        | CS transition to long ±1 transmit pulse      |                                          |       | 55        | ns     |

## SPI/isoSPI Timing Specifications (Peripheral)

TJ = -40°C to +125°C, V DDS = 3 V, V DD = V P = 5 V, unless otherwise noted.

Table 10. SPI/isoSPI Timing Specifications (Peripheral)

| Parameter   | Description                                  | Test Conditions/Comments                       | Min   | Typ   |   Max | Unit   |
|-------------|----------------------------------------------|------------------------------------------------|-------|-------|-------|--------|
| t 12        | isoSPI data recognized to SCK latching edge  | 4 Mbps unidirectional transceiver mode         | 50    | 75    |   100 | ns     |
|             |                                              | All other transceiver modes                    | 85    | 125   |   165 | ns     |
| t 13        | SCK pulse width                              | 4 Mbps unidirectional transceiver mode         | 50    | 75    |   100 | ns     |
|             |                                              | All other transceiver modes                    | 85    | 125   |   165 | ns     |
| t 14        | SCK nonlatching edge to isoSPI data transmit | Standard bidirectional isoSPI transceiver mode | 85    | 125   |   165 | ns     |
|             | SCK latching edge to isoSPI data transmit    | 2 Mbps with 1-bit latency transceiver mode     |       |       |    55 | ns     |
| t 15        | CS falling edge to SCK nonlatching edge      | PHA = 1                                        | 80    | 120   |   156 | ns     |
| t 16        | CS falling edge to isoSPI data transmit      | Standard bidirectional isoSPI transceiver mode | 150   | 220   |   295 | ns     |
| t 17        | CS rising edge to SCK latching edge          | PHA = 1                                        | 80    | 120   |   156 | ns     |
| t 18        | CS rising edge to PICO rising edge           |                                                |       |       |    35 | ns     |
| t RTN       | Data return delay                            | Standard bidirectional isoSPI transceiver mode | 315   | 430   |   545 | ns     |
|             |                                              | 2 Mbps with 1-bit latency transceiver mode     | 145   | 195   |   240 | ns     |

## ABSOLUTE MAXIMUM RATINGS

Unless otherwise specified, all pin names refer to both transceivers on an ADBMS6822 with respect to the related power supply pins (for example, CS2 relative to VDDS2).

Table 11. Absolute Maximum Ratings

| Parameter                           | Rating          |
|-------------------------------------|-----------------|
| Supply Voltage, Relative to GND     |                 |
| V DDS , V DD                        | -0.3 V to +6 V  |
| V P                                 | -0.3 V to +36 V |
| Input Voltage, Relative to GND      |                 |
| IP, IM                              | -5 V to +12 V   |
| All other pins                      | -0.3 V to +6 V  |
| Input Voltage, Relative to V DDS    |                 |
| CS, SCK, PICO, POCI, XCVRMD, PHAPOL | 0.3 V           |
| Current In and Out of Pins          |                 |
| IP, IM, V DD                        | 60 mA           |
| CS, SCK, PICO/POCI                  | 20 mA           |
| V DDS                               | 40 mA           |
| All Other Pins                      | 10 mA           |
| Temperature                         |                 |
| Operating Junction Range (T J )     | -40°C to +125°C |
| Junction (T JMAX )                  | 150°C           |
| Storage Range                       | -65°C to +150°C |
| Lead (Soldering, 10 sec)            | 300°C           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JA is the natural convection junction-to-ambient thermal resistance measured in a one cubic foot sealed enclosure. θ JC is the junctionto-case thermal resistance.

Table 12. Thermal Resistance

| Package Type 1   |   θ JA 2 |   θ JC | Unit   |
|------------------|----------|--------|--------|
| 05-08-7057       |       44 |      7 | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADBMS6821

Table 13. ADBMS6821, 32-Lead LFCSP\_SS

| ESD Model   |   Withstand Voltage (V) | Class   |
|-------------|-------------------------|---------|
| HBM         |                    2000 | 2       |
| CDM         |                     750 | C4B     |

## ESD Ratings for ADBMS6822

Table 14. ADBMS6822, 32-Lead LFCSP\_SS

| ESD Model   |   Withstand Voltage (V) | Class   |
|-------------|-------------------------|---------|
| HBM         |                    2000 | 2       |
| CDM         |                     750 | C4B     |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Figure 3. ADBMS6821 Pin Configuration

<!-- image -->

Table 15. ADBMS6821 Pin Function Descriptions

| Pin Number              | Mnemonic                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|-------------------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 2 3 4 5 6 7 8 9 10 11 | MSTR PICO POCI SCK CS VDDS INTR WAKE GND IM IP | SPI Mode Select. MSTR selects SPI controller mode (connected to VDDS) or peripheral mode (connected to GND). SPI Controller Output (Controller Mode) or Peripheral Input (Peripheral Mode). SPI Controller Input (Controller Mode) or Peripheral Output (Peripheral Mode). SPI Clock Input (Controller) or Output (Peripheral). Active Low SPI Chip-Select Input (Controller Mode) or Output (Peripheral Mode). SPI Power-Supply Input (1.7 V to 5.5 V). LPCM Interrupt Current-Limited Output. Device Wake-Up State Current-Limited Output or Input. Ground. The GND pins must be shorted together external to the IC. Isolated Interface Minus Input/Output. Isolated Interface Plus Input/Output. |

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Figure 4. ADBMS6822 Pin Configuration

<!-- image -->

Table 16. ADBMS6822 Pin Function Descriptions

| Pin Number   | Mnemonic        | Description                                                                                                                                                        |
|--------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 25        | MSTR, MSTR2     | SPI Mode Select. These pins select SPI controller mode (MSTR connected to VDDS and MSTR2 connected to VDDS2) or peripheral mode (MSTR and MSTR2 connected to GND). |
| 2, 26        | PICO, PICO2     | SPI Controller Outputs (Controller Mode) or Peripheral Inputs (Peripheral Mode).                                                                                   |
| 3, 27        | POCI, POCI2     | SPI Controller Inputs (Controller Mode) or Peripheral Outputs (Peripheral Mode).                                                                                   |
| 4, 28        | SCK, SCK2       | SPI Clock Inputs (Controller) or Outputs (Peripheral).                                                                                                             |
| 5, 29        | CS, CS2         | Active Low SPI Chip-Select Inputs (Controller Mode) or Outputs (Peripheral Mode).                                                                                  |
| 6, 30        | VDDS, VDDS2     | SPI Power-Supply Inputs (1.7 V to 5.5 V).                                                                                                                          |
| 7, 31        | INTR, INTR2     | LPCM Interrupt Current-Limited Outputs.                                                                                                                            |
| 8, 32        | WAKE, WAKE2     | Device Wake-Up State Current-Limited Outputs or Inputs.                                                                                                            |
| 9, 17        | GND             | Ground. The GND pins must be shorted together external to the IC.                                                                                                  |
| 10, 18       | IM, IM2         | Isolated Interface Minus Inputs/Outputs.                                                                                                                           |
| 11, 19       | IP, IP2         | Isolated Interface Plus Inputs/Outputs.                                                                                                                            |
| 12, 20       | VDD, VDD2       | isoSPI Power-Supply Inputs (3.0 V to 5.5 V).                                                                                                                       |
| 13, 21       | VP, VP2         | High Voltage Power-Supply Inputs (3.0 V to 30 V).                                                                                                                  |
| 14, 22       | PHAPOL, PHAPOL2 | Multilevel, Resistor Set SPI PHA/POL Selection Inputs.                                                                                                             |
| 15, 23       | RTO, RTO2       | Multilevel, Resistor Set LPCM Timeout Selection Inputs.                                                                                                            |
| 16, 24       | XCVRMD, XCVRMD2 | Multilevel, Resistor Set Transceiver Mode Selection Inputs.                                                                                                        |
| 33           | EP              | Exposed Pad. Must be connected to GND.                                                                                                                             |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 5. VDD Current vs. Temperature, Idle State

<!-- image -->

Figure 6. VDD Current vs. Temperature, Ready State, Non LPCM

<!-- image -->

Figure 7. VDD Current vs. Temperature, Ready State, LPCM

<!-- image -->

Figure 8. VDD Current vs. Temperature, Active State

Figure 9. VP Current vs. Temperature, V P = 12 V

<!-- image -->

Figure 10. VP Current vs. VP Voltage, V DD = 3 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 11. VP Current vs. VP Voltage, V DD = 5 V

<!-- image -->

Figure 12. VP Current vs. Temperature, Listen State, V DD = 0 V

<!-- image -->

Figure 13. VP Current vs. Temperature, Ready State, LPCM, V DD = 0 V, VP  = 12 V

<!-- image -->

Figure 14. VDD + VP Current vs. Temperature, Idle State

Figure 15. VDD + VP Current vs. Temperature, Listen State

<!-- image -->

Figure 16. VDD + VP Current vs. Temperature, Ready State, LPCM

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 17. VDDS Current vs. Temperature, Idle State

<!-- image -->

Figure 18. VDDS Current vs. Temperature, Ready State

<!-- image -->

Figure 19. VDDS Current vs. Temperature, Active State

<!-- image -->

Figure 20. Pull-Up and Pull-Down Current Magnitude vs. INTR/WAKE Voltage at 3 V Supply

Figure 21. Pull-Up and Pull-Down Current Magnitude vs. INTR/WAKE Voltage at 5 V Supply

<!-- image -->

Figure 22. Pull-Up and Pull-Down Current Magnitude vs. INTR/WAKE Voltage at V P = 12 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 23. INTR/WAKE Pull-Up Current vs. Temperature

<!-- image -->

Figure 24. INTR/WAKE Pull-Down Current vs. Temperature

<!-- image -->

Figure 25. INTR/WAKE Maximum Pull-Up Voltage vs. Temperature

<!-- image -->

Figure 26. Oscillator Frequency vs. Temperature

Figure 27. isoSPI Driver Current vs. Temperature

<!-- image -->

Figure 28. Receiver Threshold Voltage vs. Common-Mode Voltage at 5 V Supply

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 29. Receiver Threshold Voltage vs. Common-Mode Voltage at 3 V Supply

<!-- image -->

Figure 30. Receiver Threshold Voltage vs. Temperature at 5 V Supply

<!-- image -->

Figure 31. Receiver Threshold Voltage vs. Temperature at 3 V Supply

Figure 32. Differential Wake-Up Voltage vs. Wake-Up Pulse Dwell Time

<!-- image -->

Figure 33. CS Falling Edge Causing Wake-Up

<!-- image -->

## THEORY OF OPERATION

The ADBMS6821/ADBMS6822 transceivers create a bidirectional isoSPI over a single twisted pair of wires, with increased safety and noise immunity compared to a nonisolated interface. Using capacitors or transformers, the transceiver translates standard SPI signals (CS, SCK, PICO, and POCI) into pulses that can be sent back and forth on twisted pair cables.

A typical battery management system (BMS) uses a transceiver device that acts as a bridge between the microcontroller SPI port and the isoSPI BMS monitors. The IP and IM transmitter/receiver pins on the transceiver are connected across an isolation barrier to the first BMS monitor in a daisy chain.

A typical non-BMS system uses two transceivers. The first is paired with a microcontroller or other SPI controller. Its IP and IM transmitter/receiver pins are connected across an isolation barrier to a second transceiver that reproduces the SPI signals for use by one or more peripheral devices.

The transmitter is a current-regulated differential driver. The voltage amplitude is determined by the drive current and the equivalent resistive load (cable characteristic impedance and termination resistor, R M).

The receiver consists of a window comparator with a differential voltage threshold of V Rx . When V IP - V IM is greater than V Rx , the comparator detects a Logic 1. When V IP - V IM is less than -V Rx (in mV), the comparator detects a Logic -1. A Logic 0 (null) indicates VIP - V IM is between the positive and negative thresholds.

The comparator outputs are sent to pulse timers (filters) that discriminate between short and long pulses.

The ADBMS6822 (dual isoSPI transceiver) consists of two identical, independent isoSPI transceivers. The ADBMS6822 functions as the SPI to isoSPI bridge for both ends of a reversible isoSPI-capable system.

## ISOSPI PULSE DETAIL

The isoSPI transmitter can generate three voltage levels: +V A , 0 V, and -V A . To eliminate the DC signal component and enhance reliability, isoSPI pulses are defined as symmetric pulse pairs. A +1 pulse pair is defined as a +V A pulse followed by a -V A pulse. A -1 pulse pair is -V A followed by +V A .

The duration of each pulse is defined as t 1/2PW . The total isoSPI pulse duration is 2 × t 1/2PW . The transceiver allows two different t 1/2PW values so that four types of pulses can be transmitted, as shown in Table 17.

| Table 17. isoSPI Pulse Types   | Table 17. isoSPI Pulse Types   | Table 17. isoSPI Pulse Types   | Table 17. isoSPI Pulse Types   |
|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| Pulse Type                     | First Level                    | Second Level                   | Ending Level                   |
| Long +1                        | +V A (150 ns)                  | -V A (150 ns)                  | 0 V                            |
| Long -1                        | -V A (150 ns)                  | +V A (150 ns)                  | 0 V                            |
| Short +1                       | +V A (50 ns)                   | -V A (50 ns)                   | 0 V                            |
| Short -1                       | -V A (50 ns)                   | +V A (50 ns)                   | 0 V                            |

Long pulses are used to transmit CS changes. Short pulses transmit data (PICO or POCI). The transceiver detects four types of communication events from the SPI Controller: CS falling, CS rising, SCK latching PICO = 0, and SCK latching PICO = 1. The transceiver converts each event into one of the four pulse types, as shown in Table 18.

Table 18. Controller Communication Events

| SPI Controller Event        | Transmitted Pulse   |
|-----------------------------|---------------------|
| CS Rising                   | Long +1             |
| CS Falling                  | Long -1             |
| SCK Latching Edge, PICO = 1 | Short +1            |
| SCK Latching Edge, PICO = 0 | Short -1            |

On the other side of the isolation barrier (that is, the other end of the cable), another transceiver is configured to interface with a SPI peripheral. This transceiver receives the transmitted pulses and reconstructs the SPI signals on its output port, as shown in Table 19. In addition, the peripheral device can transmit a return data pulse to the controller to set the state of POCI. For additional information, see the isoSPI Interaction and Timing section.

Table 19. Peripheral SPI Port Output

| Received Pulse   | SPI Port Action         | Return Pulse            |
|------------------|-------------------------|-------------------------|
| Long +1          | Drive CS high           | None                    |
| Long -1          | Drive CS low            | Short -1 pulse if POCI  |
| Short +1         | Set PICO = 1, pulse SCK | = 0 (no return pulse if |
| Short -1         | Set PICO = 0, pulse SCK | POCI = 1)               |

A peripheral transceiver never transmits long CS pulses in regular communication. However, it does transmit a long CS +1 pulse when woken up by taking its WAKE pin high. For additional information, see the WAKE Pin section. Furthermore, a peripheral only transmits a short -1 pulse (when POCI = 0), never a short +1 pulse, which allows multiple peripheral devices on a single cable without risk of collisions (for additional information, see the Multidrop section).

## THEORY OF OPERATION

Figure 34. isoSPI Differential Pulse Detail

<!-- image -->

## ISOSPI PULSE SPECIFICATIONS

Figure 34 shows the timing specifications for the +1 and -1 isoSPI pulses. The same timing specifications apply to either version of these symmetric pulses. In the isoSPI Pulse Timing Specifications section, these specifications are further separated into CS (long) and data (short) parameters.

Before the controller SPI device supplies the first latching clock edge (usually a rising edge, but for exceptions, see Table 20), the peripheral transceiver must transmit the initial peripheral data bit, SN. The value of the S N is determined by sampling the state of POCI.

A valid pulse must meet the minimum specification for t 1/2PW and the maximum specification for t INV . In other words, the half-pulse width must be long enough to pass through the appropriate pulse timer, but short enough for the inversion to begin within the valid window of time. The response observed at PICO, POCI, or CS occurs after the t DEL delay from the pulse inversion.

## ISOSPI INTERACTION AND TIMING

The timing diagrams in Figure 35 and Figure 36 show how an isoSPI in controller mode (connected to a SPI controller) interacts with an isoSPI in peripheral mode (connected to a SPI peripheral). Figure 35 shows the operation with PHA = 0 (and shows SCK signals for POL = 0 or 1). Figure 36 shows the timing diagram for PHA = 1. Although not shown, it is acceptable to use different SPI modes (PHA and POL settings) on the controller and peripheral devices.

A controller SPI device initiates communication by lowering CS. The ADBMS6821/ADBMS6822 transceivers convert this transition into a long -1 pulse on the IP and IM pins. The pulse traverses the isolation barrier (with an associated cable delay) and arrives at the IP and IM pins of the peripheral transceiver. When validated, the long -1 pulse is converted back into a falling CS transition, this time supplied to the peripheral SPI device. If peripheral PHA = 1, SCK also leaves the idle state at this time.

If POCI = 0, the peripheral transmits a short -1 pulse to the controller. The controller transceiver receives and decodes the pulse and sets the controller POCI = 0 (matching the peripheral). However, if the peripheral POCI = 1, the peripheral does not transmit a pulse. The controller interprets this null response as a 1 and sets the controller POCI = 1. This behavior makes it possible to connect multiple peripheral transceiver devices to a single cable with no conflicting signals (for more information, see the Multidrop section).

After the falling CS sequence, every latching clock edge on the controller converts the state of the PICO pin into an isoSPI data pulse (M N , M N - 1, … M 0 ) while simultaneously latching the data bit of the peripheral. As the peripheral transceiver receives each data bit, it sets the peripheral PICO pin to the proper state and then generates an SCK pulse before returning the POCI data of the peripheral (either as a short -1 pulse, or as a null).

At the end of communication, the final data bit sent by the peripheral (either as a pulse or null) is ignored by the controller. The peripheral transceiver must return a data bit because it cannot predict when communications cease. The controller SPI device can then raise CS, which is transmitted to the peripheral in the form of a long +1 pulse. The process ends with the peripheral transceiver transitioning CS high and returning SCK to the idle state (if PHA = 1).

## THEORY OF OPERATION

Figure 35. Transceiver Timing Diagram (PHA = 0, Standard Bidirectional Transceiver Mode)

<!-- image -->

Figure 36. Transceiver Timing Diagram (PHA = 1, Standard Bidirectional Transceiver Mode)

<!-- image -->

## THEORY OF OPERATION

## RECEIVER COMMON-MODE BIAS

When not transmitting, the output driver maintains IP and IM near an internal bias voltage with a pair of R IN resistors to a voltage of VCM. This weak bias network holds the outputs near their required operating point without significantly loading the cable, which allows transceivers to be paralleled without affecting signal amplitude.

When the transceiver is in the low-power idle mode, the bias voltage is disconnected from the R IN resistors, which results in IP and IM as a floating input.

Figure 37. Receiver Common-Mode Bias

<!-- image -->

## SPI CONFIGURATION

The ADBMS6821/ADBMS6822 transceivers interface with a SPI port on another device using four connections: CS, SCK, POCI, and PICO. The transceiver can be configured to operate on the controller end of a link (for example, connected to a microcontroller) or on the peripheral end of a link (for example, connected to a standalone analog-to-digital converter (ADC)). That operation is set using the MSTR pin. In controller mode (MSTR = 1), CS, SCK, and PICO are inputs and POCI is a push/pull output. In peripheral mode (MSTR = 0), CS, SCK, and PICO are push/pull outputs and POCI is an input.

The VDDS power supply pin is used for SPI input or output. Connect VDDS to the same power supply that is used to power the SPI port of the connected devices.

The POCI output of the transceiver is set to tristate and the output is resistively pulled up to VDDS when in controller mode (MSTR = 1) and the SPI port is not selected (CS = 1). In this case, POCI is pulled up to VDDS through an internal 1 MΩ resistor. Upon activation or deactivation of the LPCM feature, the 1 MΩ resistor mitigates the possibility of driving the POCI pin externally and internally when switching between controller and peripheral mode.

## SETTING CLOCK PHASE AND POLARITY

SPI devices often use one clock edge to latch data and the other edge to shift data to avoid timing problems associated with clock skew. SPI devices can be configured to idle SCK either high or low and can also be configured to latch on either rising or falling clock edge. The transceiver supports all four SPI phase/polarity operating modes, configured by the PHAPOL pin.

The configuration of the PHAPOL pin is only detected and stored in the memory after power-up of the VDDS pin. Changing the PHAPOL pin configuration during operation does not affect SPI

phase/polarity operating mode. The initial detection of the PHAPOL pin state does not occur while the transceiver is in the idle state. Thus, upon first application of the VP or VDD supply, the transceiver defaults to PHA = 1 and POL = 1 if the transceiver is left in the idle state while the VDDS supply is applied. In this case, wake the transceiver to the ready state to cause the PHAPOL pin state to be detected. For more information, see the Idle Mode and Wake-Up Detection section.

The four configuration settings for PHAPOL are shown in Table 20.

Table 20. PHAPOL SPI Modes

|   SPI Mode |   POL |   PHA | Description                                     | PHAPOL Pin Connection   |
|------------|-------|-------|-------------------------------------------------|-------------------------|
|          0 |     0 |     0 | SCK idles low, latches on rising (first) edge   | GND                     |
|          1 |     0 |     1 | SCK idles low, latches on falling (second) edge | 20 kΩ resistor to GND   |
|          2 |     1 |     0 | SCK idles high, latches on falling (first) edge | 100 kΩ resistor to GND  |
|          3 |     1 |     1 | SCK idles high, latches on rising (second) edge | VDDS                    |

The two most common configurations are Mode 0 and Mode 3, because these modes latch data on a rising clock edge. The ADBMS battery monitors use SPI Mode 3.

## TRANSCEIVER MODES

The ADBMS6821/ADBMS6822 transceivers have several modes to allow enhanced capabilities with different system configurations. The transceiver mode is set by the connection to the XCVRMD pin, as shown in Table 21.

For communication with ADBMS battery monitors, one of the two standard bidirectional isoSPI modes must be used. If the transceiver is to be used as the timeout monitor in an ADBMS system with LPCM capability, use the transceiver mode with timeout monitor support.

The 4 Mbps unidirectional and 2 Mbps with 1-bit latency modes do not work with ADBMS peripheral devices. They are intended for communications between two microcontrollers or between a microcontroller and non-BMS peripherals. Note that the transceiver in controller mode (MSTR = 1) can be used to communicate with the ADBMS stack monitor peripherals at 2 MHz even when the XCVRMD pin connection is for standard bidirectional isoSPI (connected to GND or 20 kΩ resistor to GND).

The configuration of the XCVRMD pin is checked upon the state transition from IDLE to READY. Changing the XCVRMD pin configuration during operation does not affect the transceiver operating mode without first returning to the IDLE state. The initial detection of the XCVRMD pin state does not occur while the transceiver is in the idle state. Thus, upon first application of the VP or VDD supply, the transceiver defaults to standard bidirectional isoSPI with LPCM timeout monitor support if the transceiver is left in the idle state while the VDDS supply is applied. In this case, wake the transceiver

## THEORY OF OPERATION

to the ready state to cause the XCVRMD pin state to be detected. For more information, see the Idle Mode and Wake-Up Detection section.

Table 21. XCVRMD Pin Transceiver Modes

| Description                                     | XCVRMD Pin Connection   |
|-------------------------------------------------|-------------------------|
| Standard Bidirectional isoSPI                   | GND                     |
| Standard Bidirectional isoSPI with LPCM Timeout | 20 kΩ resistor to GND   |
| Monitor Support                                 |                         |
| 4 Mbps Unidirectional                           | 100 kΩ resistor to GND  |
| 2 Mbps with 1-Bit Latency                       | VDDS                    |

## Standard Bidirectional isoSPI

This is the normal communication mode. When the transceiver is configured in controller mode, it can send and receive communication at up to 2 Mbps when communicating with ADBMS devices that support 2 Mbps communication. Otherwise, the transceiver can send and receive communication at up to 1 Mbps when configured in either controller or peripheral mode.

## Standard Bidirectional isoSPI with LPCM Timeout Monitor Support

In this mode, when the transceiver is configured in controller mode, it behaves the same as the standard bidirectional isoSPI mode. When the transceiver is configured in peripheral mode, it can receive communication at 2 Mbps, but it does not transmit any data back to the isoSPI port. The transceiver still receives the data and decodes it onto the SPI port. When in peripheral mode, the LPCM feature is enabled, and the device transitions to the listen state while waiting for heartbeat messages to set the INTR pin appropriately.

## 4 Mbps Unidirectional

In this mode, when the transceiver is configured in controller mode, it can send isoSPI data at up to 4 Mbps. The transceiver does not receive nor decode isoSPI data when configured in controller mode. When the transceiver is configured in peripheral mode, it can receive and decode isoSPI data at up to 4 Mbps. It does not transmit isoSPI data when configured in peripheral mode.

## 2 Mbps with 1-Bit Latency

In this mode, the peripheral can operate at 2 Mbps. To achieve the 2 Mbps rate, the transceiver configured in peripheral mode transmits the data back from the latching edge of its clock (SCK) instead of the nonlatching edge. Also, it does not send back data after receiving a long CS -1 pulse that causes its CS to transition to logic low.

## ISOSPI STATE DIAGRAM

Figure 38 shows the state diagram for isoSPI communications. During periods of no communication, a low-current idle state reduces power. In the idle state, the ADBMS6821/ADBMS6822 transceivers shut down most of the circuitry.

In the ready state, all circuitry is enabled and ready to transmit or receive, but there is no active data transmission on IP and IM.

Supply current increases when actively communicating. Thus, this condition is referred to as the active state.

Figure 38. isoSPI State Diagram

<!-- image -->

## POWER SUPPLIES

The ADBMS6821/ADBMS6822 transceivers have three power supplies: VDDS, VDD, and VP. VDDS powers the SPI. Connect VDDS to the same power supply as the SPI to which the SPI bus is connected. In many cases, that supply is the interface power supply of a microcontroller. The SPI can operate across the V DDS range of 1.7 V to 5.5 V.

VDDS also supports functions on the MSTR, PHAPOL, and XCVRMD pins. When VDDS is powered down, the transceiver is set to peripheral mode. The states of the PHAPOL and XCVRMD configurations are maintained from the last VDDS power-up.

VDD powers the isoSPI. When actively communicating over isoSPI, VDD  must be in the range of 3 V to 5.5 V. Put a bypass capacitor of at least 1 µF as close as possible to the VDD pin to maintain reliable isoSPI communication.

VP powers portions of the transceiver when in LPCM timeout monitor mode, which allows both VDDS and VDD to be powered down while maintaining LPCM timeout monitor functionality. VP can be connected directly to 12 V battery power. If VDD is powered down, V P must be &gt;6 V to function in LPCM timeout monitor mode. If high voltage LPCM power is not required, connect VP to VDD. In this configuration, LPCM timeout monitor mode works over the whole VDD range.

## SUPPLY CURRENT

Table 22 provides equations for estimating I VDD/VP in each state. The results are for average supply current (as opposed to peak currents), and assume that a peripheral is returning an equal number of 0s and 1s. A transceiver configured as a peripheral does not generate +1 data pulses. Therefore, the average driver current is less than a transceiver configured as a controller.

## THEORY OF OPERATION

Table 22. Estimated I VDD/VP in Different Power States

| State   | MSTR           | Estimated I VDD/VP                     |
|---------|----------------|----------------------------------------|
| Idle    | 0 (peripheral) | 10 µA                                  |
|         | 1 (controller) | 10 µA                                  |
| Ready   | 0 or 1         | 2.7 mA                                 |
| Active  | 0 (peripheral) | 2.7 mA + I DRV × t 1/2PW(D) /t CLK     |
|         | 1 (controller) | 2.7 mA + I DRV × 2 × t 1/2PW(D) /t CLK |

## IDLE MODE AND WAKE-UP DETECTION

To conserve power, the ADBMS6821/ADBMS6822 transceivers in peripheral mode (MSTR = 0) enter an idle state after t IDLE of inactivity on the IP and IM pins. In this condition, I DD is reduced to less than 10 µA and the SPI pins are idled (CS = 1, PICO = 1, and SCK = POL).

The transceiver continues monitoring the IP and IM pins using a low power, AC-coupled detector. It wakes up when it sees a differential signal of V WAKE or greater that persists for t DWELL or longer. In practice, a long (CS) isoSPI pulse is sufficient to wake the device up. After the comparator generates the wake-up signal, it can take up to t READY for bias circuits to stabilize.

Figure 39 shows the sequence of waking up a peripheral transceiver (placing it in the ready state), which uses it to communicate, then allows it to return to the low-power idle state. For a transceiver in controller mode (MSTR = 1), in addition to the previously mentioned wake-up procedure, taking CS low also enables the isoSPI port within t READY . Then CS can be taken high, and the resulting long pulse on the isoSPI ports serves as a wake-up signal for the peripheral device that is connected to this transceiver, which responds by entering the ready state.

The controller transceiver remains in the ready or active state as long as CS = 0. If CS transitions high, it enters the idle state after t IDLE expires. The t IDLE time prevents the device from shutting down between data packets.

Figure 39. Peripheral ADBMS6821/ADBMS6822 Wake-Up/Idle Timing

<!-- image -->

## WAKE PIN

The WAKE pin is a current-limited output that indicates the state of the ADBMS6821/ADBMS6822 transceivers. If a transceiver is in the ready or active state, WAKE is logic high. If a transceiver is in the idle state, WAKE is logic low. The WAKE pin does not indicate interrupts for the LPCM feature. Instead, the INTR pin performs that function.

Although the WAKE pin is normally used as an output, it can also be used as an input when a transceiver is configured with the MSTR pin driven logic low and the XCVRMD pin is not configured for LPCM timeout monitor support. In this configuration, if the transceiver is in the idle state and outputting a logic low on the WAKE pin, externally driving the WAKE pin high for at least t READY causes the transceiver to transition from the idle state to the ready state and then transmit a wake-up pulse on the isoSPI port. This wake-up pulse can be used, for example, by a peripheral transceiver to wake up the controller transceiver without changing the direction of the isoSPI bus from peripheral to controller.

Consider the following example. The controller and peripheral transceivers are in a low-power state. The peripheral controller requires attention from the controller. The peripheral drives the WAKE pin of the peripheral transceiver high, which wakes up the peripheral transceiver and causes a wake-up pulse to be transmitted to the controller transceiver. The controller transceiver then wakes up and drives its WAKE pin logic high, which alerts the attached controller that the peripheral needs attention.

When the WAKE pin is used as an input, the signal that drives the WAKE pin can range from WAKE pin V IH to 6 V (WAKE pin absolute maximum) to allow the transceiver to detect a logic high. The WAKE pin is powered from the VP or VDD pin. Therefore, the WAKE pin does not need the VDDS pin to be supplied to operate. The WAKE output is current-limited to I PU(WAKE/INTR) for pull-up and to I PD(WAKE/INTR) for pull-down. The maximum output voltage of the WAKE pin is specified by V PU(WAKE/INTR) . If that voltage is not compatible with the input voltage limit of a connected device, a Zener diode clamp or a level shifter may be required.

## MULTIDROP

Multiple peripherals can be connected to a single controller by connecting them in parallel (multidrop configuration) along one cable. As shown in Figure 40, terminate the cable only at the beginning (controller) and the end. In between, the additional ADBMS6821/ ADBMS6822 devices and their associated peripheral devices are connected to stubs on the cable. Keep these stubs short, with as little capacitance as possible, to avoid degrading the termination along the cable. The multidrop configuration is only possible if the SPI peripherals have the following characteristics:

- The SPI peripherals must be addressable, because they all see the same CS signal (as decoded by each peripheral transceiver).
- When not addressed, the peripheral SDO must remain high.

## THEORY OF OPERATION

When a peripheral is not addressed, its transceiver does not transmit data pulses as long as POCI (SDO of the SPI device) remains high to eliminate the possibility for collisions, because only the addressed peripheral device returns data to the controller.

Figure 40. Multiple Peripherals on a Single Cable

<!-- image -->

## THEORY OF OPERATION

## LPCM TIMEOUT MONITOR

The ADBMS6821/ADBMS6822 transceivers can be configured to work as the timeout monitor in systems using the LPCM feature of select ADBMS battery monitors. During LPCM operation, the battery monitors can be configured to monitor the cell stack for a variety of alert conditions and regularly communicate this condition by sending heartbeat messages to the transceiver, all while consuming very low average power. The transceiver monitors these heartbeat messages from the battery monitors to determine whether to assert the INTR pin high to alert the microcontroller. A simplified block diagram of an LPCM BMS system is shown in Figure 41.

Figure 41. Simplified LPCM BMS

<!-- image -->

To function as a timeout monitor, the XCVRMD pin must have a 20 kΩ pull-down to GND, and the RTO pin condition sets the timeout period for the timeout monitor. The microcontroller drives the MSTR pin high while communicating through the transceiver to the BMS devices. To enable the LPCM operation, the microcontroller first configures the ADBMS battery monitors for LPCM operation and then drives the MSTR pin low to activate the timeout monitor feature of the transceiver.

When the timeout monitor is activated by driving MSTR pin low, the transceiver initially asserts the INTR pin high. The timeout monitor assumes that until the first heartbeat message has fully propagated through the daisy chain, there may be a fault in the system in the initial state. This transition of the INTR pin from low to high also serves as an indication to the microcontroller that the timeout monitor function has been activated. The INTR pin remains asserted high until a pass heartbeat message is received from the battery monitors. The battery monitors are designed to initiate the first heartbeat sequence quickly after initially enabling LPCM operation. Thus, the initial status of the cell stack is quickly evaluated and the INTR pin is deasserted low if no faults are indicated. Leaving the INTR pin asserted until the cell stack is evaluated provides the microcontroller with further confirmation that the LPCM operation has begun and the cell stack is not in an unexpected condition.

After the INTR pin is deasserted low, the internal timer is reset to 0. If a pass heartbeat message is received before the timeout period, INTR remains low and the internal timer is reset again, which starts another timeout period. If a fail heartbeat message is received or if the timeout expires, INTR is asserted high. The INTR pin gives an alert when a failure is indicated by the battery monitors or cases where the communication link has failed. INTR can connect to an interrupt pin on the microcontroller to wake it up, or it can be used to turn on a power supply to power up the BMS controller.

After timeout monitor operation has begun, the VDD and VDDS pins are not required to be supplied. The system can choose to disable power to these supplies to limit power consumption in the system. The INTR pin output can operate from the power supplied to the VP pin. The isoSPI output drivers on the IP pin and IM pin are not active. Therefore, the VDD pin supply is not required.

If the VDDS pin is supplied during timeout monitor operation, the transceiver continues to translate any received isoSPI traffic to the SPI port, which allows the microcontroller to observe the heartbeat messages and confirm that LPCM is working properly. The microcontroller can also diagnose the ability of LPCM to detect failure by forcing a failure detection in the configuration of the battery monitors and confirming that the INTR pin indicates the failure.

To exit timeout monitor operation, supply the VDD and VDDS pins, drive the MSTR pin high (the INTR pin deasserts low), and then send a communication sequence to the battery monitors to end their LPCM operation. The microcontroller can then resume normal communication with the battery monitors.

## LPCM RTO (RESISTOR TIMEOUT) PIN

The RTO pins on the ADBMS6821/ADBMS6822 transceivers set the timeout period when the device is configured as an LPCM timeout monitor. The timeout period settings are defined to be 50% larger than the corresponding measurement period used on the LPCM battery monitors to allow variance in the oscillator performance between the battery devices and the transceiver. The suggested 1% resistor values for the timeout periods and the corresponding LPCM measurement periods are shown in Table 23.

Table 23. RTO Resistor Selection

|   Timeout Period (sec) | RTO Resistor (kΩ) to GND   |   Measurement Period (sec) |
|------------------------|----------------------------|----------------------------|
|                    1.5 | GND or 100                 |                          1 |
|                    3   | 17.8                       |                          2 |
|                    6   | 30.9                       |                          4 |
|                   12   | 43.2                       |                          8 |
|                   18   | 56.2                       |                         12 |
|                   24   | 68.1                       |                         16 |
|                   48   | 80.6                       |                         32 |

## LPCM INTR PIN

The INTR pins of the ADBMS6821/ADBMS6822 transceivers are current-limited outputs that indicate the LPCM interrupt state when the device is configured as a timeout monitor. For the description of the INTR operation, see the LPCM Timeout Monitor section.

The INTR output is current-limited to a nominal 20 µA (both for pull-up and pull-down). The maximum output voltage can range from V DD - 1.5 V to V DD (no DC loadings) depending on the supply voltage of the VP and VDD pins. If that voltage is not compatible with the input voltage limit of a connected device, a Zener diode clamp or a level shifter may be required.

## THEORY OF OPERATION

## LPCM HEARTBEAT MESSAGES

The LPCM feature uses messaging between the battery monitor devices and the timeout monitor to communicate the monitoring status. The heartbeat message contains device count information about the number of devices reporting passing conditions, as well as a field of flags that indicate the types of failing conditions that can be detected. It is sent as a 64-bit message containing a command with a packet error check (PEC) code and data with its own PEC code. The usage of the PEC values protects against communication faults.

The first 32 bits contain a command and PEC, which identify the communication as a heartbeat. Any other value is ignored by the timeout monitor without being recognized as either a pass heartbeat or as a fail heartbeat. A pass or fail heartbeat can only be recognized if the first 32 bits match exactly.

The subsequent 32 bits of the message represents 16 bits of the device count and flag data and 16 bits of PEC code. If a heartbeat command has been recognized, this 32-bit data portion is detected as either a pass or as a fail message. A single 32-bit value is recognized as a pass message. For any other 32-bit value, or if the total communication length is not exactly 64 bits long, then the timeout monitor recognizes this as a fail heartbeat and immediately asserts the INTR pin high without waiting for the timeout value to elapse.

Table 24 and Table 25 show the contents of a pass heartbeat message. Note that, unlike other communication in a BMS daisy chain, the heartbeat message is initiated by the battery monitors instead of being initiated by the microcontroller.

Table 24. Heartbeat Command and PEC Value

| Byte 1   | Value   |
|----------|---------|
| HBC0     | 0x00    |
| HBC1     | 0x43    |
| HBC2     | 0x47    |
| HBC3     | 0xB2    |

1 HBC0 and HBC1 represent the heartbeat command. HBC2 and HBC3 represent the PEC.

Table 25. Heartbeat Data and PEC Value

| Byte 1   | Value   |
|----------|---------|
| HBD0     | 0x42    |
| HBD1     | 0x00    |
| HBD2     | 0x03    |
| HBD3     | 0x94    |

1 HBD0 and HBD1 represent the heartbeat data. HBD2 and HBD3 represent the PEC.

## LPCM EXPANDED STATE DIAGRAM

Figure 42 shows the expanded state diagram for the ADBMS6821/ ADBMS6822 transceivers when they are set up to work as an LPCM timeout monitor, that is, when configured as a peripheral

(MSTR connected to GND) with the LPCM timeout monitor function enabled (XCVRMD pin has 20 kΩ to GND). When compared to the isoSPI state diagram shown in Figure 38, Figure 42 includes an extra state named listen.

When in the listen state, the transceiver works as an LPCM timeout monitor. Note that the time it takes for the transceiver to enter the listen state from the ready state when there is no isoSPI activity is t LISTEN . t LISTEN reduces the average power consumption during the LPCM timeout monitor operation.

Figure 42. LPCM Expanded State Diagram

<!-- image -->

## LPCM SUPPLY CURRENT CONSUMPTION

When the ADBMS6821/ADBMS6822 transceivers are configured as an LPCM timeout monitor, they stay in the listen state for most of the time. When a transceiver receives the heartbeat message, it enters the ready state and the isoSPI receiver wakes. After the heartbeat message is received, the transceiver goes back to the listen state after t LISTEN . The average power consumption, therefore, depends on the heartbeat period that the BMS stack monitors use during the LPCM operation.

When the transceiver enters the ready state, the supply current increases to a value of I VDD/VP(RDY\_LPCM) . Note that this is lower than the ready state current in regular non LPCM operation.

The instantaneous current consumption for a chosen heartbeat period is broken up as follows:

- I VDD/VP(RDY\_LPCM) for the duration of the heartbeat message (which, in a typical application, is ~700 µs) and the t LISTEN time (typically ≈ 250 μs). The total time is approximately 1 ms.
- I VP(LSTN) for the rest of the heartbeat period.

In a typical application, when the transceiver is configured as an LPCM timeout monitor, V DD is expected to be 0 V during the timeout monitor operation, and the device is powered only using the battery power supplied to the VP pin. The average supply current consumption for a timeout period is therefore as follows:

## THEORY OF OPERATION

Average LPCM Supply Current = I VP LSTN + I VDD/VP RDY\_LPCM ×1ms /Heartbeat Period

(1)

Thus, for instance, when V P = 12 V, V DD = 0 V, and heartbeat period = 1 sec, the average LPCM supply current is approximately 12 µA.

## SPI PINS DURING LPCM

When the MSTR pin transitions low to begin LPCM operation, the CS, SCK, and PICO pins of the transceiver cease to operate as input pins and begin to operate as low impedance output pins. The POCI pin ceases to operate as a low impedance output pin and begins to operate as an input pin, which can cause contention if the VDDS supply remains powered and the attached microcontroller continues to drive the CS, SCK, and PICO pins. To prevent contention on these pins, disable the VDDS supply or stop the microcontroller from driving these pins before driving the MSTR pin low.

## APPLICATIONS INFORMATION

## SOFTWARE LAYER

The isoSPI physical layer has high immunity to EMI and is not particularly susceptible to bit errors induced by noise. But for optimal results in a high noise environment, implement a software layer that uses an error detection code, for example, a cyclic redundancy check (CRC) or checksum. Error detection codes allow software detection of any bit errors and notify the system to retry the last erroneous serial communication.

## OUTLINE DIMENSIONS

Figure 43. 32-Lead Lead Frame Chip-Scale Package [LFCSP\_SS] 5 mm × 5 mm Body, with Side Solderable Leads (05-08-7057) Dimensions Shown in millimeters

<!-- image -->

<!-- image -->

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1, 2, 3, 4, 5   | Temperature Range   | Package Description                               | Packing Quantity   | Package Option   |
|-----------------------|---------------------|---------------------------------------------------|--------------------|------------------|
| ADBMS6821WCCSZ        | -40°C to +125°C     | 32-Lead Plastic Side Solderable QFN (5 mm × 5 mm) | Tray, 490          | 05-08-7057       |
| ADBMS6821WCCSZ-RL     | -40°C to +125°C     | 32-Lead Plastic Side Solderable QFN (5 mm × 5 mm) | Reel, 5000         | 05-08-7057       |
| ADBMS6822WCCSZ        | -40°C to +125°C     | 32-Lead Plastic Side Solderable QFN (5 mm × 5 mm) | Tray, 490          | 05-08-7057       |
| ADBMS6822WCCSZ-RL     | -40°C to +125°C     | 32-Lead Plastic Side Solderable QFN (5 mm × 5 mm) | Reel, 5000         | 05-08-7057       |
| ADBMS6821CCSZ         | -40°C to +125°C     | 32-Lead Plastic Side Solderable QFN (5 mm × 5 mm) | Tray, 490          | 05-08-7057       |
| ADBMS6821CCSZ-RL      | -40°C to +125°C     | 32-Lead Plastic Side Solderable QFN (5 mm × 5 mm) | Reel, 5000         | 05-08-7057       |
| ADBMS6822CCSZ         | -40°C to +125°C     | 32-Lead Plastic Side Solderable QFN (5 mm × 5 mm) | Tray, 490          | 05-08-7057       |
| ADBMS6822CCSZ-RL      | -40°C to +125°C     | 32-Lead Plastic Side Solderable QFN (5 mm × 5 mm) | Reel, 5000         | 05-08-7057       |

## EVALUATION BOARDS

| Model 1        | Description      |
|----------------|------------------|
| EVAL-ADBMS6822 | Evaluation Board |

## AUTOMOTIVE PRODUCTS

The ADBMS6821W and ADBMS6822W models are available with controlled manufacturing to support the quality and reliability requirements of automotive applications. Note that these automotive models may have specifications that differ from the commercial models, therefore, designers must review the Specifications section of this data sheet carefully. Only the automotive-grade products shown are available for use in automotive applications. For specific product ordering information and to obtain the specific Automotive Reliability reports for these models, contact the local Analog Devices, Inc., account representative.

<!-- image -->

Updated: September 02, 2021