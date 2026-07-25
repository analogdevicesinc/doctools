<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX9768 Evaluation Kit/Evaluation System

## General Description

The MAX9768 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that demonstrates the capabilities of the MAX9768 mono 10W Class D speaker amplifier with volume control. The MAX9768 EV kit also includes Windows ® 98SE/2000/XPcompatible software that provides a simple graphical user interface (GUI) for exercising the features of the MAX9768.

The MAX9768 evaluation system (EV system) consists of the MAX9768 EV kit and a companion CMAXQUSB serialinterface board. The CMAXQUSB interface board allows a PC to control an I 2 C interface using its USB port. Order the MAX9768 EV system (MAX9768EVCMAXQU+) for a complete PC-based evaluation of the MAX9768. Order the MAX9768 EV kit (MAX9768EVKIT+) if you already have a MAX9768-compatible serial interface.

Windows is a registered trademark of Microsoft Corp. Dual Mode is a trademark of Maxim Integrated Products, Inc.

## Component Lists MAX9768 EV System

| PART          |   QTY | DESCRIPTION            |
|---------------|-------|------------------------|
| MAX9768EVKIT+ |     1 | MAX9768 EV kit         |
| CMAXQUSB+     |     1 | Serial-interface board |

## MAX9768 EV Kit

| DESIGNATION                            | QTY                                    | DESCRIPTION                                                                                            |
|----------------------------------------|----------------------------------------|--------------------------------------------------------------------------------------------------------|
| MINIMAL COMPONENTS FOR CUSTOMER DESIGN | MINIMAL COMPONENTS FOR CUSTOMER DESIGN | MINIMAL COMPONENTS FOR CUSTOMER DESIGN                                                                 |
| C1, C2                                 | 2                                      | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K                                    |
| C3, C5                                 | 2                                      | 1µF ±10%, 10V X7R ceramic capacitors (0603) Murata GRM188R61A105K                                      |
| C4                                     | 1                                      | 0.47µF ±10%, 16V X7R ceramic capacitor (0805) Murata GRM21BR71C474K                                    |
| C6, C8                                 | 2                                      | 1µF ±10%, 16V X7R ceramic capacitors (0805) Murata GRM21BR71C105K                                      |
| C7, C21                                | 2                                      | 22µF ±20%, 16V aluminum electrolytic capacitor (C case) Panasonic EEEFC1C220R                          |
| R2, R3                                 | 2                                      | 20k Ω ±1% resistors (0603)                                                                             |
| U1                                     | 1                                      | Maxim 10W mono speaker amplifier with volume control MAX9768ETG+ (24-pin, 4mm x 4mm x 0.8mm, TQFN-EP*) |

## Features

- ♦ Fully Tested PCB
- ♦ 10W Output into 8 Ω Load at 13V Power Supply
- ♦ Bridge-Tied Load (BTL) Output and Click-and-Pop Suppression
- ♦ Dual Mode™ Volume Control: Analog or I 2 C
- ♦ Dual Modulation Schemes: Fixed Frequency and Spread Spectrum
- ♦ Shut-Down Mode and Speaker Mute Mode
- ♦ On-Board LDO for Low-Voltage Analog Power Supply
- ♦ Windows 98SE/2000/XP-Compatible Evaluation Software
- ♦ EV System Includes USB Connectivity

## Ordering Information

| TYPE      | PART              |
|-----------|-------------------|
| EV Kit    | MAX9768EVKIT +    |
| EV System | MAX9768EVCMAXQU + |

Note: The MAX9768 EV kit software is designed for use with the complete EV system. The EV system includes both the Maxim CMAXQUSB interface board and the EV kit. If the Windows software will not be used, the EV kit board can be purchased without the Maxim CMAXQUSB board.

## MAX9768 EV Kit (continued)

