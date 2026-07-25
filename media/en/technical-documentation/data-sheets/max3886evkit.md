<!-- lastmod 2022-08-02 -->
## General Description

The MAX3886 evaluation kit (EV kit) is a fully assembled and tested demonstration board that simplifies evaluation of the MAX3886 BPON/GPON CDR with serializer/ deserializer.  The  EV  kit  operates  from  a  single  +3.3V supply and includes the external components necessary for testing all the MAX3886 functions.

| DESIGNATION                                              |   QTY | DESCRIPTION                                                  |
|----------------------------------------------------------|-------|--------------------------------------------------------------|
| C1                                                       |     1 | 33µF ± 5% tantalum capacitor (B case) AVX TAJB336K010R       |
| C2-C6, C9, C43, C44                                      |     8 | 0.1µF ± 10% ceramic capacitors (0402) Murata GRM155R61A104K  |
| C7                                                       |     1 | 2.2µF ± 10% ceramic capacitor (0805) Murata GRM21BR71A225K   |
| C8                                                       |     1 | 0.1µF ± 10% ceramic capacitor (0603) Murata GRM188R71E104K   |
| C11, C12, C13, C23, C28, C32-C36, C47, C48               |    12 | 0.22µF ± 10% ceramic capacitors (0402) Murata GRM155R60J224K |
| C27                                                      |     1 | 0.27µF ± 5% ceramic capacitor (0603) Panasonic ECJ-1VB0J274K |
| C63                                                      |     1 | 10pF ± 10% ceramic capacitor (0603) Murata GRM1885C1H100J    |
| J1, J2, J3, J9-J12, J14, J15, J19, J20, J22-J30, J33-J36 |    24 | SMB connectors, PC mount Johnson 131-1701-201                |

<!-- image -->

## MAX3886 Evaluation Kit

## Features

- ♦ Fully Assembled and Tested
- ♦ Single +3.3V Power-Supply Operation
- ♦ SMA and SMB Connectors for High-Speed I/Os
- ♦ Includes 19.4400MHz SMD Crystal Reference

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3886EVKIT+ | EV Kit |

## Component List

| DESIGNATION                                 |   QTY | DESCRIPTION                                                                           |
|---------------------------------------------|-------|---------------------------------------------------------------------------------------|
| J5-J8, J21, J37, J38                        |     7 | SMA connectors, edge-mount, tab center Johnson 142-0701-851                           |
| JU1-JU4                                     |     4 | 1 x 3-pin headers (0.1in centers) Sullins PEC36SAAN                                   |
| R1-R4, R7, R12, R13, R49, R55, R56, R69-R76 |    18 | 0 ± 5% resistors (0402)                                                               |
| R8                                          |     1 | 100 ± 1% resistor (0402)                                                              |
| R61                                         |     0 | Not installed                                                                         |
| R66                                         |     1 | 49.9 ± 1% resistor (0603)                                                             |
| TP1-TP6, J16, J17                           |     8 | Test points Keystone 5000                                                             |
| U1                                          |     1 | Multirate CDR with integrated serializer/deserializer (56-pin TQFN) Maxim MAX3886ETN+ |
| X2                                          |     1 | 19.4400MHz SMD crystal, 18pF Citizen CS20-19.440MABJTR                                |
| None                                        |     4 | Shunts for JU1-JU4 Sullins SSC02SYAN                                                  |
| None                                        |     1 | PCB: MAX3886 EV Kit+ Circuit Board, Rev A                                             |

1

## MAX3886 Evaluation Kit

## Quick Start

