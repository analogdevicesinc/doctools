<!-- lastmod 2022-08-02 -->
## General Description

The MAX9406 PCIe ® -To-HDMI™ evaluation kit (EV kit) is a fully  assembled and tested circuit board that demonstrates the capabilities of the MAX9406 DisplayPort™ to DVI™/HDMI level shifter. The correct version of the Intel graphics chipset driver and video BIOS need to be installed properly to use the MAX9406 EV kit.

The MAX9406 EV kit should be plugged into a PCI Express ® (PCIe) bus slot on a PC that supports DisplayPort as defined by VESA, such as Intel's Eaglelake/Cantiga chipset with an integrated graphics controller.

The MAX9406 EV kit PCB comes with a MAX9406ETJ+ installed (32-pin thin QFN package with an exposed pad).

PCIe and PCI Express are registered trademarks of PCI-SIG Corp.

HDMI is a trademark of HDMI Licensing, LLC.

DisplayPort is a trademark of Video Electronics Standards Association (VESA).

DVI is a trademark of Digital Display Working Group (DDWG).

| DESIGNATION                                       |   QTY | DESCRIPTION                                                         |
|---------------------------------------------------|-------|---------------------------------------------------------------------|
| C1, C2, C16, C19                                  |     4 | 22µF ±10%, 6.3V X5R ceramic capacitors (1206) Murata GRM31CR60J226M |
| C3, C4, C7-C14, C17, C18, C20, C21, C22, C25, C26 |    17 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E104K |
| C5                                                |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (0805) Murata GRM21BR60J106K  |
| C6, C15, C23, C24                                 |     4 | 2.2µF ±10%, 25V X5R ceramic capacitors (0805) Murata GRM219R61E225K |
| J1                                                |     0 | Not installed, PCIe bus (gold finger pads on PCB)                   |
| J2                                                |     1 | HDMI connector                                                      |
| J3-J11                                            |     9 | 3-pin headers                                                       |
| L1                                                |     1 | 600 Ω , 1.5A ferrite bead (1206) Murata BLM31PG601SH1L              |

<!-- image -->

## Features

- ♦ &gt; 400mV Differential HDMI Output at 2Gbps Data Rate
- ♦ &lt; 450ps Propagation Delay
- ♦ &lt; 20ps Channel-to-Channel Skew at 2Gbps
- ♦ Low Intrinsic Jitter: DJ &lt; 7psP-P and RJ &lt; 1psRMS
- ♦ Human Body Model (HBM) is ±4kV on All Pins and CDM is ±1kV on Cable Connection Pins
- ♦ Bidirectional Level Shifter of 5V to 3.3V for Display Data Channel (DDC) Pins
- ♦ Level Shifter of 5V to 3.3V for the Hot-Plug Detection (HPD) Pin
- ♦ Proven PCB Layout
- ♦ Lead(Pb)-Free  and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9406EVKIT+ | EV Kit |

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                          |
|-------------------------|-------|--------------------------------------|
| Q1                      |     1 | n-channel enhancement DMOS FET       |
| R2, R4                  |     2 | 2.2k Ω ±5% resistors (0603)          |
| R3                      |     1 | 1.00k Ω ±1% resistor (0603)          |
| R5, R14, R16, R17       |     4 | 20k Ω ±5% resistors (0603)           |
| R6-R9, R12, R19         |     6 | 1.5k Ω ±5% resistors (0603)          |
| R10, R11, R37, R38, R41 |     5 | 100k Ω ±5% resistors (0603)          |
| R13, R15                |     2 | 10k Ω ±5% resistors (0603)           |
| R18                     |     1 | 7.5k Ω ±5% resistor (0603)           |
| R20-R27                 |     0 | Not installed, resistors (0603)      |
| R28-R35                 |     8 | 0 Ω ±5% resistors (0603)             |
| R36                     |     1 | 0.1 Ω ±1% resistor (0603)            |
| R39                     |     1 | 1.00M Ω ±1% resistor (0603)          |
| R40                     |     1 | 47k Ω ±5% resistor (0603)            |
| SW1                     |     1 | Pushbutton switch (SMT, 6.6mm x 6mm) |
| SW2                     |     0 | Not installed, slide switch          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX9406 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| TP1           |     0 | Not installed, test point (standard via, 0.39in drill, solder-mask opening) |
| U1            |     1 | DisplayPort level shifter (32 TQFN-EP*) Maxim MAX9406ETJ+                   |
| U2            |     1 | Low-dropout linear regulator (8 SO) Maxim MAX1659ESA+                       |
| U3            |     1 | Two-wire serial EEPROM 2K (256 x 8) (8 SO)                                  |

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| U4, U6, U7    |     3 | High-speed differential ESD- protectors (10 µMAX ® ) Maxim MAX3208EAUB+ (Top Mark: 3208 EAUB+) |
| U5            |     1 | Low-voltage open-drain inverter (14 SO) Fairchild 74LCX06M (Top Mark: LCX06)                   |
| U8            |     1 | DisplayPort video connector                                                                    |
| U9, U10       |     2 | Dual FET bus switches with level shifting (8 SO)                                               |
| -             |     6 | Shunts                                                                                         |
| -             |     1 | PCB: MAX9406 Evaluation Kit+                                                                   |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX9406 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX9406 EV kit
- A PC using Intel's Eaglelake/Cantiga chipset with an integrated graphics controller
- A built-in laptop LCD screen or an external monitor with a VGA interface as the primary display
- Another LCD monitor with a DVI or HDMI interface as the secondary digital display

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows ® operating system.