| DESIGNATION                                 | QTY                                         | DESCRIPTION                                                            |
|---------------------------------------------|---------------------------------------------|------------------------------------------------------------------------|
| OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION | OPTIONAL COMPONENTS FOR CUSTOMER EVALUATION                            |
| C9, C10                                     | 0                                           | Not installed, ceramic capacitors (0603)                               |
| C11, C12                                    | 2                                           | 0.01µF ±10%, 50V X7R ceramic capacitors (0805) Murata GRM216R71H103K   |
| C13, C15                                    | 2                                           | 0.22µF ±10%, 25V X7R ceramic capacitors (1206) Panasonic ECJ-3VB1E224K |
| C14, C16, C20                               | 3                                           | 0.01µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C103K   |
| C17                                         | 1                                           | 1µF ±10%, 16V X7R ceramic capacitor (0805) Murata GRM21BR71C105K       |
| C18                                         | 1                                           | 1µF ±10%, 10V X7R ceramic capacitor (0603) Murata GRM188R61A105K       |

## MAX9768 Evaluation Kit/Evaluation System

## Component Lists (continued)

## MAX9768 EV Kit (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| U2            |     1 | Maxim 12V low-dropout linear regulator MAX1726EUK33+ (5-pin SOT23) |
| -             |     8 | Shunts                                                             |
| -             |     4 | 0.250in x 0.500in 4-40 round nylon spacers                         |
| -             |     4 | 4-40 x 0.375in nylon machine screws                                |
| -             |     1 | PCB: MAX9768 Evaluation Kit+                                       |

## MAX9768 EV Kit Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX9768.EXE             | Application program                        |
| FTD2XX.INF              | USB device driver file                     |
| UNINST.INI              | Uninstalls the EV kit software             |
| TROUBLESHOOTING_USB.PDF | USB driver installation help file          |

directly from the EV kit software. Text in bold and underlined refers to items from the Windows 98SE/ 2000/XP operating system.

## Procedure for Stand-Alone Operation

The MAX9768 EV kit is fully assembled and tested. Follow the steps below to verify board operation for analog volume control. Do not turn on the power supply until all connections are completed.

- 1) On the MAX9768 EV kit, make sure the shunts are in the default positions (see Table 1).
- 2) Connect the positive terminal of the 4.5V to 14V DC power supply to the PVDD binding post, and the powersupply ground terminal to the PGND binding post.
- 3) Connect the 8 Ω speaker across the FOUT+ and FOUT- binding posts.

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com        |
| Panasonic Corp.       | 800-344-2112 | www.panasonic.com     |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Note:

Indicate that you are using the MAX9768 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C19           |     1 | 100pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H101J |
| J1            |     1 | 2 x 10 right-angle female receptacle                              |
| J2            |     1 | White RCA mono jack                                               |
| J3-J6         |     4 | Binding posts, uninsulated                                        |
| JU1-JU5       |     5 | Single-row 3-pin headers                                          |
| JU6           |     1 | 3-way-pin header                                                  |
| JU7, JU8      |     2 | 2-pin headers                                                     |
| L1, L2        |     2 | 60 Ω , 3A ferrite beads (0805) Murata BLM21PG600SN1               |
| L3, L4        |     2 | Shorted with 0 Ω resistors (0603)                                 |
| L5, L6        |     2 | 22µH, 1.9A inductors TDK SLF10145T-220M1R9PF                      |
| R1, R5        |     2 | 10k Ω ±5% resistors (0603)                                        |
| R4            |     1 | 20 Ω ±5% resistor (1206)                                          |
| R6            |     1 | 10k Ω ±20% thumbwheel potentiometer Panasonic EVL-HFAA05B14       |

## Quick Start

## Recommended Equipment

Before proceeding, the following equipment is needed:

- 4.5V to 14V DC, 3A power supply
- Audio source (i.e., CD player, 1VRMS maximum output)
- 8 Ω speaker
- MAX9768 EV system

MAX9768 EV kit Maxim CMAXQUSB interface board (USB cable included)

- A user-supplied Windows 98SE/2000/XP PC with a spare USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items

<!-- image -->

## MAX9768 Evaluation Kit/Evaluation System

- 4) Plug the audio source to the RCA jack.
- 5) Turn on the audio source.
- 6) Turn on the 4.5V to 14V DC power supply.
- 7) Adjust the potentiometer R6 to change the speaker volume.

## Procedure for I 2 C Interface Volume Control