- 1) Install  shunts  on  the  VCC  side  of  jumpers  MSYM (JU3) and MVCO (JU4). This configures the MAX3886 for symmetric 2.48832Gbps upstream and downstream serial data.
- 2) Install  a  shunt  on  the  VCC  side  of  jumper  FRST (JU1) to hold the serializer FIFO in reset.
- 3) Install  a  shunt  on  the  GND  side  of  jumper  MDDR (JU2). This sets the parallel clock output (PCKO) for full-rate operation (622.08MHz).
- 4) Connect a +3.3V power supply to the VCC and GND terminals (J16, J17). Set the supply current limit  to  400mA.  Monitor  the  supply  voltage  at  test points TP1 and TP2.
- 5) Apply a continuous 2.48832Gbps PRBS differential data signal to the SDI inputs (J37, J38). Set the differential  swing between 200mVP-P and 1600mVP-P (100mVP-P and 800mVP-P single-ended).
- 6) Verify the LOCK output (TP4) is high.
- 7) Using 50 Ω SMB cables, connect the parallel clock outputs (PCKO and RCKO) and parallel data outputs (PDO[3:0]) to 50 Ω terminated test equipment (high-speed scope, error detector).
- 8) After  verifying  the  parallel  outputs,  connect  PCKO to  PCKI and PDO[3:0] to PDI[3:0] for a parallel loopback configuration. All cables must be equal electrical length to ensure that setup and hold timing requirements are satisfied.
- 9) Move the shunt to the GND side of jumper FRST (JU1) to take the FIFO out of reset. Verify the FERR output (TP3) is low.
- 10) Attach DC blocks to the SDO outputs (J5, J6) and connect to 50 Ω terminated test equipment (highspeed scope, error detector).
- 11) Apply a DC-balanced differential signal, such as a repeating 155.52Mbps 0101 pattern, to the BENI inputs (J3, J14). The signal must be synchronous to the serial data pattern generator and transitions must be aligned with the falling edge of the parallel input clock to ensure setup and hold timing requirements are satisfied. Set the differential swing to 600mVP-P (300mVP-P single-ended) with a 1.2V common-mode voltage.
- 12) Attach DC blocks to the BENO outputs (J7, J8) and connect to a 50 Ω terminated high-speed scope.

## Detailed Description

The MAX3886 EV kit simplifies evaluation of the MAX3886. It operates from a +3.3V single supply and includes SMA and SMB connectors for access to the high-speed I/O signals. An on-board 19.4400MHz SMD crystal serves as the CDR reference. Jumpers are used to select the operational modes and reset the FIFO. Test points provide easy monitoring of the supply voltage, FERR output, and LOCK output. See Tables 1 and 2.

## Interface to Serial Data Inputs (SDI+/-)

The serial data inputs are AC-coupled and have a 100 Ω differential termination. They can be directly connected to a pattern generator. Differential input swings should be set between 200mVP-P and 1600mVP-P (100mVP-P and 800mVP-P single-ended).

## Interface to LVDS Outputs (PCKO, PDO[3:0], RCKO)

The LVDS outputs are AC-coupled and can be connected to 50 Ω terminated test equipment (high-speed scope, error detector). The LVDS outputs can also be connected to the LVDS inputs, which have internal 100 Ω differential terminations.

## Interface to LVDS Inputs (PCKI, PDI[3:0], BENI)

The LVDS inputs are DC-coupled and must be driven with a differential swing and common-mode voltage as specified in the MAX3886 data sheet. Typical LVDS signals are 600mVP-P differential (300mVP-P singleended) with a 1.2V common-mode voltage. All signals applied to the LVDS inputs must be synchronous to the downstream data due to the internal loop timing of the serializer.  Parallel  data  and  burst-enable transitions must be aligned with the falling edge of the parallel input clock to ensure setup and hold timing requirements are satisfied.

## Interface to CML Outputs (SDO, BENO)

The CML outputs are DC-coupled to permit transfer of signals that may not be DC balanced, such as burst signals, to a burst-mode laser driver (see Figure 1). DC blocks are required to connect the CML outputs to 50 Ω terminated test equipment (high-speed scope, error detector). External DC blocks can be used, or the onboard series resistors R1-R4 can be replaced with capacitors ( ≥ 0.1µF recommended). While using DCblocks, the upstream data must be continuous, and the burst-enable signal must be a high-frequency DC-balanced signal, such as a repeating 155Mbps 0101 pattern (see Figure 2).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## FIFO Reset

The FIFO must be reset after each power-up when the read and write clocks have stabilized. A reset is also required if the parallel input clock is interrupted between bursts. If the FIFO reset input (FRST) or the FIFO error output (FERR) are high, the burst-enable output (BENO) is forced low.

## External Reference Clock

To use the EV kit with an external reference clock, disconnect the on-board crystal from the MAX3886 by

Table 1. Clock and Data Rate Controls

