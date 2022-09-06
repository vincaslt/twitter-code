import React, { useRef } from 'react';
import {
  useTooltip,
  useTooltipTrigger,
  useOverlayPosition,
  OverlayContainer,
  TooltipTriggerProps,
} from 'react-aria';
import { useTooltipTriggerState } from 'react-stately';

interface Props extends TooltipTriggerProps {
  text: string;
  children: React.ReactNode;
}

function Tooltip({ text, children, ...tooltipProps }: Props) {
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipTriggerState = useTooltipTriggerState(tooltipProps);
  const trigger = useTooltipTrigger(tooltipProps, tooltipTriggerState, triggerRef);
  const tooltip = useTooltip(trigger.tooltipProps, tooltipTriggerState);

  const tooltipPosition = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef: tooltipRef,
    placement: 'bottom start',
    isOpen: tooltipTriggerState.isOpen,
  });

  const triggerProps = { ...trigger.triggerProps, ref: triggerRef };

  const anchor = React.isValidElement(children) ? (
    React.cloneElement(children, triggerProps)
  ) : (
    <span {...triggerProps}>{children}</span>
  );

  return (
    <>
      {anchor}
      {tooltipTriggerState.isOpen && (
        <OverlayContainer>
          <div
            {...tooltip.tooltipProps}
            {...tooltipPosition.overlayProps}
            ref={tooltipRef}
          >
            <div
              style={{
                background: 'black',
                color: 'white',
              }}
            >
              {text}
            </div>
          </div>
        </OverlayContainer>
      )}
    </>
  );
}

export default Tooltip;