The MAX9768 EV kit is fully assembled and tested. Follow the steps below to verify board operation for I 2 C volume control. Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit  www.maxim-ic.com/evkitsoftware to download the  latest  version  of  the  EV  kit  software, 9768Rxx.ZIP.
- 2) Install  the  MAX9768 evaluation software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start menu.
- 3) On the CMAXQUSB board, ensure that the shunt of JU1 is in the 3.3V position.
- 4) Carefully connect the boards by aligning the MAX9768 EV kit's 20-pin connector with the 20-pin connector of the CMAXQUSB board.
- 5) Ensure shunts on JU1, JU2, JU4, JU6, and JU7 are in their default positions (see Table 1).
- 6) Place the shunt on JU3 across pins 1-2.
- 7) Place the shunt on JU5 across pins 1-2.
- 8) Remove the shunt on JU8.
- 9) Connect the positive terminal of the 4.5V to 14V DC power supply to the PVDD binding post, and the power-supply ground terminal to the PGND binding post.
- 10) Connect the 8 Ω speaker across the FOUT+ and FOUT- binding posts.
- 11) Plug the audio source to the RCA jack.
- 12) Turn on the audio source.
- 13) Turn on the 4.5V to 14V DC power supply.
- 14) Connect  the  USB  cable  from  the  PC  to  the CMAXQUSB board. A Building Driver Database window pops up in addition to a New Hardware Found message. If you do not see a window that is similar to the one described above after 30s, remove the USB cable from the CMAXQUSB and reconnect it. Administrator privileges are required to install the USB device driver on Windows 2000/XP. Refer to

<!-- image -->

## Table 1. MAX9768 EV Kit Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                      |
|----------|------------------|--------------------------------------------------|
| JU1      | 2-3*             | Normal operation                                 |
| JU1      | 1-2              | Speaker mute                                     |
| JU2      | 1-2*             | Normal operation                                 |
| JU2      | 2-3              | Amplifier shutdown                               |
| JU3, JU4 | 2-3*             | I 2 C Address: disabled, stand- alone operation  |
| JU3, JU4 | 1-2              | I 2 C Address: 1001 011x                         |
| JU3, JU4 | 1-2, 2-3         | I 2 C Address: 1001 001x                         |
| JU3, JU4 | 2-3, 1-2         | I 2 C Address: 1001 010x                         |
| JU5      | 2-3*             | Stand-alone operation                            |
| JU5      | 1-2              | I 2 C volume control mode                        |
| JU6      | 1-4*             | SYNC connected to GND                            |
| JU6      | 1-2              | SYNC connected to V DD                           |
| JU6      | 1-3              | SYNC unconnected                                 |
| JU6      | Open             | SYNC connected to external clock                 |
| JU7      | 1-2*             | V DD supplied by on-board LDO regulator          |
| JU7      | Open             | V DD supplied by an external power supply        |
| JU8      | 1-2*             | In stand-alone operation: classic PWM modulation |
| JU8      | Open             | In stand-alone operation: filterless modulation  |
| JU8      | Open             | I 2 C interface control mode                     |

the TROUBLESHOOTING\_USB.PDF document included with the software if you have any problems during this step.

- 15) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the Best Driver for your Device option. Specify the location of the device driver to be C:\Program Files\MAX9768 (or  the  directory  chosen during installation) using the Browse button.
- 16) Start  the  MAX9768 EV kit software by opening its icon in the Start menu. The GUI main window appears, as shown in Figure 1.
- 17) Move the volume-control slider on the software window and verify that the speaker volume changes.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9768 Evaluation Kit/Evaluation System

## Detailed Description of Hardware

The MAX9768 is a mono, switch-mode (Class D) audio power amplifier. The EV kit is designed to be driven by the lineout or headphone jack of a CD player, or directly  connected to any audio source. A thumbwheel potentiometer mounted on-board is provided to control the volume. The volume can also be controlled by the I 2 C interface.

The EV kit has an on-board LDO (MAX1726) to power the input buffers and the volume-control circuitry.

## Preamplifier Gain Configuration

