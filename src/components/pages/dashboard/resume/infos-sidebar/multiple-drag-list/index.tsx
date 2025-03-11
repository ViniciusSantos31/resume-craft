import { GripVertical, LucideIcon, Pen, Plus, Trash } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { SectionTitle } from "../section-title";

import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";

export type ResumeArrayKeys = Exclude<
  keyof ResumeContentData,
  "image" | "summary" | "infos"
>;

export type MultipleDragItemData = {
  formKey: ResumeArrayKeys;
  title: string;
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
};

type MultipleDragListProps = {
  data: MultipleDragItemData;
  onAdd: () => void;
  onEdit: (index: number) => void;
};

export const MultipleDragList = ({
  data,
  onAdd,
  onEdit,
}: MultipleDragListProps) => {
  const { control } = useFormContext<ResumeData>();

  const { fields, move, remove } = useFieldArray({
    control,
    name: `content.${data.formKey}`,
  });

  const isEmpty = fields.length === 0;

  const handleDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    move(source.index, destination.index);
  };

  return (
    <div>
      <SectionTitle title={data.title} icon={data.icon} />

      <div className="mt-4 flex flex-col">
        {!!fields.length && (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId={`droppable-${data.formKey}`}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="border-muted overflow-hidden rounded border"
                >
                  {fields.map((field, index) => {
                    const titleKey = data.titleKey as keyof typeof field;
                    const descriptionKey =
                      data.descriptionKey as keyof typeof field;

                    const isLastItem = index === fields.length - 1;

                    return (
                      <Draggable
                        draggableId={`draggable-item-${data.formKey}-${index}`}
                        index={index}
                        key={`draggable-item-${data.formKey}-${index}`}
                      >
                        {(provided) => (
                          <div
                            key={field.id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className={cn(
                              "bg-blue bg-muted/50 flex h-16 w-full",
                              !isLastItem && "border-muted border-b",
                            )}
                          >
                            <div
                              {...provided.dragHandleProps}
                              className="bg-muted/50 flex h-full w-6 items-center justify-center transition-all hover:brightness-125"
                            >
                              <GripVertical size={14} />
                            </div>
                            <div className="group relative flex flex-1 cursor-pointer flex-col justify-center px-3 transition-all">
                              <p className="font-title text-sm font-bold">
                                {field[titleKey]}
                              </p>
                              <p className="text-muted-foreground text-xs">
                                {field[descriptionKey]}
                              </p>
                              <div
                                className={cn(
                                  "border-muted bg-background absolute flex w-max items-center rounded-xl border p-1 [&>button]:size-8 [&>button]:rounded-lg",
                                  "right-0 translate-x-full opacity-0 transition-all",
                                  "group-hover:right-2 group-hover:translate-x-0 group-hover:opacity-100",
                                )}
                              >
                                <Tooltip content="Editar">
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => onEdit(index)}
                                  >
                                    <Pen size={14} />
                                  </Button>
                                </Tooltip>
                                <Tooltip content="Remover">
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    className="hover:bg-red-500/20"
                                    onClick={() => remove(index)}
                                  >
                                    <Trash size={14} />
                                  </Button>
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
        <div className="mt-5 flex w-full items-center justify-between">
          {!isEmpty && (
            <Button
              variant="link"
              className="px-0 hover:text-red-400"
              onClick={() => remove()}
            >
              <Trash />
              Remover {data.title.toLocaleLowerCase()}
            </Button>
          )}
          <Button
            variant="outline"
            className={cn("w-full gap-2", !isEmpty && "w-max")}
            onClick={onAdd}
          >
            <Plus size={16} />
            Adicionar item
          </Button>
        </div>
      </div>
    </div>
  );
};