## Procedure

The MAX9406 EV kit is fully assembled and configured for HDMI output on J2. Follow the steps below to verify board operation:

- 1) Verify  that  all  jumpers  (J3-J11)  are  in  their  default positions, as shown in Table 1.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

Windows is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 2) Check if the graphics driver and video BIOS are already installed by moving the mouse pointer (arrow) all the way down to the bottom of the primary display to show the task bar. Look at the notification area (system tray) at the right side of the task bar to find the Digital Display utility.  If  not  found,  the graphics driver and video BIOS need to be installed.
- 3) Carefully plug in the MAX9406 EV kit into an available PCIe bus slot. Connect an LCD monitor with an HDMI interface to the HDMI plug on the MAX9406 EV kit using an HDMI cable. Or, connect an LCD monitor with a DVI interface using a DVI-to-HDMI conversion cable.
- 4) The secondary monitor connected through the HDMI port will light up if the digital display is enabled. If no video appears, move the mouse pointer (arrow) all the way down to the bottom of the primary display to show the task bar. Further, move the mouse pointer to  the  notification  area  at  the  right  side  of  the  task bar and onto the Digital  Display utility.  Right  click the Display Port and then select the Digital Display and Monitor option. The LCD monitor connected to the EV kit will light up.

## Detailed Description of Hardware

The MAX9406 (U1) level shifts all four high-speed differential  data  channels and the DDC channel. Highspeed channel data comes from the PCIe bus (J1), goes through the MAX9406, and outputs at the HDMI connector (J2). The MAX9406 is enabled by jumper J8. The MAX9406 also relays the hot-plug detection signal from the HDMI plug to the PCIe bus through an inverter (U5-D) when a shunt is placed across pins 2-3 of jumper J9. The hot-plug detection signal is amplitudelimited to 0.9V at the PCIe bus side.

The 5V supply matching the HDMI interface side is converted down from the 12V supply of the PCIe bus by the MAX1659 (U2). Three MAX3208E chips (U4, U6,

## MAX9406 Evaluation Kit

and U7) provide ESD protection for both high-speed and DDC channels on the HDMI interface. The AT24C02 EEPROM (U3) provides an EDID for testing purposes. The AT24C02 is initially un-programmed. Pullup resistors (1.5k Ω ) are provided on both PCIe and HDMI sides of the DDC channel.

## Evaluating the MAX9406 DP-to-HDMI Dongle Board

The MAX9406 EV kit can also be used to evaluate a MAX9406-based DP-to-HDMI level-shifter dongle board. To evaluate a dongle board, move resistors R28-R35 to locations R20-R27 to isolate the MAX9406 on the EV kit. Note: Connector U8 is mounted at assembly, but is not production tested.

Table 1. MAX9406 EV kit Jumper Descriptions (J3-J11)

| JUMPER   | SIGNAL             | SHUNT POSITION   | DESCRIPTION                 |
|----------|--------------------|------------------|-----------------------------|
| J3       | HDMIB_CTRL_CLK     | 1-2*             | Connected to the MAX9406    |
| J3       | HDMIB_CTRL_CLK     | 2-3              | Connected to the EEPROM     |
| J4       | HDMIB_CTRL_DATA    | 1-2*             | Connected to the MAX9406    |
| J4       | HDMIB_CTRL_DATA    | 2-3              | Connected to the EEPROM     |
| J5       | HDMIC_CTRL_CLK     | 1-2              | Connected to the EEPROM     |
| J5       | HDMIC_CTRL_CLK     | 2-3              | Not connected               |
| J6       | HDMIC_CTRL_DATA    | 1-2              | Connected to the EEPROM     |
| J6       | HDMIC_CTRL_DATA    | 2-3              | Not connected               |
| J7       | EEPROM WP          | 1-2              | Write protected (read only) |
| J7       | EEPROM WP          | 2-3              | Write enabled               |
| J8       | MAX9406 Enable     | 1-2              | Disabled                    |
| J8       | MAX9406 Enable     | 2-3*             | Enabled                     |
| J9       | Hot Plug Detection | 1-2              | Manual emulation            |
| J9       | Hot Plug Detection | 2-3*             | Plug-in detection           |
| J10      | HDMI/DP Select 1   | 1-2*             | HDMI mode                   |
| J10      | HDMI/DP Select 1   | 2-3              | DP mode                     |
| J11      | HDMI/DP Select 2   | 1-2*             | HDMI mode                   |
| J11      | HDMI/DP Select 2   | 2-3              | DP mode                     |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9406 Evaluation Kit

Figure 1a. MAX9406 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9406 Evaluation Kit

Figure 1b. MAX9406 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX9406 Evaluation Kit

Figure 2. MAX9406 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9406 Evaluation Kit

<!-- image -->

Figure 3. MAX9406 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9406 Evaluation Kit

Figure 4. MAX9406 EV Kit PCB Layout-Ground Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9406 Evaluation Kit

Figure 5. MAX9406 EV Kit PCB Layout-Power Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9406 Evaluation Kit

Figure 6. MAX9406 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_