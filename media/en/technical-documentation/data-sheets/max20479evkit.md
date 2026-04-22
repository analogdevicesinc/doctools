<!-- lastmod 2025-09-09 -->
<!-- image -->

Evaluates: MAX20478/MAX20479

Click here to ask an associate for production status of specific part numbers.

## General Description

The MAX20479 evaluation kit (EV kit) is a fully assembled  and  tested  application  circuit  for  the  MAX20478/ MAX20479: Two/three input automotive voltage monitor with  watchdog.  The  EV  kit  is  created  with  automotive grade  components  and  can  test  all  functionality  of  the IC including watchdog and redundant supply monitoring. Various test points and jumpers are included to allow for various functionalities of the IC to be tested.

## Features

- Single Supply Operation with 2.35V to 5.5V Input Supply Range
- IN1-2 Voltage Monitor Channels Capable of Monitoring 0.5V to 3.6875V
- IN3 Voltage Monitor Channel Capable of Monitoring 0.5V to 5.6V
- OTP Controlled Voltage Monitoring with ECC
- Selectable 102.5% to 110% OV Monitors
- Selectable 97.5% to 90% UV Monitors
- 0.5% Step Size
- 0.8% Voltage Accuracy
- ASIL-D Compliance (MAX20478)
- ASIL-B Compliance (MAX20479)
- Programmable RESET1 and RESET2 Pins
- Jumpers and Test Points on Key Nodes for Simplified Evaluation
- -40C° to +125C° Automotive Temperature Range
- Automotive Grade External Components
- Proven PCB Layout
- Fully Assembled and Tested

## MAX20479 Evaluation Kit

## Quick Start

## Required Equipment

- MAX20479 EV kit
- DC power supply (PS1)
- Digital multimeter (DMM) (Multiple can be needed according to OTP settings)
- Function generator (FUNGEN)

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

- 1) Verify that all jumpers are in their default positions as shown in Table 1.
- 2) Connect the PS1 positive terminal to VDDA\_B and PS1 negative terminal to GND1 on the EV kit.
- 3) Set DMM1 to measure VDC and connect probes to VIN1A\_VIN1B and GND2 on the EV kit.
- If MAX20478 is being used to monitor more than one voltage, attach DMM2 to VIN2A\_VIN2B and/or DMM3 to VIN3B/VDDA.
- 4) Set FUNGEN to nominal setpoints as described in OTP settings and attach to VIN1A\_VIN1B (and/or VIN2A\_VIN2B and VIN3B/VDDA if in use).
- 5) Set PS1 to between 2.35V and 5.5V and enable supply output.
- VDDAB\_TP is available to probe PS1.
- 6) Verify that the DMMs measure the nominal setpoints as described by OTP settings.
- 7) Verify that the RESETx is not asserted using DMM or oscilloscope.
- 8) Confirm RESETx mapping by adjusting the FUNGEN applied voltage to trigger an OV/UV condition as defined by the OV/UV thresholds in OTP settings.
- 9) EV kit operation verification is complete.

Ordering Information appears at end of data sheet.

Visit Web Support t o complete the nondisclosure agreement (NDA) required to receive additional product information.

319-100771; Rev 2; 11/23

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel:  781.329.4700      |      © 2023  Analog  Devices,  Inc.  All  rights  reserved. 2023 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

©

## MAX20479 Evaluation Kit Evaluates: MAX20478/MAX20479

<!-- image -->