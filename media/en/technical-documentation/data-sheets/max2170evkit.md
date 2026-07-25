<!-- lastmod 2022-08-02 -->
## General Description

The MAX2170 evaluation kit (EV kit) simplifies evaluation of the MAX2170 direct-conversion to low-IF tuner. It enables testing of the device's performance and requires no additional support circuitry. Standard 50 Ω SMA and BNC connectors are included on the EV kit for the inputs and outputs to allow quick and easy evaluation on the test bench. The EV kit is fully assembled and tested at the factory.

This document provides a list of equipment required to evaluate the device, a straightforward test procedure to verify functionality, a description of the EV kit circuit, the circuit  schematic,  a  bill  of  materials  (BOM)  for  the  kit, and artwork for each layer of the PCB.

| DESIGNATION                                          |   QTY | DESCRIPTION                                         |
|------------------------------------------------------|-------|-----------------------------------------------------|
| C1                                                   |     1 | 18pF ±5% capacitor (0402) Murata GRM1555C1H180J     |
| C2, C6, C46, C47, C71, C72, C73                      |     7 | 330pF ±10% capacitors (0402) Murata GRM155R71H331K  |
| C3, C14, C17                                         |     3 | 1.0µF ±10% capacitors (0402) Murata GRM155R60J105K  |
| C4                                                   |     1 | 100µF ±20% capacitor (1210) AVX 1210D107MAT         |
| C5                                                   |     1 | 4.7µF ±20% capacitor (0805) Murata GRM21BF51A475Z   |
| C7, C18, C22, C38, C39, C41                          |     6 | 1000pF ±5% capacitors (0402) Murata GRM1555C1H102J  |
| C8, C13, C16, C20, C28, C29                          |     6 | 0.01µF ±10% capacitors (0402) Murata GRM155R71C103K |
| C9, C10, C15, C19, C21, C31, C40, C42, C44, C45, C75 |    11 | 0.1µF ±10% capacitors (0402) Murata GRM155R61A104K  |
| C11, C12                                             |     2 | 0.33µF ±10% capacitors (0603) Murata GRM155R60J334K |

## Component List

| DESIGNATION                           |   QTY | DESCRIPTION                                                   |
|---------------------------------------|-------|---------------------------------------------------------------|
| C23                                   |     1 | 100pF ±5% capacitor (0402) Murata GRM1555C1H101J              |
| C24, C25, C26, C30, C32-C37, C43, C48 |     0 | Not installed, capacitors                                     |
| C27                                   |     1 | 33pF ±5% capacitor (0402) Murata GRM1555C1H330J               |
| C76                                   |     1 | 10µF ±10% tantalum capacitor (C-case) AVX TAJC106K016         |
| D1                                    |     1 | Super-mini Schottky diode Central Semi CMDSH2-3 (lead free)   |
| J1                                    |     1 | BNC 50 Ω vertical mount A/D Electronics 580-002-00            |
| J2                                    |     0 | Not installed                                                 |
| J3, J4                                |     2 | SMA end-launch jack receptacles, 0.062in Johnson 142-0701-801 |
| J13                                   |     1 | DB25 right-angle male connector AMP 5747238-4                 |
| JP1                                   |     0 | Not installed                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

Features

- ♦ Easy Evaluation of the MAX2170
- ♦ +2.7V to +3.5V Single-Supply Operation
- ♦ 50 Ω SMA Connector on the RF Ports
- ♦ 50 Ω BNC Connector for the Baseband Output
- ♦ Jumpers for Automatic Gain Control
- ♦ All Critical Peripheral Components Included
- ♦ Parallel Port for I 2 C Interfacing
- ♦ PC Control Software Available at www.maxim-ic.com

## Ordering Information

<!-- image -->

| PART          | TEMP RANGE     | IC PACKAGE   |
|---------------|----------------|--------------|
| MAX2170EVKIT+ | -40°C to +85°C | 40 QFN-EP*   |

## MAX2170 Evaluation Kit