The preamplifier gain stage of the MAX9768 EV kit is configured to 0dB. To avoid clipping at the amplifier input stage, ensure input signals are ≤ 1VRMS. If input signals are ≥ 1VRMS, attenuate the input signal at the preamplifier gain stage to avoid clipping at the preamplifier output. The preamplifier gain stage is defined as:

AV (preamplifier) = -R3 / R2

where R2 is in the 10k Ω to 40k Ω range.

Define the preamplifier gain such that the output of the preamplifier is ≤ 1VRMS (i.e., VIN x  AV (preamplifier) ≤ 1VRMS). Once the preamplifier gain is fixed, use the amplifier's volume-control block to set the clipping levels at the output of the Class D amplifier.

## Power Supplies

The power supply is applied on PV DD and PGND binding posts. VDD is generated either by the on-board MAX1726 or by an external 3.3V power supply applied between the VDD pad and PGND. See Table 2 for JU7 setting.

## Table 2. JU7 Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                          |
|----------|------------------|--------------------------------------|
| JU7      | 1-2*             | On-board V DD generated by MAX1726   |
| JU7      | Open             | User-provided 3.3V V DD power supply |

## Volume Control

Jumpers JU3, JU4, JU5, and JU8 select which volumecontrol mode is used. See Table 3 for details.

## Table 3. Control-Mode Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                      |
|----------|------------------|--------------------------------------------------|
| JU3, JU4 | 2-3*             | I 2 C Address: disabled, stand- alone operation  |
| JU3, JU4 | 1-2              | I 2 C Address: 1001 011x                         |
| JU3, JU4 | 1-2, 2-3         | I 2 C Address: 1001 001x                         |
| JU3, JU4 | 2-3, 1-2         | I 2 C Address: 1001 010x                         |
| JU5      | 2-3*             | Stand-alone operation                            |
| JU5      | 1-2              | I 2 C volume control mode                        |
| JU8      | 1-2*             | In stand-alone operation: classic PWM modulation |
| JU8      | Open             | In stand-alone operation: filterless modulation  |
| JU8      | Open             | I 2 C interface control mode                     |

## Shutdown Mode

Jumper JU2 sets the amplifier in normal operation or shutdown mode. See Table 4 for details.

## Table 4. JU2 Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| JU2      | 1-2*             | Normal operation |
| JU2      | 2-3              | Shutdown mode    |

## Mute Control

Jumper JU1 controls the MUTE pin state. See Table 5 for details.

## Table 5. JU1 Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| JU1      | 2-3*             | Normal operation |
| JU1      | 1-2              | Speaker muted    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9768 Evaluation Kit/Evaluation System

## Modulation Schemes

Jumper JU6 sets the output modulation scheme. See Table 6 for details.

## Table 6. JU6 Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                  |
|----------|------------------|--------------------------------------------------------------|
| JU6      | 1-4*             | Fixed-frequency mode with f SW = 300kHz                      |
| JU6      | 1-2              | Spread-spectrum mode with f S = 300kHz ±7.5kHz               |
| JU6      | 1-3              | Fixed-frequency mode with f S = 360kHz                       |
| JU6      | Open             | Fixed-frequency mode with f S = 1/4 external clock frequency |

<!-- image -->

Figure 1. MAX9768 Evaluation Software Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description of Software

To start the MAX9768 EV kit software, double-click the MAX9768 EV kit icon created during installation. The GUI main window appears, as shown in Figure 1. Wait approximately 2s while the MAX9768 EV kit software connects to the CMAXQUSB board and automatically detects the I 2 C address of the device.

On the left side of the window, the scrollbar is used to increment/decrement the speaker volume by one step.

On the right side of the window, a user can manually change the device I 2 C address, set volume directly by programming the volume register, and set the modulation mode.

## MAX9768 Evaluation Kit/Evaluation System

<!-- image -->

Figure 2. MAX9768 EV Kit Schematic

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9768 Evaluation Kit/Evaluation System

<!-- image -->

Figure 3. MAX9768 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9768 Evaluation Kit/Evaluation System

Figure 4. MAX9768 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9768 Evaluation Kit/Evaluation System

Figure 5. MAX9768 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9