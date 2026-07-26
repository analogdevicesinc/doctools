<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX13042E evaluation kit (EV kit) demonstrates the MAX13042E 4-channel, bidirectional logic-level translator, featured in a tiny 12-bump UCSP™ package. The MAX13042E translates between VL and VCC logic levels and guarantees data rates up to 100Mbps.

As configured, the EV kit dedicates two channels for translation between VL to VCC and two channels for translation between VCC to VL. The EV kit gives the option of using SMA connectors or test points at the input signal lines, while providing scope probe jacks for monitoring the outputs. The VL range is 1.62V to 3.2V and the ±15kV ESD-protected VCC range is 2.2V to 3.6V.

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                                                                                         |
|--------------------------|-------|---------------------------------------------------------------------------------------------------------------------|
| C1, C2                   |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K TDK C1005X7R1C104K                              |
| C3                       |     1 | 1µF ±10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J105K TDK C1005X5R0J105K                               |
| IVL1, IVL2, IVCC3, IVCC4 |     4 | SMA PCB vertical mounts                                                                                             |
| JU1                      |     1 | 3-pin header                                                                                                        |
| JU2-JU5                  |     4 | 2-pin headers                                                                                                       |
| OVCC1, OVCC2, OVL3, OVL4 |     4 | 5mm scope probe jacks                                                                                               |
| R1-R8                    |     8 | 0 Ω resistors (0603)                                                                                                |
| R9-R12                   |     4 | 49.9 Ω ±1% resistors (0402)                                                                                         |
| TP1-TP4                  |     0 | Not installed, test points                                                                                          |
| U1                       |     1 | 4-channel, bidirectional logic-level translator (12-bump UCSP, 1.54mm x 2.12mm) Maxim MAX13042EEBC+ (Top Mark: ADQ) |
| -                        |     5 | Shunts                                                                                                              |
| -                        |     1 | PCB: MAX13042E EV Kit+                                                                                              |

UCSP is a trademark of Maxim Integrated Products, Inc.

Features

- ♦ Supply Voltage Ranges 1.62V to 3.2V (VL) 2.2V to 3.6V (VCC)
- ♦ ±15kV ESD Protection on I/O VCC Lines
- ♦ Two Dedicated Channels to Allow Translation from VL to VCC
- ♦ Two Dedicated Channels to Allow Translation from VCC to VL
- ♦ 100Mbps Guaranteed Data Rates
- ♦ Enable Input
- ♦ SMA Inputs and 5mm Scope Probe Jack Outputs
- ♦ 12-Bump UCSP (1.54mm x 2.12mm) Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX13042EEVKIT+ | EV Kit |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com        |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX13042E when contacting these component suppliers.

1

For pricing, delivery, and ordering information, please contact Maxim Direct 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX13042E Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 1.62V to 3.2V DC power supply
- 2.2V to 3.6V DC power supply
- Logic function generator
- Oscilloscope
- Standard 5mm scope probe

The MAX13042E EV kit circuit features I/O traces of matched length (within 5 mils) to maintain propagationtime uniformity. The EV kit dedicates two channels for translation between VL to VCC and two channels for translation between VCC to VL. Input signals can either be applied using SMA connectors IVL1, IVL2, IVCC3, and IVCC4 or at test points TP1-TP4. Output signals are monitored using oscilloscope probe jacks OVCC1, OVCC2, OVL3, and OVL4. The EV kit also utilizes the MAX13042E's enable function through configuration of jumper JU1.

## Enable Input

Jumper  JU1  controls  the  enable  input  of  the MAX13042E. See Table 1 for JU1 jumper selection.

## Table 1. Enable (EN) Pin Setting (Jumper JU1)

| SHUNT POSITION   | ENABLE PIN (EN)   | EV KIT FUNCTION                |
|------------------|-------------------|--------------------------------|
| 1-2*             | Connected to V L  | Enabled (normal operation)     |
| 2-3              | Connected to GND  | Disabled (tri-state operation) |

## SMA Inputs (IVL1, IVL2, IVCC3, and IVCC4)

To utilize the SMA connectors to apply input signals to the EV kit, these connections must be appropriately terminated. See Table 2 for SMA input termination settings. Signal traces will remain of matched length in this configuration.

## Table 2. SMA Input Termination (Jumpers JU2-JU5)

| SHUNT POSITION   | INPUT TERMINATION   |
|------------------|---------------------|
| Installed        | 49.9 Ω termination  |
| Not installed*   | None**              |

## Test Point Input Option (TP1-TP4)

To implement use of the test point inputs, remove the appropriate resistor (R1, R2, R7, or R8) and apply a signal to the corresponding test point. Signal traces will remain of matched length in this configuration. GND pads are conveniently located on the EV kit to ground the input signal. Note: The input signal is not as well matched as it is with the SMA inputs.

## Procedure

The MAX13042E EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed on jumper JU1 between pins 1-2 (normal operation).
- 2) Set the logic function generator to produce a 1MHz, 2VP-P, 1V offset square wave. Disable the logic function generator output.
- 3) Connect the logic function generator to SMA input IVL1. Terminate function generator as necessary.
- 4) Connect the positive terminal of the 2V supply to the VL PCB pad and the ground terminal to the GND PCB pad.
- 5) Connect the positive terminal of the 3V supply to the VCC PCB pad and the ground terminal to the GND PCB pad.
- 6) Place an oscilloscope probe at scope jack output OVCC1.
- 7) Enable the power supplies and the logic function generator output.
- 8) Verify  that  OVCC1 shows a 1MHz, 3VP-P square wave with a 1.5V offset.

## Detailed Description

The MAX13042E EV kit demonstrates the MAX13042E 4-channel, bidirectional logic-level translator, featured in  a  tiny  12-bump UCSP package. The MAX13042E translates between VL (1.62V to 3.2V) and VCC (2.2V to 3.6V) logic levels and guarantees data rates up to 100Mbps. The MAX13042E also features ±15kV ESD protection on all I/O VCC lines.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX13042E Evaluation Kit

<!-- image -->

Figure 1. MAX13042E EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX13042E Evaluation Kit

Figure 2. MAX13042E EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX13042E EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX13042E Evaluation Kit

Figure 4. MAX13042E EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX13042E Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                      | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------|-----------------|
|                 0 | 10/07           | Initial release                  | -               |
|                 1 | 2/08            | Corrected labeling on schematic. | 3               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->