| DESIGNATION                       |   QTY | DESCRIPTION                                             |
|-----------------------------------|-------|---------------------------------------------------------|
| JP3                               |     1 | 1 x 2 in-line header, 100-mil center Sullins PEC36SAAN  |
| JP4, JP10                         |     2 | 1 x 3 in-line headers, 100-mil center Sullins PEC36SAAN |
| L1                                |     1 | Not installed                                           |
| L3, L4                            |     2 | 91nH ±5% inductors (0603CS) Murata LQW18AN91NJ00        |
| Q1, Q2, Q3                        |     3 | NPN 1GHz wideband transistors Philips BFS17W            |
| R1                                |     1 | 270 Ω ±5% resistor (0402)                               |
| R2, R6                            |     2 | 1k Ω ±1% resistors (0402)                               |
| R3, R9-R12, R18, R41, R42         |     8 | 100 Ω ±5% resistors (0402)                              |
| R4, R5                            |     2 | 2k Ω ±1% resistors (0402)                               |
| R7, R35, R39                      |     3 | 12k Ω ±5% resistors (0402)                              |
| R8, R37, R46, R47                 |     4 | 2.7k Ω ±5% resistors (0402)                             |
| R13                               |     1 | 27.4k Ω ±1% resistor (0402)                             |
| R14, R43                          |     2 | 5.1k Ω ±5% resistors (0402)                             |
| R15, R16, R19, R25, R27, R28, R29 |     0 | Not installed, resistors                                |
| R17, R20, R21, R22, R24           |     5 | 10k Ω ±5% resistors (0402)                              |
| R23                               |     1 | 49.9 Ω ±1% resistor (0402)                              |

## Component List (continued)

| DESIGNATION                                                        |   QTY | DESCRIPTION                                                |
|--------------------------------------------------------------------|-------|------------------------------------------------------------|
| R26                                                                |     1 | 0 Ω ±5% resistor (0402)                                    |
| R30                                                                |     1 | 6.2k Ω ±5% resistor (0402)                                 |
| R31, R33                                                           |     2 | 4.7k Ω ±5% resistors (0402)                                |
| R32                                                                |     1 | 1k Ω ±5% resistor (0402)                                   |
| R34                                                                |     1 | 160k Ω ±5% resistor (0402)                                 |
| R36, R38                                                           |     2 | 39k Ω ±5% resistors (0402)                                 |
| U1                                                                 |     1 | MAX2170ETL+                                                |
| U2                                                                 |     1 | MAX4453ESA+ single-supply op amp with rail-to-rail outputs |
| U3                                                                 |     1 | Hex buffer/driver Texas Instruments SN74LV07ADB            |
| U4                                                                 |     1 | MAX4729EXT+ low-voltage, SPDT CMOS analog switch           |
| Y2                                                                 |     1 | 24.576MHz crystal TXC Corporation 7B24500140               |
| BB+, BB-, HOLD_AGC, J5, J14, MUX, REF, VDET, VGC_BB, VGC_RF, VTUNE |    11 | PC mini (red) Keystone 5000                                |
| GND, J15, TP1, TP2                                                 |     4 | PC mini (black) Keystone 5001                              |
| -                                                                  |     1 | MAX2170EVKIT+ PCB                                          |

## Component Suppliers

| SUPPLIER                    | PHONE        | FAX          | WEBSITE             |
|-----------------------------|--------------|--------------|---------------------|
| AVX Corp.                   | 843-448-9411 | 843-448-7139 | www.avxcorp.com     |
| Central Semiconductor Corp. | 631-435-1110 | 631-435-1824 | www.centralsemi.com |
| Coilcraft, Inc.             | 847-639-6400 | 847-639-1469 | www.coilcraft.com   |
| Murata Mfg. Co., Ltd.       | 770-436-1300 | 770-436-3030 | www.murata.com      |
| Philips                     | 800-447-1500 | -            | www.nxp.com         |
| Texas Instruments Inc.      | 800-336-5236 | -            | www.ti.com          |
| TXC Technology              | 714-990-5510 | 714-990-5520 | www.txc.com.tw      |

Note: Indicate that you are using the MAX2170 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quick Start

## Recommended Equipment

This section lists  the  recommended test equipment to verify  operation of the MAX2170. It is intended as a guide only, and some substitutions are possible:

- One RF signal generator capable of delivering at least  +5dBm of output power at the operating frequency (HPE4433B or equivalent)
- An RF spectrum analyzer that covers the MAX2170 operating-frequency range (e.g., FSEB20)
- A power supply capable of up to 1A at +2.7V to +6.0V
- One ammeter for measuring the supply current (optional)
- 50 Ω SMA cables
- 50 Ω BNC cables
- A network analyzer (e.g., HP 8753D) to measure small-signal return loss (optional)

## Procedure

## Measurement Considerations

The MAX2170 EV kit includes an on-board buffer that converts the baseband differential outputs to a singleended output (see Figure 1 for details). The buffer is configured for a gain of one. The output of the buffer consists of a 50 Ω resistor in series for matching to RF test equipment. Note that there is a 6dB loss at the output if  50 Ω test  equipment is used. This loss must be accounted for when measuring gain.

