<!-- lastmod 2022-08-02 -->
## General Description

The MAX3580 evaluation kit (EV kit) simplifies evaluation of  the  MAX3580 direct-conversion tuner. It enables testing of the device's performance and requires no additional support circuitry. Standard 50 Ω SMA and BNC connectors are included on the EV kit for the inputs and outputs to allow quick and easy evaluation on the test bench. The EV kit is fully assembled and tested at the factory.

This document provides a list of equipment required to evaluate the device, a straightforward test procedure to verify functionality, a description of the EV kit circuit, the circuit schematic, a bill of materials (BOM) for the kit, and artwork for each layer of the printed-circuit board (PCB).

| DESIGNATION                                          |   QTY | DESCRIPTION                                         |
|------------------------------------------------------|-------|-----------------------------------------------------|
| C136, C147, C149, C151, C156, C162, C178             |     7 | 10nF ±10% capacitors (0603) Murata GRM188R71H103K   |
| C137                                                 |     1 | 47pF ±5% capacitor (0603) Murata GRM1885C1H470J     |
| C138, C143, C153, C157, C160, C164                   |     6 | 1000pF ±10% capacitors (0603) Murata GRM188R71H102K |
| C139, C163                                           |     2 | 27pF ±5% capacitors (0603) Murata GRM1885C1H270J    |
| C140, C141, C145, C159, C165, C169, C177, C179, C180 |     0 | Not installed, capacitors                           |
| C142, C148, C152, C158, C166, C168, C170, C171       |     8 | 100nF ±10% capacitors (0603) Murata GRM188R71E104K  |
| C146, C154                                           |     2 | 2.2µF ±10% capacitors (0603) Murata GRM188R61A225K  |
| C150, C155                                           |     2 | 2200pF ±10% capacitors (0603) Murata GRM188R71H222K |
| C161                                                 |     1 | 470nF ±10% capacitor (0603) Murata GRM188R61A474K   |

<!-- image -->

Features

- ♦ Easy Evaluation of the MAX3580
- ♦ +3.1V to +3.5V Single-Supply Operation
- ♦ 50 Ω SMA Connector on the RF Ports
- ♦ 50 Ω BNC Connector for the Baseband Output Ports
- ♦ Jumpers for Automatic Gain Control
- ♦ All Critical Peripheral Components Included
- ♦ Parallel Port for I 2 C Interfacing
- ♦ PC Control Software Available at www.maxim-ic.com

## Ordering Information

| PART          | TEMP RANGE     | IC PACKAGE   |
|---------------|----------------|--------------|
| MAX3580EVKIT+ | -40°C to +85°C | 32 QFN-EP*   |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------|
| C167          |     1 | 10µF ±10% tantalum capacitor (C-case) AVX TAJC106K016                                      |
| C172-C176     |     5 | 330pF ±5% capacitors (0603) Murata GRM1885C1H331J                                          |
| J30, J31      |     2 | BNC PCB receptacle (jack) post terminals, 4 legs, 433 mils (11.0mm) Amphenol 31-5329-52RFX |
| J33           |     0 | Not installed                                                                              |
| J34           |     1 | DB25 horizontal male PCB connector AMP HD-20 Series 5747238-4                              |
| J35, J36      |     2 | SMA end-launch jack receptacles, 0.062in Johnson 142-0701-801                              |
| JP34-JP40     |     0 | Not installed                                                                              |
| JP41-JP44     |     4 | In-line headers, 100-mil center Sullins PEC36SAAN                                          |
| L13           |     1 | 390nH ±5% CS inductor (0603) Coilcraft 0603CS-R39XJL                                       |

## MAX3580 Evaluation Kit

| DESIGNATION                                   |   QTY | DESCRIPTION                                      |
|-----------------------------------------------|-------|--------------------------------------------------|
| L14                                           |     1 | 68nH ±5% inductor (0603) Coilcraft 0603CS-68NXJL |
| L15, L16                                      |     0 | Not installed, inductors                         |
| R112, R123, R127, R128                        |     4 | 1k Ω ±5% resistors (0603)                        |
| R113, R114, R115, R120, R121                  |     5 | 100 Ω ±5% resistors (0603)                       |
| R116, R117, R118, R125, R126, R136            |     6 | 2.7k Ω ±5% resistors (0603)                      |
| R119                                          |     1 | 270 Ω ±5% resistor (0603)                        |
| R122, R133, R137                              |     3 | 10k Ω ±5% resistors (0603)                       |
| R124, R129                                    |     2 | 5.1k Ω ±5% resistors (0603)                      |
| R130, R131, R132, R134, R140-R145, R147, R148 |     0 | Not installed, resistors                         |
| R135, R146                                    |     2 | 0 Ω ±5% resistors (0603)                         |

## Component List (continued)

| DESIGNATION                       |   QTY | DESCRIPTION                                                 |
|-----------------------------------|-------|-------------------------------------------------------------|
| R138, R139                        |     2 | 49.9 Ω ±1% resistors (0603)                                 |
| U13, U14                          |     2 | MAX4453ESA+ single-supply op amps with rail-to-rail outputs |
| U15                               |     1 | MAX3580ETI+                                                 |
| U16                               |     1 | Hex buffer/driver Texas Instruments SN74LV07ADB             |
| Y4                                |     1 | 20MHz crystal Citizen America HCM49- 20.000MABJ-UT          |
| FREF3, MUX3                       |     0 | Not installed                                               |
| I-3, I+3, Q-3, Q+3, J28, J29, J32 |     7 | PC mini (red) Keystone 5000                                 |
| -                                 |     2 | Shorting jumpers (JP42, JP43) Sullins SSC02SYAN             |
| -                                 |     1 | PCB: MAX3580EVKIT+                                          |

## Component Suppliers