|            |            |            | Rx              | Rx              | Rx         | Tx              | Tx              | Tx         | Tx         |
|------------|------------|------------|-----------------|-----------------|------------|-----------------|-----------------|------------|------------|
| MVCO (JU4) | MSYM (JU3) | MDDR (JU2) | SDI RATE (Mbps) | PDO RATE (Mbps) | PCKO (MHz) | SDO RATE (Mbps) | PDI RATE (Mbps) | PCKI (MHz) | RCKO (MHz) |
| GND        | GND        | GND        | 622             | 155             | 155        | 155             | 39              | 39         | 39         |
| GND        | GND        | VCC        | 622             | 155             | 78         | 155             | 39              | 39         | 39         |
| GND        | VCC        | GND        | 622             | 155             | 155        | 622             | 155             | 155        | 155        |
| GND        | VCC        | VCC        | 622             | 155             | 78         | 622             | 155             | 155        | 155        |
| Open       | GND        | GND        | 1244            | 311             | 311        | 622             | 155             | 155        | 155        |
| Open       | GND        | VCC        | 1244            | 311             | 155        | 622             | 155             | 155        | 155        |
| Open       | VCC        | GND        | 1244            | 311             | 311        | 1244            | 311             | 311        | 311        |
| Open       | VCC        | VCC        | 1244            | 311             | 155        | 1244            | 311             | 311        | 311        |
| VCC        | GND        | GND        | 2488            | 622             | 622        | 1244            | 311             | 311        | 311        |
| VCC        | GND        | VCC        | 2488            | 622             | 311        | 1244            | 311             | 311        | 311        |
| VCC        | VCC        | GND        | 2488            | 622             | 622        | 2488            | 622             | 622        | 622        |
| VCC        | VCC        | VCC        | 2488            | 622             | 311        | 2488            | 622             | 622        | 622        |

## Table 2. Jumper and Test Point Descriptions (see Quick Start first)

| COMPONENT   | NAME     | FUNCTION                                                                                                                                                                                                                                                  |
|-------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1         | FRST     | Jumper to reset the FIFO. Connect high (VCC) to reset the FIFO. Connect low (GND) during normal operation. If FRST or FERR (TP3) is high, BENO is forced low.                                                                                             |
| JU2         | MDDR     | Jumper to select dual data rate parallel clock output. See Table 1.                                                                                                                                                                                       |
| JU3         | MSYM     | Jumper to select symmetric or assymetric operation. See Table 1.                                                                                                                                                                                          |
| JU4         | MVCO     | Jumper to select VCO rate. See Table 1.                                                                                                                                                                                                                   |
| TP1, TP2    | VCC, GND | Test points for monitoring the supply voltage.                                                                                                                                                                                                            |
| TP3         | FERR     | Test point for monitoring the FIFO error output. A high output indicates when the FIFO read and write clocks attempt to access the same register. The FIFO error flag is cleared using the FRST input (JU1). If FRST or FERR is high, BENO is forced low. |
| TP4         | LOCK     | Test point for monitoring the LOCK output. A high output indicates that the PLL is in lock.                                                                                                                                                               |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3886 Evaluation Kit

removing resistors R12 and R13, and install a 0 Ω resistor  at  R61.  Connect the clock source to the REFCK1 input (J21), and set the frequency to 19.4400MHz and the swing to 3.3VP-P. The EV kit includes a 50 Ω termination (R66) to ground and a 10pF series capacitor (C63).

## Parallel Loopback

Connect PCKO to PCKI and PDO[3:0] to PDI[3:0] for a parallel loopback configuration (see Figure 3). All cables must be equal electrical length to ensure setup and hold timing requirements are satisfied.

## MAX3886 Evaluation Kit

Figure 1. Evaluating MAX3886 with Burst-Mode Transmitter

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3886 Evaluation Kit

<!-- image -->

Figure 2. Evaluating MAX3886 with High-Speed Scope

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3886 Evaluation Kit

Figure 3. Evaluating MAX3886 with Parallel Loopback

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3886 Evaluation Kit

<!-- image -->

Figure 4. MAX3886 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3886 Evaluation Kit

Figure 5. MAX3886 EV Kit Component Placement Guide-Component Side

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3886 Evaluation Kit

<!-- image -->

Figure 6. MAX3886 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3886 Evaluation Kit

Figure 7. MAX3886 EV Kit PCB Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3886 Evaluation Kit

<!-- image -->

Figure 8. MAX3886 EV Kit PCB Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3886 Evaluation Kit

Figure 9. MAX3886 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600