## Connections and Setup

The MAX2170 EV kit is fully assembled and tested. This section provides a step-by-step guide to operating the EV kit and testing the device's function. Caution: Do not turn on the DC power or RF signal generators until all connections are made:

- 1) Connect a DC supply set to +3.0V (through an ammeter if desired) to the VCC and GND terminals on the EV kit. Do not turn on the supply. Note that VCC and VCC2 on the EV kit board are shorted together through JP3.
- 2) Connect a DC supply set to +2.4V (maximum gain) to the RFAGC terminal on the EV kit. Do not turn on the supply.
- 3) Connect a DC supply set to +2.4V (maximum gain) to the BBAGC terminal on the EV kit. Do not turn on the supply.

<!-- image -->

## MAX2170 Evaluation Kit

- 4) Connect one RF signal generator to either the VHFIII,  FM, or L-BAND input through the SMA connectors J3 and J4, respectively. Do not turn on the generator's output.
- 5) Connect the baseband output on the EV kit to a spectrum analyzer through a BNC cable.
- 6) Connect the EV kit board to the PC through a parallel cable.
- 7) Turn on the DC supply. The supply current should read approximately 70mA.
- 8) Run the control software on an IBM-compatible PC. Using the control software, configure the following:
- a) Select the desired band of operation and channel  through the Block section of the software's graphical interface.
- b) Based on the LO frequency, the EV kit software automatically sets the appropriate tracking-filter settings in VHF/FM mode.
- c) The power-detector threshold is factory-calibrated to a typical input power of -52dBm. This information is stored in bits &lt;7:5&gt; of register 00 in the ROM table. The EV kit software automatically loads the information stored in bits &lt;7:5&gt; of register 00 in the ROM table into bits &lt;7:5&gt; in register  08  to  set  the  proper  power-detector response.
- d) The baseband filter is factory-trimmed to have a typical bandwidth (-3dB corner) at 0.8 MHz. The information is stored in bits &lt;2:0&gt; of register 04 in  the ROM table. The EV kit software automatically loads the information stored in bits &lt;2:0&gt; of register  04  in  the  ROM  table into  bits  &lt;2:0&gt;  in register  08  to  set  proper  baseband  filter  bandwidth.
- e) The  VCO  Auto  Selection  (VAS)  is  already enabled through default settings (this allows the software to pick the appropriate VCO sub-band for  the  desired operation frequency). If desired, the VAS can be turned off to manually select the desired sub-band. VAS can be disabled through the VAS\_EN bit on the Registers or Block section of the software.
- 9) Activate and set the power level of the RF generator to  achieve 1VP-P at  the  IF  connector output or 0.5VP-P (-2dBm) when loaded by a 50 Ω instrument.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2170 Evaluation Kit

Note the 6dB loss at the output ports of the EV kit due to the 50 Ω resistor  in  series  at  the  buffer  outputs and the 50 Ω load of the test equipment.

## Gain Control

The RF and baseband VGA circuits of the MAX2170 are controlled independently through jumpers JP10 and JP4, respectively. Connecting pins 2-3 of JP10 closes the RF gain control loop. The MAX2170 EV kit also implements a control loop for the baseband VGA through shorting pins 1-2 of JP4. The HOLD\_AGC controls  the  MAX4729 analog switch (see Figure 1 for schematic details). In typical applications, the demodulator  controls  the  baseband VGA. The analog switch and the external AGC circuitry (Q1, Q2, and Q3) are optional components and only needed when the demodulator lacks a baseband AGC control circuit.

## Layout Issues

A good PCB is an essential part of an RF circuit design. The EV kit PCB serves as a guide for laying out a board using the MAX2170. Keep traces carrying RF signals as short as possible to minimize radiation and insertion loss.  Use impedance control on all RF signal traces. The exposed paddle must be soldered evenly to the board's ground plane for proper operation. Use abundant vias beneath the exposed paddle and between RF traces to minimize undesired RF coupling.

To minimize coupling between different sections of the IC, each VCC pin must have a bypass capacitor with low impedance to the closest ground at the frequency of interest. Do not share ground vias among multiple connections to the PCB ground plane. Refer to the Layout section of the MAX2170 data sheet for more information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2170 Evaluation Kit

Figure 1. MAX2170 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2170 Evaluation Kit

Figure 2. MAX2170 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2170 Evaluation Kit

<!-- image -->

Figure 3. MAX2170 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2170 Evaluation Kit

Figure 4. MAX2170 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Boblet