| SUPPLIER               | PHONE        | FAX          | WEBSITE           |
|------------------------|--------------|--------------|-------------------|
| AVX Corp.              | 843-448-9411 | 843-448-7139 | www.avxcorp.com   |
| Coilcraft Inc.         | 847-639-6400 | 847-639-1469 | www.coilcraft.com |
| Murata Mfg. Co., Ltd.  | 770-436-1300 | 770-436-3030 | www.murata.com    |
| Texas Instruments Inc. | 800-336-5236 | -            | www.ti.com        |

Note: Indicate that you are using the MAX3580 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

This section lists  the  recommended test equipment to verify  operation of the MAX3580. It is intended as a guide only, and some substitutions are possible:

- One RF signal generator capable of delivering at least  +5dBm of output power at the operating frequency (HPE4433B or equivalent)
- One RF power sensor capable of handling at least +20dBm of output power at the operating frequency (HP 8482A or equivalent)
- One RF power meter capable of measuring up to +20dBm of output power at the operating frequency (HP 437B or equivalent)
- An RF spectrum analyzer that covers the MAX3580 operating-frequency range (e.g., FSEB20)
- A power supply capable of up to 1A at +2.7V to +6.0V
- One ammeter for measuring the supply current (optional)
- 50 Ω SMA cables
- A network analyzer (e.g., HP 8753D) to measure small-signal return loss and gain (optional)

## Procedure

## Measurement Considerations

The MAX3580 EV kit includes on-board buffers that convert I/Q differential outputs to single-ended outputs (see Figure 1 for details). The buffers are configured for a gain of one. The output of each buffer consists of a 50 Ω resistor  in  series  for  matching  to  RF  test  equipment. Note that there is a 6dB loss at the output ports of  the  EV  kit  if  50 Ω test  equipment is used. This loss must be accounted for when measuring gain.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

On-board matching circuitry and a diplexer can be placed at the paths of the MAX3580 inputs. For matching a 50 Ω source to a 75 Ω input,  place an impedanceconversion resistor network using available component layout footprints (i.e.,  R148  and R146). Note that the input power to the device must be adjusted to account for the power loss of the resistor network. To implement a UHF and VHF simple diplexer, refer to the Front-End Diplex Filter for MAX3580 application note, available at www.maxim-ic.com/appnotes.cfm/an\_pk/3700.

## Connections and Setup

The MAX3580 EV kit is fully assembled and tested. This section provides a step-by-step guide to operating the EV kit and testing the device's function. Caution: Do not turn on the DC power or RF signal generators until all connections are made.

- 1) Verify that all jumpers are in place (i.e., JP43 to set ADDR2 for the device's address).
- 2) Connect a DC supply set to +3.3V (through an ammeter if desired) to the VCC and GND terminals on the EV kit. Do not turn on the supply.
- 3) Connect a DC supply set to +2.85V (maximum gain) to the RF\_AGC terminal on the EV kit. Do not turn on the supply.
- 4) Connect a DC supply set to +2.85V (maximum gain) to the BB\_AGC terminal on the EV kit. Do not turn on the supply.
- 5) Connect one RF signal generator to the RFIN/RFIN2 SMA connector. Do not turn on the generator's output.
- 6) Connect either of the I/Q baseband outputs on the EV kit to a spectrum analyzer through a BNC cable.
- 7) Connect the EV kit board to the PC through a parallel cable.
- 8) Turn on the DC supply. The supply current should read approximately 190mA.
- 9) Run the control software on an IBM-compatible PC. Using the control software, configure the following:
- a) Select the Register section of the EV kit software. Program the registers to the defined operational state as per Table 2 of the MAX3580 data sheet. Refer to the MAX3580 data sheet for more information.
- b) On the Synthesizer section of the software, set R Divider = 2 (this sets the comparison fre-

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3580 Evaluation Kit

- quency to 10MHz when using the on-board 20MHz crystal).
- c) Select for AutoTuner ON (this allows the software to pick the appropriate divider and to select the appropriate VCO for the entered LO frequency).
- d) Select for the appropriate RFIN or RFIN2 input on the Block Diagram section of the software.
- e) Enter the desired LO frequency.
- f) Based on the LO frequency, the EV kit software automatically sets the appropriate tracking filter setting.
- g) Activate and set the power level of the RF generator to achieve 1VP-P at the IF connector outputs, or 0.5 VP-P (-2dBm) when loaded by a 50 Ω instrument . Note the 6dB loss at the output ports of the EV kit due to the 50 Ω resistor  in series at the buffer outputs, and the 50 Ω load of the test equipment.
- h) Check the I/Q outputs.

## Gain Control

The RF and baseband VGA circuits of the MAX3580 are controlled independently through jumpers JP41 and JP44, respectively. Connecting pins 2-3 of JP41 closes the RF gain control loop.

## Layout Issues

A good PCB is an essential part of an RF circuit design. The EV kit PCB serves as a guide for laying out a board using the MAX3580. Keep traces carrying RF signals as short as possible to minimize radiation and insertion loss.  Use impedance control on all RF signal traces. The exposed paddle must be soldered evenly to the board's ground plane for proper operation. Use abundant vias beneath the exposed paddle and between RF traces to minimize undesired RF coupling.

To minimize coupling between different sections of the IC, each VCC pin must have a bypass capacitor with a low-impedance path to the closest ground at the frequency of interest. Do not share ground vias among multiple connections to the PCB ground plane. Refer to the Power-Supply Layout section of the MAX3580 data sheet for more information.

## MAX3580 Evaluation Kit

Figure 1. MAX3580 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3580 Evaluation Kit

Figure 2. MAX3580 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3580 Evaluation Kit

Figure 3. MAX3580 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3580 Evaluation Kit

Figure 4. MAX3580 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 7